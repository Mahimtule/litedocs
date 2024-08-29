import { connectDB } from "@/utils/database";
import { Document } from "@/models/document.models";
import { NextRequest, NextResponse } from "next/server";

interface IdProps {
  id: string;
}

export const GET = async (
  request: NextRequest,
  { params }: { params: IdProps }
) => {
  try {
    await connectDB();
    const document = await Document.findById(params.id);

    if (!document)
      return new NextResponse("No document found with the given id", {
        status: 400,
      });
    return new NextResponse(JSON.stringify({ document: document }));
  } catch (error) {
    return new NextResponse("Error fetching this document", { status: 500 });
  }
};

export const PUT = async (
  request: NextRequest,
  { params }: { params: IdProps }
) => {
  try {
    await connectDB();

    const document = await Document.findById(params.id);

    if (!document)
      return new NextResponse("No document found with the given id", {
        status: 400,
      });

    const { documentTitle, content } = await request.json();

    if (!documentTitle)
      return new NextResponse("Some Fields are missing", { status: 400 });

    const updatedDocument = await Document.findByIdAndUpdate(params.id, {
      documentTitle: documentTitle,
      content: content,
    });

    return new NextResponse(
      JSON.stringify({
        message: "Document updated successfully",
        updatedDocument: updatedDocument,
      })
    );
  } catch (error) {
    return new NextResponse("Error updating this document", { status: 500 });
  }
};

export const DELETE = async (
  request: NextRequest,
  { params }: { params: IdProps }
) => {
  try {
    await connectDB();
    const document = await Document.findById(params.id);
    if (!document)
      return new NextResponse("No document found with the given id", {
        status: 400,
      });

    const deletedDocument = await Document.findByIdAndDelete(params.id);

    return new NextResponse(
      JSON.stringify({
        deletedDocument: deletedDocument,
      }),
      { status: 200 }
    );
  } catch (error) {
    console.error("Error deleting this document: ", error);
    return new NextResponse("Error deleting this document", { status: 500 });
  }
};
