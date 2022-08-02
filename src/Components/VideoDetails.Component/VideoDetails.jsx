import React, { useEffect, useState } from "react";
import "./video-details.css";
import { useLocation, useParams } from "react-router-dom";
import VideoSec from "./VideoSec";
import { useData } from "../../Custom-hooks/useData";
import VideoCardMain from "../VideoListingPage.Component/VideoCard.Component/VideoCardMain.Component/VideoCardMain";
import { addWatchLater } from "../../utils/watchLater/addWatchLater";

const axios = require("axios").default;

const VideoDetails = () => {
  const { videoID } = useParams();
  const [videoDetails, setVideoDetails] = useState();
  const { videosData } = useData();
  console.log("yo", videosData);

  useEffect(() => {
    (async () => {
      try {
        const response = await axios.get(`/api/video/${videoID}`);
        if (response.status === 200) {
          setVideoDetails(response.data.video);
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
      <div className="video-detail-container">
        <VideoSec {...videoDetails} videoDetails={videoDetails} />
        <div className="aside">
          {videosData.map((videos) => (
            <VideoCardMain videos={videos} addWatchLater={addWatchLater} />
          ))}
        </div>
      </div>
    </>
  );
};

export default VideoDetails;
