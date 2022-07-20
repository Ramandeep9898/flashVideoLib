import React, { useEffect, useState } from "react";
import { createContext, useContext, useReducer } from "react";
import axios from "axios";
// import { likeReducer } from "../Reducers/likeReducer";
const likeContext = createContext();

const LikeProvider = ({ children }) => {
  const storageToken = localStorage.getItem("flashPlay");
  const [likes, setLike] = useState([]);

  useEffect(() => {
    (async function() {
      if (storageToken) {
        try {
          const likeResponse = await axios.get("/api/likes");
          console.log("likeResponse", likeResponse);
          if (likeResponse.status === 200) {
            setLike(likeResponse.data.likes);
          }
        } catch (error) {
          console.log(error);
        }
      }
    })();
  }, [storageToken]);

  // add to likes

  const addToLikes = async (item) => {
    try {
      const response = await axios.post("/api/likes", { video: item });
      if (response.status === 201) {
        setLike(response.data.likes);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const removeFromLikes = async (items) => {
    try {
      const response = await axios.delete(`/api/likes/${items._id}`);
      if (response.status === 200) {
        setLike(response.data.likes);
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <likeContext.Provider value={{ likes, addToLikes, removeFromLikes }}>
      {children}
    </likeContext.Provider>
  );
};
const useLike = () => useContext(likeContext);

export { useLike, LikeProvider };
