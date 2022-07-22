import axios from "axios";
import React, { useEffect } from "react";
import { createContext, useContext, useState } from "react";

const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const flashToken = localStorage.getItem("flashPlay");
  const [user, setUser] = useState();
  const [encodedToken, setEncodedToken] = useState();
  console.log(flashToken);
  useEffect(() => {
    if (flashToken) {
      (async function() {
        setEncodedToken(flashToken);
        try {
          const response = await axios.post("/api/auth/verify", {
            encodedToken: flashToken,
          });
          if (response.status === 200) {
            setUser(response.data);
            console.log(user);
          }
        } catch (error) {
          console.log(error);
        }
      })();
    }
  }, []);

  const logInAuth = async (loginDetails) => {
    try {
      const response = await axios.post("/api/auth/login", {
        email: loginDetails.email,
        password: loginDetails.password,
      });
      if (response.status === 200) {
        localStorage.setItem("flashToken", response.data.encodedToken);
        setUser(response.data.foundUser);
        setEncodedToken(response.data.encodedToken);
      }
    } catch (error) {
      console.log(error);
    }
  };
  const logOutAuth = () => {
    localStorage.removeItem("flashToken");
    setUser(null);
    encodedToken(null);
  };

  const signUpAuth = async (signUpDetails) => {
    try {
      const response = await axios.post("/api/auth/sign", {
        firstName: signUpDetails.firstName,
        lastName: signUpDetails.lastName,
        email: signUpDetails.email,
        password: signUpDetails.password,
      });
      if (response.status === 201) {
        localStorage.setItem("flashToken", response.data.encodedToken);
        setUser(response.data.foundUser);
        setEncodedToken(response.data.encodedToken);
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <AuthContext.Provider
      value={{ user, encodedToken, signUpAuth, logInAuth, logOutAuth }}
    >
      {children}
    </AuthContext.Provider>
  );
};

const useAuth = () => useContext(AuthContext);
export { useAuth, AuthProvider };
