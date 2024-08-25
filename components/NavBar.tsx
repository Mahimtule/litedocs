"use client";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { LogOut } from "lucide-react";
import Link from "next/link";
import { signOut, useSession } from "next-auth/react";

const NavBar = () => {
  const signOutHandler = () => {
    signOut();
  };
  const session = useSession();
  return (
    <nav className="w-full flex justify-between items-center">
      <Link href="/documents" className="text-lg font-bold">
        LiteDocs
      </Link>
      <div className="flex justify-center items-center gap-4">
        <Avatar>
          <AvatarImage src={session.data?.user?.image || ""} />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
        <button
          className="btn btn_outline flex justify-center items-center gap-2"
          onClick={signOutHandler}
        >
          <span className="hidden sm:block">logout</span>
          <LogOut width={18} height={18} />
        </button>
      </div>
    </nav>
  );
};

export default NavBar;
