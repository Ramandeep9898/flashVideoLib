import React, { useEffect, useState } from "react";
import { createContext, useContext, useReducer } from "react";
import axios from "axios";
// import { likeReducer } from "../Reducers/likeReducer";
const likeContext = createContext();

const LikeProvider = ({ children }) => {
  localStorage.setItem("flashPlay", "1234");
  const encodedToken = localStorage.getItem("flashPlay");
  const [likes, setLike] = useState([]);

  useEffect(() => {
    (async function() {
      if (encodedToken) {
        try {
          const likeResponse = await axios.get("/api/user/likes", {
            headers: {
              authorization: encodedToken,
            },
          });
          console.log("likeResponse", likeResponse);
          if (likeResponse.status === 200) {
            setLike(likeResponse.data.likes);
          }
        } catch (error) {
          console.log("getError", error);
        }
      }
    })();
  }, [encodedToken]);

  // add to likes

  const addToLikes = async (item) => {
    try {
      const response = await axios.post(
        "/api/user/likes",
        { video: item },
        {
          headers: {
            authorization: encodedToken,
          },
        }
      );
      console.log(response);
      if (response.status === 201) {
        setLike(response.data.likes);
      }
    } catch (error) {
      console.log("postError", error);
    }
  };

  const removeFromLikes = async (item) => {
    console.log("jskdj", item._id);
    try {
      const response = await axios.delete(`/api/user/likes/${item._id}`);
      console.log(response);
      if (response.status === 200) {
        setLike(response.data.likes);
      }
    } catch (error) {
      console.log("deleteError", error.response);
    }
  };

  return (
    <likeContext.Provider value={{ likes, addToLikes, removeFromLikes }}>
      {children}
    </likeContext.Provider>
  );
};
const useLikes = () => useContext(likeContext);

export { useLikes, LikeProvider };
