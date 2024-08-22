import { Trash2 } from "lucide-react";

interface DocumentCardProp {
  title: string;
  createdAt: string;
}

const DocumentCard = ({ title, createdAt }: DocumentCardProp) => {
  return (
    <div className="w-full p-6 glassmorphism flex justify-between items-center rounded-md gap-5 ">
      <div>
        <h1 className="text-lg font-medium">{title}</h1>
        <p className="text-sm text-muted-foreground">{createdAt}</p>
      </div>
      <button>
        <Trash2 className="text-red-600" width={22} height={22} />
      </button>
    </div>
  );
};

export default DocumentCard;
