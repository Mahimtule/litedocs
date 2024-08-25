import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Plus } from "lucide-react";

const NewDocumentModal = () => {
  return (
    <Dialog>
      <DialogTrigger>
        <span className="btn btn_primary flex justify-center items-center gap-2 text-sm">
          <Plus width={22} height={22} />
          <span className="hidden sm:block">Start a new Document</span>
        </span>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Start a new Document</DialogTitle>
          <DialogDescription>
            Kindly fill in the below fields to start a new document.
          </DialogDescription>
        </DialogHeader>
        <form className="w-full flex flex-col justify-center items-start gap-3">
          <label>Document Title</label>
          <input className="input" type="text" />
          <button className="mt-2 btn btn_primary" type="submit">
            create
          </button>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default NewDocumentModal;
