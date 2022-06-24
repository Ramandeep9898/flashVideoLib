import { useData } from "../../../Custom-hooks/useData";
import React from "react";
import "./videocard.css";

const VideoCard = () => {
  const { videosData } = useData();
  console.log(videosData);
  return (
    <>
      {videosData.map((videos) => {
        return (
          <div key={videos._id} className="card-basic ">
            <img
              src={videos.thumbnail_url}
              alt="image"
              className="avatar sq-avatar card-img video-img"
            />
            <div className="card-typo">
              <div className="card capitalize fW-400 color text-left">
                {videos.title}
              </div>

              <button className="btn solid-pri-btn width100 mgT-20">
                watch later
              </button>
            </div>
          </div>
        );
      })}
    </>
  );
};

export default VideoCard;
