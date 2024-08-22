import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";


const NavBar = () => {
  return (
    <nav className="w-full flex justify-between items-center">
      <h1>litedocs</h1>
      <Avatar>
        <AvatarImage src="https://github.com/shadcn.png" />
        <AvatarFallback>CN</AvatarFallback>
      </Avatar>
    </nav>
  );
};

export default NavBar;
