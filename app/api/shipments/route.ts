import prisma from "@/prisma/prisma";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    const shipment = await prisma.shipment.findMany();
    if (!shipment) {
      return NextResponse.json({ message: "No shipment found", status: 404 });
    }

    // console.log(shipment);
    return NextResponse.json({ shipment });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ message: "An error occurred", status: 500 });
  }
}
