import React from "react";
import "./Header.css";
import { Avatar, IconButton } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import AppsIcon from "@mui/icons-material/Apps";
import NotificationsIcon from "@mui/icons-material/Notifications";
import { useDispatch, useSelector } from "react-redux";
import { logout, selectUser } from "./features/userSlice";
import { auth } from "./firebase";

export default function Header() {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();
  const logOut = () => {
    auth.signOut().then(() => dispatch(logout()));
  };
  return (
    <div className="header">
      <div className="header__left">
        <IconButton children={<MenuIcon />} />

        <img
          src="https://i.pinimg.com/736x/ae/47/fa/ae47fa9a8fd263aa364018517020552d.jpg"
          alt="gmail-logo"
        />
      </div>
      <div className="header__middle">
        <SearchIcon />
        <input type="text" placeholder="Search mail" />
        <IconButton children={<ArrowDropDownIcon />} />
      </div>
      <div className="header__right">
        <IconButton children={<AppsIcon />} />
        <IconButton children={<NotificationsIcon />} />
        <IconButton
          onClick={logOut}
          children={<Avatar src={user?.photoUrl} />}
        />
      </div>
    </div>
  );
}
