import React from "react";
import "./videocard.css";
const VideoCard = () => {
  return (
    <>
      <div className="card-basic ">
        <img
          src="https://i.ytimg.com/vi/tfchHFd3CvU/hqdefault.jpg?sqp=-oaymwEXCOADEI4CSFryq4qpAwkIARUAAIhCGAE=&rs=AOn4CLBs5jth4wxfziM5xcH8RIZFxfBP0A"
          alt="image"
          className="avatar sq-avatar card-img video-img"
        />
        <div className="card-typo">
          <div className="card capitalize fW-400 color text-left">
            Ma Belle - AP Dhillon (ft. Amari)
          </div>

          <button className="btn btn-pri-outlined width100 mgT-20">
            watch later
          </button>
        </div>
      </div>
    </>
  );
};

export default VideoCard;
