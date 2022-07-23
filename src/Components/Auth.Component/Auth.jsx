import React from "react";
import { useState } from "react";
import Login from "../Login.Component/Login";
import SignUp from "../SignUp.Component/SignUp";
// import "./auth.css";
// import { Login, SignUp } from "./components";

export function Auth() {
  const [authVal, setAuthVal] = useState(true);

  return (
    <>
      {authVal ? (
        <Login setAuthVal={setAuthVal} />
      ) : (
        <SignUp setAuthVal={setAuthVal} />
      )}
    </>
  );
}
