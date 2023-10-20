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
import GridViewOutlinedIcon from "@mui/icons-material/GridViewOutlined";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import PaymentsOutlinedIcon from "@mui/icons-material/PaymentsOutlined";
import HistoryOutlinedIcon from "@mui/icons-material/HistoryOutlined";
import { useState } from "react";
import { Button } from "@/components/ui/button";

const NavBar = () => {
  const [singIn, setSingIn] = useState(false);

  return (
    <div className="navContainer">
      <div className="navbar">
        <Logo width="90" />
        <Link to="/">
          <HomeOutlinedIcon />
        </Link>
        <Link to="/collections">
          <GridViewOutlinedIcon />
        </Link>
        <span className="searchIcon">
          <SearchIcon />
          <SearchInput
            type="search"
            placeholder="Search..."
            className={"w-[400px]"}
          />
        </span>
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
                <DropdownMenuTrigger className="flexA">
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
                    <Link to="/profile" className="full spaceX">
                      <AccountCircleOutlinedIcon />
                      <span>Profile</span>
                    </Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                    <Link to="/addsold" className="full spaceX">
                      <PaymentsOutlinedIcon />
                      <span>Add Sold</span>
                    </Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                    <Link to="/orders" className="full spaceX">
                      <HistoryOutlinedIcon />
                      <span>Orders</span>
                    </Link>
                  </DropdownMenuItem>

                  <DropdownMenuSeparator />
                  <DropdownMenuItem onClick={() => setSingIn(false)}>
                    <Link to="/" className="full spaceX">
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
