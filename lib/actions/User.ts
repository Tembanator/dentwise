"use server";

import User from "@/models/User";
import { currentUser } from "@clerk/nextjs/server";
import dbConnect from "../db";

export async function syncUser() {
  try {
    await dbConnect();
    const user = await currentUser();
    if (!user) return;

    const existingUser = await User.findOne({ clerkId: user.id });

    if (existingUser) return existingUser;

    const newUser = new User({
      clerkId: user.id,
      email: user.emailAddresses[0].emailAddress,
      firstName: user.firstName,
      lastName: user.lastName,
      //   phone: user.phoneNumbers[0]!.phoneNumber,
    });

    await newUser.save();
    return newUser;
  } catch (error) {
    console.log("Error in syncUser action", error);
  }
}
