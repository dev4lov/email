import React from "react";
import "./SendMail.css";
import CloseIcon from "@mui/icons-material/Close";
import { Button, IconButton } from "@mui/material";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { closeSendMessage } from "./features/mailSlice";
import { db } from "./firebase.js";
import { addDoc, collection, serverTimestamp } from "firebase/firestore";

export default function SendMail() {
  const {
    register,
    handleSubmit,
    getValues,
    formState: { errors },
  } = useForm();

  const dispatch = useDispatch();

  const onSubmit = async () => {
    const newData = {
      to: getValues("to"),
      subject: getValues("subject"),
      message: getValues("message"),
      timestamp: serverTimestamp()
    };
    // Add a new document with a generated id.
    await addDoc(collection(db, "emails"), newData);
    dispatch(closeSendMessage());
  };

  return (
    <div className="sendMail">
      <div className="sendMailHeader">
        <h3>New Message</h3>
        <IconButton
          children={<CloseIcon />}
          onClick={() => dispatch(closeSendMessage())}
        />
      </div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input
          type="email"
          placeholder="To"
          {...register("to", { required: true })}
        />
        {errors.to && <p className="sendMail__error">To is Required</p>}
        <input
          type="text"
          placeholder="Subject"
          {...register("subject", { required: true })}
        />
        {errors.subject && (
          <p className="sendMail__error">Subject is Required</p>
        )}

        <input
          className="sendMail__message"
          type="text"
          placeholder="Message..."
          {...register("message", { required: true })}
        />
        {errors.message && (
          <p className="sendMail__error">Message is Required</p>
        )}

        <div className="sendMail__options">
          <Button
            className="sendMail__send"
            variant="contained"
            color="primary"
            type="submit"
          >
            Send
          </Button>
        </div>
      </form>
    </div>
  );
}
