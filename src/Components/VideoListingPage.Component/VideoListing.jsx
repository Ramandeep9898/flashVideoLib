import React from "react";
import "./video-listing.css";
import VideoCard from "./VideoCard.Component/VideoCard";
const VideoListing = () => {
  return (
    <>
      <div className="video-listing">
        <VideoCard />
      </div>
    </>
  );
};

export default VideoListing;
