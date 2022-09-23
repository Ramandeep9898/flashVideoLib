import React from "react";
import { useLikes } from "../../contexts/likeContext";
import { AiOutlineLike } from "react-icons/ai";

export const AddToLike = ({ videoDetails }) => {
  const { likes, addToLikes, removeFromLikes } = useLikes();
  const videoInLikes = likes.some((v) => v._id === videoDetails._id)
    ? true
    : false;
  console.log(videoInLikes);
  return (
    <>
      <div
        className="badge-on-avatar navbar-icons"
        onClick={() => {
          if (videoInLikes) {
            console.log("removeFromLikes");
            removeFromLikes(videoDetails);
          } else {
            console.log("addToLikes");

            addToLikes(videoDetails);
          }
        }}
      >
        <div className="size">
          <AiOutlineLike size="lg" />
        </div>
      </div>
    </>
  );
};
