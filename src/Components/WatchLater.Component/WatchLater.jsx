import React from "react";
import VideoCardMain from "../VideoListingPage.Component/VideoCard.Component/VideoCardMain.Component/VideoCardMain";
import { useWatchLater } from "../../contexts/watchLaterContext";
import { getWatchLaterLocalStorage } from "../../utils/watchLater/getWatchLaterLocalStorage.jsx";
import { getWatchLaterItems } from "../../utils/watchLater/getWatchLaterItems.jsx";
import { addWatchLater } from "../../utils/watchLater/addWatchLater";

const WatchLater = () => {
  const { watchLaterState }= useWatchLater();
  const userWatchLaterData = getWatchLaterLocalStorage(watchLaterState);
  // const watchLaterItems = getWatchLaterItems(userWatchLaterData, "watchLater");
  // console.log("watchLaterStatebitch",watchLaterItems);

  
  return (
    <>
      <h1>videocard</h1>
{console.log(<VideoCardMain/>)}
      {userWatchLaterData.map((videos)=>(
        <VideoCardMain
        videos ={videos}
        addWatchLater ={addWatchLater}
        />
      ))}
    </>
  );
};
export default WatchLater;
