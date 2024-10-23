// /app/api/auth/signup/route.ts
import { hash } from "bcryptjs";
import { NextResponse } from "next/server";
import { connectDB } from "@/lib/db";
import { User } from "@/models/User";
import jwt from "jsonwebtoken";
import { UserInput } from "@/types/auth";

export async function POST(req: Request): Promise<NextResponse> {
  try {
    const { email, password, firstName,lastName }: UserInput = await req.json();

    console.log(firstName)
    // Validate input
    if (!email || !password || !firstName || !lastName) {
      return NextResponse.json(
        { message: "Missing required fields" },
        { status: 400 }
      );
    }

    // Connect to database
    await connectDB();

    // Check if user exists
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return NextResponse.json(
        { message: "User already exists" },
        { status: 409 }
      );
    }

    // Hash password
    const hashedPassword = await hash(password, 12);

    // Create new user
    const user = await User.create({
      email,
      password: hashedPassword,
      firstName,
      lastName,
    });

    // Generate JWT token
    // const token = jwt.sign(
    //   { userId: user._id, email: user.email },
    //   process.env.JWT_SECRET as string,
    //   { expiresIn: "1d" }
    // );

    // Create response
    const response = NextResponse.json(
      { message: "User created successfully" },
      { status: 201 }
    );

    // Set cookie
    // response.cookies.set({
    //   name: "token",
    //   value: token,
    //   httpOnly: true,
    //   secure: process.env.NODE_ENV === "production",
    //   sameSite: "strict",
    //   maxAge: 86400 // 1 day in seconds
    // });

    return response;
  } catch (error) {
    console.error("Signup error:", error);
    return NextResponse.json(
      { message: "Error creating user" },
      { status: 500 }
    );
  }
}