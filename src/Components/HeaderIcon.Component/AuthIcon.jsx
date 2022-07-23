import React from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../Custom-hooks/useAuth";
import { AiFillAlert } from "react-icons/ai";

export const AuthIcon = () => {
  const { user } = useAuth();
  const navigate = useNavigate();
  return user ? (
    console.log("done")
  ) : (
    <button
      onClick={() => {
        navigate("/auth");
      }}
    >
      <AiFillAlert />
    </button>
  );
};
