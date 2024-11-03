import { NextRequest, NextResponse } from "next/server";
import db from "../../../../libs/db";
import bcrypt from "bcrypt";

export async function POST(request: NextRequest) {
  try {
    const data = await request.json();

    const userFound = await db.member.findUnique({
      where: {
        email: data.email,
      },
    });

    if (userFound) {
      return NextResponse.json(
        {
          message: "El correo ya se encuentra registrado.",
        },
        {
          status: 400,
        }
      );
    }

    const hashedPassword = await bcrypt.hash(data.password, 10);
    const newUser = await db.member.create({
      data: {
        names: data.names,
        lastNames: data.lastNames,
        dateOfBirth: data.dateOfBirth,
        phone: data.phone,
        email: data.email,
        username: data.username,
        password: hashedPassword,
      },
    });

    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const { password: _, ...user } = newUser;
    return NextResponse.json(user);
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
  } catch (error: any) {
    return NextResponse.json(
      {
        message: error.message,
      },
      {
        status: 500,
      }
    );
  }
}
