import { Editor } from "@/components/editor/Editor";
import NavBar from "@/components/NavBar";
import React from "react";

const page = () => {
  return (
    <main className="p-5 lg:px-28 min-w-full min-h-screen bg-[#020E1C] flex flex-col justify-start items-center gap-8">
      <NavBar />
      <Editor />
    </main>
  );
};

export default page;
