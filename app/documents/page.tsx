"use client";

import NavBar from "@/components/NavBar";
import DocumentCard from "@/components/utils/DocumentCard";
import NewDocumentModal from "@/components/utils/NewDocumentModal";
import axios from "axios";
import { useEffect, useState } from "react";

interface DocumentProps {
  _id: string;
  documentTitle: string;
  user: string;
  createdAt: Date;
}

const page = () => {
  const [documents, setDocuments] = useState<DocumentProps[]>([]);

  useEffect(() => {
    const fetchDocuments = async () => {
      try {
        const response = await axios.get("/api/v1/document");
        setDocuments(response.data.documents);
      } catch (error) {
        console.error(error);
      }
    };

    fetchDocuments();
  }, []);

  const onCreate = (newDocument: any) => {
    setDocuments((prevDocuments) => [newDocument, ...prevDocuments]);
  };

  const onDelete = (id: string) => {
    setDocuments((prevDocuments) =>
      prevDocuments.filter((document) => document._id !== id)
    );
  };

  return (
    <main className="p-5 lg:px-28 min-w-full min-h-screen bg-[#020E1C] flex flex-col justify-start items-center">
      <NavBar />
      <div className="w-full my-8 flex justify-between items-center">
        <h1 className="text-xl font-medium">All documents</h1>
        <NewDocumentModal onCreate={onCreate} />
      </div>
      <div className="w-full flex flex-col gap-4">
        {documents.length > 0 ? (
          documents.map((document) => (
            <DocumentCard
              key={document._id}
              id={document._id}
              title={document.documentTitle}
              createdAt={document.createdAt}
              onDelete={onDelete}
            />
          ))
        ) : (
          <p>No Documents Found</p>
        )}
      </div>
    </main>
  );
};

export default page;
