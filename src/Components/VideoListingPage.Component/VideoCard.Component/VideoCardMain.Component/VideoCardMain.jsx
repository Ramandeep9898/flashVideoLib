import React from "react";
import { Link } from "react-router-dom";
import { useWatchLater } from "../../../../contexts/watchLaterContext";
const VideoCardMain = ({ videos, addWatchLater }) => {
  const { watchLaterStateDispatch } = useWatchLater();

  return (
    <>
      <div key={videos._id} className="card-basic ">
        <img
          src={videos.thumbnail_url}
          alt="image"
          className="avatar sq-avatar card-img video-img"
        />

        <div className="card-typo">
          <Link to={`/videos/${videos._id}`}>
            <div className="card capitalize fW-400 color text-left">
              {videos.title}
            </div>
          </Link>
          <button
            onClick={() => {
              // console.log("videos",videos);
              addWatchLater(
                videos,
                "ADD_TO_WATCH_LATER",
                watchLaterStateDispatch
              );
            }}
            className="btn solid-pri-btn width100 mgT-20"
          >
            watch later
          </button>
        </div>
      </div>
    </>
  );
};

export default VideoCardMain;
