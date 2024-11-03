import CredentialsProvider from "next-auth/providers/credentials";
import db from "@/libs/db";
import bcrypt from "bcrypt";

export const authOptions = {
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: {
          label: "Correo",
          type: "email",
          placeholder: "Correo Electrónico",
        },
        password: { label: "Contraseña", type: "password" },
      },
      // eslint-disable-next-line
      async authorize(credentials) {
        const userFound = await db.member.findUnique({
          where: {
            email: credentials?.email,
          },
        });

        if (!userFound) throw new Error("Usuario no encontrado.");

        if (credentials?.password) {
          const matchPassword = await bcrypt.compare(
            credentials?.password,
            userFound.password
          );

          if (!matchPassword) throw new Error("Contraseña incorrecta.");

          return {
            id: userFound.member_id,
            name: userFound.names,
            email: userFound.email,
          };
        }
      },
    }),
  ],
  pages: {
    signIn: "/auth/login",
  },
};
