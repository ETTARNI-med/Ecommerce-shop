import Logo from "../Logo";
import { SearchInput } from "@/components/ui/searchInput";
import SearchIcon from "@mui/icons-material/Search";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import AccountBalanceWalletOutlinedIcon from "@mui/icons-material/AccountBalanceWalletOutlined";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import ArrowDropDownOutlinedIcon from "@mui/icons-material/ArrowDropDownOutlined";
import { Link } from "react-router-dom";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import ExitToAppOutlinedIcon from "@mui/icons-material/ExitToAppOutlined";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import PaymentsOutlinedIcon from "@mui/icons-material/PaymentsOutlined";
import HistoryOutlinedIcon from "@mui/icons-material/HistoryOutlined";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { ThemeProvider } from "@/components/theme-provider";
import { ModeToggle } from "@/components/mode-toggle";
import CollectionHover from "../CollectionHover";

const NavBar = () => {
  const [singIn, setSingIn] = useState(false);

  return (
    <div className="w-full grid grid-rows-2">
      <div className="flex justify-around items-center">
        <Logo width="90" />
        <Link to="/">
          <HomeOutlinedIcon />
        </Link>
        <Link to="/collections">
          <CollectionHover />
        </Link>
        <span className="searchIcon">
          <SearchIcon />
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
          <FavoriteBorderOutlinedIcon />
        </Link>
        <Link to="/cart">
          <ShoppingCartOutlinedIcon />
        </Link>
        {singIn ? (
          <>
            <span className="wallet">
              <AccountBalanceWalletOutlinedIcon />
              <span className="currency">$</span>
              <span className="sold">0.00</span>
            </span>
            <span className="account">
              <DropdownMenu>
                <DropdownMenuTrigger className="flex">
                  <Avatar>
                    <AvatarImage src="https://www.shareicon.net/data/512x512/2016/07/26/802043_man_512x512.png" />
                    <AvatarFallback>Avatar</AvatarFallback>
                  </Avatar>
                  <ArrowDropDownOutlinedIcon />
                </DropdownMenuTrigger>
                <DropdownMenuContent>
                  <DropdownMenuLabel>My Account</DropdownMenuLabel>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem>
                    <Link to="/profile" className="w-full space-x-2">
                      <AccountCircleOutlinedIcon />
                      <span>Profile</span>
                    </Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                    <Link to="/addsold" className="w-full space-x-2">
                      <PaymentsOutlinedIcon />
                      <span>Add Sold</span>
                    </Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                    <Link to="/orders" className="w-full space-x-2">
                      <HistoryOutlinedIcon />
                      <span>Orders</span>
                    </Link>
                  </DropdownMenuItem>

                  <DropdownMenuSeparator />
                  <DropdownMenuItem onClick={() => setSingIn(false)}>
                    <Link to="/" className="w-full space-x-2">
                      <ExitToAppOutlinedIcon />
                      <span>Signout</span>
                    </Link>
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </span>
          </>
        ) : (
          <>
            <Button variant="link" onClick={() => setSingIn(true)}>
              <Link to="/">Sign Up</Link>
            </Button>
            <Button variant="link" onClick={() => setSingIn(true)}>
              <Link to="/">Login</Link>
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
