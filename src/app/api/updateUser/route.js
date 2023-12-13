import { NextResponse } from "next/server";
import { connectMongoDB } from "../../../../lib/mongodb";
import User from "../../../../models/user";

export async function POST(req) {
  try {
    await connectMongoDB();
    const { email, activeMember, membershipPurchaseDate, membershipExpirationDate } = await req.json();
    const user = await User.findOneAndUpdate({ email }, { activeMember, membershipPurchaseDate, membershipExpirationDate })
    return NextResponse.json(
        { message: 'User updated.' },
        { status: 201 }
    )
  } catch (error) {
    console.log(error);
  }
}