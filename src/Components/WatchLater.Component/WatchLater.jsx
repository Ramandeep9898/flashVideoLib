import React from "react";
import VideoCardMain from "../VideoListingPage.Component/VideoCard.Component/VideoCardMain.Component/VideoCardMain";
import { useWatchLater } from "../../contexts/watchLaterContext";
import { getWatchLaterLocalStorage } from "../../utils/watchLater/getWatchLaterLocalStorage";
import { getWatchLaterItems } from "../../utils/watchLater/getWatchLaterItems";
import { addWatchLater } from "../../utils/watchLater/addWatchLater";
import { videos } from "../../backend/db/videos";

const WatchLater = () => {
  const { watchLaterState }= useWatchLater();
  const userWatchLaterData = getWatchLaterLocalStorage(watchLaterState);
  const watchLaterItems = getWatchLaterItems(userWatchLaterData, "watchLater");
  return (
    <>
      <h1>videocard</h1>

      {watchLaterItems.map((videos)=>(
        <VideoCardMain
        // videoCardData={videos}
        videos ={videos}
        addWatchLater ={addWatchLater}
        watchLater= "watchLater"
        />
      ))}
    </>
  );
};
export default WatchLater;
