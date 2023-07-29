import React from "react";
import "./Login.css";
import { Button } from "@mui/material";
import { signInWithPopup, auth, provider } from "./firebase";
import { useDispatch } from "react-redux";
import { login } from "./features/userSlice";
export default function Login() {
  const dispatch = useDispatch();
  const singIn = () => {
    signInWithPopup(auth, provider)
      .then((result) => {
        const { displayName, email, photoURL } = result.user;
        dispatch(
          login({
            name: displayName,
            email: email,
            photoUrl: photoURL,
          })
        );
      })
      .catch((error) => console.error(error));
  };
  return (
    <div className="login">
      <div className="login__container">
        <img
          src="https://blog.logomyway.com/wp-content/uploads/2021/02/gmail-logo.jpg"
          alt=""
        />
        <Button onClick={singIn} variant="contained" color="primary">
          Login
        </Button>
      </div>
    </div>
  );
}
