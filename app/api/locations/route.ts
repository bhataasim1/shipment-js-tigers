import prisma from "@/prisma/prisma";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    const location = await prisma.location.findMany();
    if (!location) {
      return NextResponse.json({ message: "No location found", status: 404 });
    }

    // console.log("location", location);
    return NextResponse.json({ location });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ message: "An error occurred", status: 500 });
  }
}
