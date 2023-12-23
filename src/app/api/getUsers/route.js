import { NextResponse } from "next/server";
import { connectMongoDB } from "../../../../lib/mongodb";
import User from "../../../../models/user";

export async function POST(request) {
  try {
    await connectMongoDB();

    const { page = 1, itemsPerPage = 10, filterName } = await request.json();

    const query = {};
    if (filterName) {
      query.$or = [
        { firstName: { $regex: filterName, $options: "i" } },
        { lastName: { $regex: filterName, $options: "i" } },
      ];
    }

    const totalUsers = await User.countDocuments(query);

    const users = await User.find(query)
      .skip((page - 1) * itemsPerPage)
      .limit(itemsPerPage);

    return NextResponse.json({ user: users, totalUsers });
  } catch (error) {
    console.error(error);
  }
}
