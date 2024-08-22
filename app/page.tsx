import NavBar from "@/components/NavBar";
import DocumentCard from "@/components/utils/DocumentCard";
import { Plus } from "lucide-react";

const page = () => {
  return (
    <main className="p-5 min-w-full min-h-screen bg-[#020E1C]">
      <NavBar />
      <div className="w-full my-8 flex justify-between items-center">
        <h1 className="text-xl font-medium">All documents</h1>
        <button className="btn btn_primary flex justify-center items-center gap-2 text-sm">
          <Plus width={22} height={22}/>
          <span className="hidden sm:block">Start a new Document</span>
        </button>
      </div>
      <div className="w-full flex flex-col gap-3">
        <DocumentCard
          title="Tips and Tricks for CSS.."
          createdAt="Created about 1 Day ago"
        />
        <DocumentCard
          title="Tips and Tricks for HTML.."
          createdAt="Created about 2 Day ago"
        />
        <DocumentCard
          title="Tips and Tricks for Tailwind.."
          createdAt="Created about 3 Day ago"
        />
        <DocumentCard
          title="Tips and Tricks for Next.js.."
          createdAt="Created about 8 Day ago"
        />
        <DocumentCard
          title="Tips and Tricks for Next.js.."
          createdAt="Created about 8 Day ago"
        />
      </div>
    </main>
  );
};

export default page;
