import React from "react";
import "./EmailRow.css";
import { IconButton } from "@mui/material";
import Checkbox from "@mui/material/Checkbox";
import StarOutlineIcon from "@mui/icons-material/StarOutline";
import LabelImportantOutlinedIcon from "@mui/icons-material/LabelImportantOutlined";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { selectMail } from "./features/mailSlice";

export default function EmailRow({ id, title, subject, disc, time }) {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const openMail = () => {
    dispatch(
      selectMail({
        id,
        title,
        subject,
        disc,
        time,
      })
    );
    navigate("/mail");
  };
  return (
    <div onClick={openMail} className="emailRow">
      <div className="emailRow__options">
        <Checkbox />
        <IconButton children={<StarOutlineIcon />} />
        <IconButton children={<LabelImportantOutlinedIcon />} />
      </div>

      <h3 className="emailRow__title">{title}</h3>

      <div className="emailRow__message">
        <h4>
          {subject}{" "}
          <span className="emailRow__discription">
            {" - "}
            {disc}
          </span>
        </h4>
      </div>
      <p className="emailRow__time">{time}</p>
    </div>
  );
}
