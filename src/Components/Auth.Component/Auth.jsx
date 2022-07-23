import { useState } from "react";
import { useDocTitle } from "../../hooks/useDocTitle";
import Login from "../Login.Component/Login";
import SignUp from "../SignUp.Component/SignUp";
// import "./auth.css";
// import { Login, SignUp } from "./components";

export function Auth() {
  useDocTitle("Auth - SmashTube - Manoj Sarna");
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
