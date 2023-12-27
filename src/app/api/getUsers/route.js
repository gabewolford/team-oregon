import { NextResponse } from "next/server";
import { connectMongoDB } from "../../../../lib/mongodb";
import User from "../../../../models/user";

export async function POST(request) {
  try {
    await connectMongoDB();

    const { page = 1, itemsPerPage = 10, filterName, activeMember } = await request.json();

    const query = {};

    if (filterName) {
      query.$or = [
        { firstName: { $regex: filterName, $options: "i" } },
        { lastName: { $regex: filterName, $options: "i" } },
      ];
    }

    if (activeMember !== undefined) {
      query.activeMember = activeMember;
    }

    const totalUsers = await User.countDocuments(query);

    const users = await User.find(query)
      .sort({ membershipPurchaseDate: -1 })
      .skip((page - 1) * itemsPerPage)
      .limit(itemsPerPage);

    return NextResponse.json({ users, totalUsers });
  } catch (error) {
    console.error(error);
  }
}
