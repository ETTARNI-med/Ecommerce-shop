import Logo from "../Logo";
import DarkLogo from "../Logo/Dark";
import { SearchInput } from "@/components/ui/searchInput";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Link } from "react-router-dom";
import { useState } from "react";
import { ThemeProvider } from "@/components/theme-provider";
import { ModeToggle } from "@/components/mode-toggle";
import CollectionHover from "../CollectionHover";
import { Button } from "@/components/ui/button";
import { useTheme } from "@/components/theme-provider";
import {
  Search,
  Heart,
  ShoppingCart,
  Wallet,
  UserCircle2,
  Receipt,
  History,
  LogOut,
  ChevronDown,
} from "lucide-react";

const NavBar = () => {
  const [singIn, setSingIn] = useState(false);
  const { theme } = useTheme();
  return (
    <div className="w-full grid grid-rows-2">
      <div
        className="flex justify-around items-center"
        onMouseEnter={() => {
          console.log(theme);
        }}
      >
        <Link to="/">
          <Logo width="90" className="block dark:hidden" />
          <DarkLogo width="90" className="hidden dark:block" />
        </Link>
        <Link to="/collections">
          <CollectionHover />
        </Link>
        <span className="searchIcon">
          <Search size={20} />
          <SearchInput
            type="search"
            placeholder="Search..."
            className={"w-[400px]"}
          />
        </span>
        <ThemeProvider defaultTheme="light" storageKey="vite-ui-theme">
          <ModeToggle></ModeToggle>
        </ThemeProvider>
        <Link to="/favorites">
          <Heart size={20} />
        </Link>
        <Link to="/cart">
          <ShoppingCart size={20} />
        </Link>
        {singIn ? (
          <>
            <span className="flex w-16 justify-between">
              <Wallet size={20} />
              <span>
                <span id="currency">$</span>
                <span id="sold">0.00</span>
              </span>
            </span>
            <span className="account">
              <DropdownMenu>
                <DropdownMenuTrigger className="flex items-center">
                  <Avatar>
                    <AvatarImage src="https://www.shareicon.net/data/512x512/2016/07/26/802043_man_512x512.png" />
                    <AvatarFallback>Avatar</AvatarFallback>
                  </Avatar>
                  <ChevronDown size={20} strokeWidth={3} />
                </DropdownMenuTrigger>
                <DropdownMenuContent>
                  <DropdownMenuLabel>My Account</DropdownMenuLabel>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem>
                    <Link
                      to="/profile"
                      className="flex items-center w-full space-x-2"
                    >
                      <UserCircle2 size={20} strokeWidth={1.75} />
                      <span>Profile</span>
                    </Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                    <Link
                      to="/addsold"
                      className="flex items-center w-full space-x-2"
                    >
                      <Receipt size={20} strokeWidth={1.75} />
                      <span>Add Sold</span>
                    </Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                    <Link
                      to="/orders"
                      className="flex items-center w-full space-x-2"
                    >
                      <History size={20} strokeWidth={1.75} />
                      <span>Orders</span>
                    </Link>
                  </DropdownMenuItem>

                  <DropdownMenuSeparator />
                  <DropdownMenuItem onClick={() => setSingIn(false)}>
                    <Link to="/" className="flex items-center w-full space-x-2">
                      <LogOut size={20} strokeWidth={1.75} />
                      <span>Signout</span>
                    </Link>
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </span>
          </>
        ) : (
          <>
            <Button variant="link">Sign Up</Button>
            <Button variant="link" onClick={() => setSingIn(true)}>
              Login
            </Button>
          </>
        )}
      </div>
    </div>
  );
};

export default NavBar;
/* 
dark mode
import { ThemeProvider } from "@/components/theme-provider";
import { ModeToggle } from "@/components/mode-toggle";
      <ThemeProvider defaultTheme="system" storageKey="vite-ui-theme">
        <ModeToggle></ModeToggle>
      </ThemeProvider>
*/
