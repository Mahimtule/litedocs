"use client";
import React, { useEffect, useState } from "react";
import Editor from "@/components/editor/Editor";
import NavBar from "@/components/NavBar";
import { Save } from "lucide-react";
import axios from "axios";
import { useParams } from "next/navigation";
import { useToast } from "@/components/ui/use-toast";
import { FilePenLine } from "lucide-react";

interface DocumentProps {
  _id: string;
  documentTitle: string;
  user: string;
  content: string;
  createdAt: Date;
}

const Page = () => {
  const [editorContent, setEditorContent] = useState<string>("");
  const [saved, setSaved] = useState(true);
  const [document, setDocument] = useState<DocumentProps | null>(null);
  const [title, setTitle] = useState("");
  const [editing, setEditing] = useState(false);
  const params = useParams();
  const id = params.id;
  const { toast } = useToast();

  useEffect(() => {
    const fetchDocument = async () => {
      try {
        const response = await axios.get(`/api/v1/document/${id}`);
        const fetchedDocument = response.data.document;
        setDocument(fetchedDocument);
        setEditorContent(fetchedDocument.content);
        setTitle(fetchedDocument.documentTitle);
      } catch (error) {
        console.error("Error fetching document:", error);
      }
    };

    fetchDocument();
  }, []);

  const handleSave = async () => {
    try {
      await axios.put(`/api/v1/document/${id}`, {
        documentTitle: title,
        content: editorContent,
      });
      setSaved(true);
      toast({
        title: "Document Saved Successfully",
        description: "Your Document has been saved successfully.",
      });
    } catch (error) {
      console.error("Error saving document:", error);
    }
  };

  const handleContentChange = (content: string) => {
    setSaved(false);
    setEditorContent(content);
  };

  return (
    <main className="p-5 lg:px-28 min-w-full min-h-screen bg-[#020E1C] flex flex-col justify-start items-center">
      <NavBar />
      <div className="w-full">
        <div className="w-full my-6 flex justify-between items-center">
          <div className="flex justify-start items-center gap-2">
            {!editing ? (
              <h1 className="text-xl font-medium">
                {document ? title : "Loading..."}
              </h1>
            ) : (
              <input
                className="input"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
              />
            )}

            <FilePenLine
              onClick={() => setEditing(!editing)}
              className="cursor-pointer"
              width={20}
              height={20}
            />
            {!saved && (
              <span className="text-muted-foreground italic underline">
                not saved
              </span>
            )}
          </div>
          <button
            onClick={handleSave}
            className="btn btn_primary flex justify-center items-center gap-2"
          >
            <Save width={20} height={20} />
            <span className="hidden md:block">Save Changes</span>
          </button>
        </div>
        {document && (
          <Editor onChange={handleContentChange} contentValue={editorContent} />
        )}
      </div>
    </main>
  );
};

export default Page;