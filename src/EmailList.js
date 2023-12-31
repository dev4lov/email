import React, { useEffect, useState } from "react";
import "./EmailList.css";
import Checkbox from "@mui/material/Checkbox";
import { IconButton } from "@mui/material";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import RedoIcon from "@mui/icons-material/Redo";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import KeyboardHideIcon from "@mui/icons-material/KeyboardHide";
import SettingsIcon from "@mui/icons-material/Settings";
import InboxIcon from "@mui/icons-material/Inbox";
import PeopleAltIcon from "@mui/icons-material/PeopleAlt";
import LocalOfferIcon from "@mui/icons-material/LocalOffer";
import Section from "./Section";
import EmailRow from "./EmailRow";
import { db } from "./firebase.js";
import { collection, query, orderBy, onSnapshot } from "firebase/firestore";

export default function EmailList() {
  const [emails, setEmails] = useState([]);
  useEffect(() => {
    const q = query(collection(db, "emails"), orderBy("timestamp", "desc"));
    onSnapshot(q, (snapshot) => {
      setEmails(
        snapshot.docs.map((doc) => ({
          id: doc.id,
          data: doc.data(),
        }))
      );
    });
  }, []);

  return (
    <div className="emailList">
      <div className="emailList__settings">
        <div className="emailList__settingsLeft">
          <Checkbox />
          <IconButton children={<ArrowDropDownIcon />} />
          <IconButton children={<RedoIcon />} />
          <IconButton children={<MoreVertIcon />} />
        </div>
        <div className="emailList__settingsRight">
          <IconButton children={<ChevronLeftIcon />} />
          <IconButton children={<ChevronRightIcon />} />
          <IconButton children={<KeyboardHideIcon />} />
          <IconButton children={<SettingsIcon />} />
        </div>
      </div>
      <div className="emailList__sections">
        <Section Icon={InboxIcon} title="Primary" color="red" selected />
        <Section Icon={PeopleAltIcon} title="Social" color="#1A73E8" />
        <Section Icon={LocalOfferIcon} title="Promotion" color="green" />
      </div>

      <div className="emailList__list">
        {emails.map(({ id, data: { to, subject, message, timestamp } }) => (
          <EmailRow
            id={id}
            key={id}
            title={to}
            subject={subject}
            disc={message}
            time={new Date(timestamp?.seconds * 1000).toUTCString()}
          />
        ))}
      </div>
    </div>
  );
}
