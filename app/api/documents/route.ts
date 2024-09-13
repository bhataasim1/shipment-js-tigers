import prisma from "@/prisma/prisma";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    const documents = await prisma.document.findMany();
    if (!documents) {
      return NextResponse.json({ message: "No documents found", status: 404 });
    }

    // console.log(documents);
    return NextResponse.json({ documents });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ message: "An error occurred", status: 500 });
  }
}
