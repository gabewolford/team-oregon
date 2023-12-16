import { NextResponse } from "next/server";
import { connectMongoDB } from "../../../../lib/mongodb";
import User from "../../../../models/user";
import bcrypt from "bcryptjs";

export async function POST(req) {
  try {
    const {
      firstName,
      lastName,
      email,
      password,
      activeMember,
      isAdmin,
      membershipPurchaseDate,
      membershipExpirationDate,
    } = await req.json();
    const hashedPassword = await bcrypt.hash(password, 10);
    await connectMongoDB();
    await User.create({
      firstName,
      lastName,
      email,
      password: hashedPassword,
      activeMember,
      isAdmin,
      membershipPurchaseDate,
      membershipExpirationDate,
    });

    return NextResponse.json({ message: "User registered." }, { status: 201 });
  } catch (error) {
    return NextResponse.json(
      { message: "An error occured when registering the user." },
      { status: 500 }
    );
  }
}
