"use client";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogClose,
} from "@/components/ui/dialog";
import axios from "axios";
import { Plus } from "lucide-react";
import { FormEvent, useState } from "react";

interface NewDocumentModalProps {
  onCreate: (newDocument: any) => void;
}

const NewDocumentModal = ({ onCreate }: NewDocumentModalProps) => {
  const [documentTitle, setDocumentTitle] = useState("");

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    try {
      const response = await axios.post("/api/v1/document", {
        documentTitle: documentTitle,
      });
      if (response.status === 201) {
        onCreate(response.data.newDocument);
        setDocumentTitle("");
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <Dialog>
      <DialogTrigger>
        <span className="btn btn_primary text-sm flex justify-center items-center gap-2">
          <Plus width={22} height={22} />
          <span className="hidden sm:block">Start a new Document</span>
        </span>
      </DialogTrigger>
      <DialogContent className="rounded-md">
        <DialogHeader>
          <DialogTitle>Start a new Document</DialogTitle>
          <DialogDescription>
            Kindly fill in the below fields to start a new document.
          </DialogDescription>
        </DialogHeader>
        <form
          onSubmit={handleSubmit}
          className="w-full flex flex-col justify-center items-start gap-2"
        >
          <label>Document title</label>
          <input
            type="text"
            className="input"
            value={documentTitle}
            onChange={(e) => setDocumentTitle(e.target.value)}
            required
          />
          <DialogClose asChild>
            <button type="submit" className="mt-3 btn btn_primary">
              create
            </button>
          </DialogClose>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default NewDocumentModal;
