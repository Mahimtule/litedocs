import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { LogOut } from "lucide-react";
import Link from "next/link";

const NavBar = () => {
  return (
    <nav className="w-full flex justify-between items-center">
      <Link href="/documents" className="text-lg font-bold">
        LiteDocs
      </Link>
      <div className="flex justify-center items-center gap-4">
        <Avatar>
          <AvatarImage src="https://github.com/shadcn.png" />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
        <button className="btn btn_outline flex justify-center items-center gap-2">
          <span className="hidden sm:block">logout</span>
          <LogOut width={18} height={18} />
        </button>
      </div>
    </nav>
  );
};

export default NavBar;
