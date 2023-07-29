import React from "react";
import "./Sidebar.css";
import { Button, IconButton } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import SidebarOption from "./SidebarOption";
import InboxIcon from "@mui/icons-material/Inbox";
import StarIcon from "@mui/icons-material/Star";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import LabelImportantIcon from "@mui/icons-material/LabelImportant";
import NoteIcon from "@mui/icons-material/Note";
import NearMeIcon from "@mui/icons-material/NearMe";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import PersonIcon from "@mui/icons-material/Person";
import DuoIcon from "@mui/icons-material/Duo";
import CallIcon from "@mui/icons-material/Call";
import { useDispatch } from "react-redux";
import { openSendMessage } from "./features/mailSlice";

export default function Sidebar() {
  const dispatch = useDispatch();
  return (
    <div className="sidebar">
      <Button
        startIcon={<AddIcon fontSize="large" />}
        className="sidebar__compose"
        onClick={() => dispatch(openSendMessage())}
      >
        Compose
      </Button>
      <SidebarOption
        Icon={InboxIcon}
        title="Inbox"
        number={15}
        selected={true}
      />
      <SidebarOption Icon={StarIcon} title="Starred" number={5} />
      <SidebarOption Icon={AccessTimeIcon} title="Snoozed" number={3} />
      <SidebarOption Icon={LabelImportantIcon} title="Important" number={7} />
      <SidebarOption Icon={NearMeIcon} title="Sent" number={9} />
      <SidebarOption Icon={NoteIcon} title="Drafts" number={1} />
      <SidebarOption Icon={ExpandMoreIcon} title="More" />

      <div className="sidebar__footer">
        <div className="sidebar__footerIcons">
          <IconButton children={<PersonIcon />} />
          <IconButton children={<DuoIcon />} />
          <IconButton children={<CallIcon />} />
        </div>
      </div>
    </div>
  );
}
