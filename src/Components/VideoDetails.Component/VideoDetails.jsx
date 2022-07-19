import React, { useEffect, useState } from "react";
import "./video-details.css";
import { useLocation, useParams } from "react-router-dom";
import VideoSec from "./VideoSec";
const axios = require("axios").default;

const VideoDetails = () => {
  const { videoID } = useParams();
  const [videoDetails, setVideoDetails] = useState();

  useEffect(() => {
    (async () => {
      try {
        const response = await axios.get(`/api/video/${videoID}`);
        if (response.status === 200) {
          setVideoDetails(response.data.video);
          console.log("VideoDetails", response.data.video);
        }
      } catch (error) {
        console.error("error", error);
      }
    })();
  }, [videoID]);

  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <>
      <VideoSec {...videoDetails} />
    </>
  );
};

export default VideoDetails;
