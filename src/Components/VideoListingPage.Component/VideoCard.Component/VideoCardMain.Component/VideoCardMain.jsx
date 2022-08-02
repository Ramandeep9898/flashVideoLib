import React from "react";
import { Link } from "react-router-dom";
import { useWatchLater } from "../../../../contexts/watchLaterContext";
import { AiOutlineClockCircle } from "react-icons/ai";
const VideoCardMain = ({ videos, addWatchLater }) => {
  const { watchLaterStateDispatch } = useWatchLater();

  return (
    <>
      <div key={videos._id} className="card-basic ">
        <img
          src={videos.thumbnail_url}
          alt="image"
          className=" sq-avatar card-img video-img"
        />

        <div className="card-typo">
          <div className="h5 card capitalize fW-500 color text-left">
            {videos.title}
          </div>

          <div className="card-sub card text-left mgT-8">
            by {videos.channel_name}
          </div>

          <div className="btn-div">
            <div className="card-sub text-left ">
              {videos.subscribers} subscribers &#8226; {videos.veiws} veiws
            </div>
          </div>
          <div className="btn-div">
            <button
              onClick={() => {
                addWatchLater(
                  videos,
                  "ADD_TO_WATCH_LATER",
                  watchLaterStateDispatch
                );
              }}
              className="btn btn-pri-outlined  "
            >
              watch later
            </button>
            <Link to={`/videos/${videos._id}`}>
              <button className="btn solid-pri-btn ">watch now</button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default VideoCardMain;
