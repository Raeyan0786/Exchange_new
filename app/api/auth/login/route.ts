// /app/api/auth/login/route.ts
import { compare } from "bcryptjs";
import { NextResponse } from "next/server";
import { connectDB } from "@/lib/db";
import { User } from "@/models/User";
import jwt from "jsonwebtoken";
import { UserInput } from "@/types/auth";

export async function POST(req: Request): Promise<NextResponse> {
  try {
    const { email, password }: UserInput = await req.json();

    // Validate input
    if (!email || !password) {
      return NextResponse.json(
        { message: "Missing required fields" },
        { status: 400 }
      );
    }

    // Connect to database
    await connectDB();

    // Find user
    const user = await User.findOne({ email });
    if (!user) {
      return NextResponse.json(
        { message: "Invalid credentials" },
        { status: 401 }
      );
    }

    // Verify password
    const isValidPassword = await compare(password, user.password);
    if (!isValidPassword) {
      return NextResponse.json(
        { message: "Invalid credentials" },
        { status: 401 }
      );
    }

    // Generate JWT token
    const token = jwt.sign(
      { userId: user._id, email: user.email },
      process.env.JWT_SECRET as string,
      { expiresIn: "1d" }
    );

    // Create response
    const response = NextResponse.json(
      { message: "Login successful",token:token },
      { status: 200 }
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
    console.error("Login error:", error);
    return NextResponse.json(
      { message: "Error logging in" },
      { status: 500 }
    );
  }
}