import { connectDB } from "@/utils/database";
import { NextRequest, NextResponse } from "next/server";
import { Document } from "@/models/document.models";
import { getServerSession } from "next-auth";
import { authOptions } from "../../auth/[...nextauth]/options";

export const GET = async (request: NextRequest) => {
  try {
    await connectDB();
    const session = await getServerSession(authOptions);

    if (!session || !session.user) {
      return new NextResponse("Unauthorized", { status: 500 });
    }
    const documents = await Document.find({ user: session.user.id }).sort({
      createdAt: -1,
    });
    return new NextResponse(
      JSON.stringify({
        documents: documents,
      })
    );
  } catch (error) {
    console.error("Error getting All Documents!!", error);
    return new NextResponse("Error Getting Documents", { status: 500 });
  }
};

export const POST = async (request: NextRequest) => {
  try {
    await connectDB();
    const session = await getServerSession(authOptions);
    if (!session || !session.user) {
      return new NextResponse("Unauthorized", { status: 401 });
    }
    const { documentTitle } = await request.json();
    if (!documentTitle) {
      return new NextResponse("Document Title Empty!!", { status: 400 });
    }
    const newDocument = await Document.create({
      documentTitle: documentTitle,
      user: session.user.id,
    });
    return new NextResponse(
      JSON.stringify({
        message: "Document Created",
        newDocument: newDocument,
      }),
      { status: 201 }
    );
  } catch (error) {
    console.error("Error creating", error);
    return new NextResponse("Error Creating Documents", { status: 500 });
  }
};
