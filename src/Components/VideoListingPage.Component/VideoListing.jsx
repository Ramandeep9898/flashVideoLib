import React from "react";
import "./video-listing.css";
import VideoCard from "./VideoCard.Component/VideoCard";
import CategoryBar from "./CategoryBar.Component/CategoryBar";
const VideoListing = () => {
  return (
    <>
      <CategoryBar />
      <div className="video-listing">
        <VideoCard />
      </div>
    </>
  );
};

export default VideoListing;
