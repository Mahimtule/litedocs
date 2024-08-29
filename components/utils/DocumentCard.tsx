import axios from "axios";
import { Trash2 } from "lucide-react";
import Link from "next/link";

interface DocumentCardProps {
  id: string;
  title: string;
  createdAt: Date;
  onDelete: (_id: string) => void;
}

const DocumentCard = ({
  id,
  title,
  createdAt,
  onDelete,
}: DocumentCardProps) => {
  const handleDelete = async () => {
    try {
      const response = await axios.delete(`/api/v1/document/${id}`);
      if (response.status === 200) {
        onDelete(response.data.deletedDocument._id);
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="w-full p-5 glassmorphism flex justify-between items-center gap-5 rounded-md">
      <Link
        href={`/documents/${id}`}
        className="w-full flex justify-start items-center gap-2"
      >
        <img
          src="google_docs.png"
          alt="google_docs_logo"
          className="w-8 h-8 object-contain hidden md:block"
        />
        <div>
          <h1 className="text-lg font-medium">{title}</h1>
          <p className="text-sm text-muted-foreground">
            {new Date(createdAt).toDateString()}
          </p>
        </div>
      </Link>
      <button onClick={handleDelete}>
        <Trash2 className="text-red-600" width={22} height={22} />
      </button>
    </div>
  );
};

export default DocumentCard;
