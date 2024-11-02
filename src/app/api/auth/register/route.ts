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

    console.log(">>>", data);
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

    const { password: _, ...user } = newUser;
    return NextResponse.json(user);
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
