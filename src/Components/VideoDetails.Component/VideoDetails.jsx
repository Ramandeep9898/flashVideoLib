import React from "react";
import { useParams } from "react-router-dom";
import { useData } from "../../Custom-hooks/useData";

const VideoDetails = () => {
  const { videosData } = useData();
  const { videoID } = useParams();

  const getVideoDetails = (videosData, videoID) => {
    return videosData.find((video) => video._id === videoID);
  };

  const video = getVideoDetails(videosData, videoID);
  return <></>;
};

export default VideoDetails;
