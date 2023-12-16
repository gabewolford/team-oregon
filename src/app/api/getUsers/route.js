import { NextResponse } from "next/server";
import { connectMongoDB } from "../../../../lib/mongodb";
import User from "../../../../models/user";

export async function POST() {
  try {
    await connectMongoDB();
    const user = await User.find();
    return NextResponse.json({ user });
  } catch (error) {
    console.log(error);
  }
}