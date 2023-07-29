import React from "react";
import "./Mail.css";
import { IconButton } from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import MoveToInboxIcon from "@mui/icons-material/MoveToInbox";
import ErrorIcon from "@mui/icons-material/Error";
import DeleteIcon from "@mui/icons-material/Delete";
import EmailIcon from "@mui/icons-material/Email";
import WatchLaterIcon from "@mui/icons-material/WatchLater";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import LabelImportantIcon from "@mui/icons-material/LabelImportant";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import UnfoldMoreIcon from "@mui/icons-material/UnfoldMore";
import PrintIcon from "@mui/icons-material/Print";
import ExitToAppIcon from "@mui/icons-material/ExitToApp";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectOpenMail } from "./features/mailSlice";

export default function Mail() {
  const navigate = useNavigate();
  const selectedMail = useSelector(selectOpenMail);
  
  return (
    <div className="mail">
      <div className="mail__tools">
        <div className="mail__toolsLeft">
          <IconButton
            onClick={() => navigate("/")}
            children={<ArrowBackIcon />}
          />
          <IconButton children={<MoveToInboxIcon />} />
          <IconButton children={<ErrorIcon />} />
          <IconButton children={<DeleteIcon />} />
          <IconButton children={<EmailIcon />} />
          <IconButton children={<WatchLaterIcon />} />
          <IconButton children={<CheckCircleIcon />} />
          <IconButton children={<LabelImportantIcon />} />
          <IconButton children={<MoreVertIcon />} />
        </div>
        <div className="mail__toolsRight">
          <IconButton children={<UnfoldMoreIcon />} />
          <IconButton children={<PrintIcon />} />
          <IconButton children={<ExitToAppIcon />} />
        </div>
      </div>
      <div className="mail__body">
        <div className="mail__bodyHeader">
          <h2>{selectedMail?.subject}</h2>
          <LabelImportantIcon />
          <p>{selectedMail?.title}</p>
          <p className="mail__time">{selectedMail?.time}</p>
        </div>
        <div className="mail__message">
          <p>{selectedMail?.disc}</p>
        </div>
      </div>
    </div>
  );
}
