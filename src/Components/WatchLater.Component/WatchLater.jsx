import React from "react";
import VideoCardMain from "../VideoListingPage.Component/VideoCard.Component/VideoCardMain.Component/VideoCardMain";
import EmptyWatchLater from "./EmptyWatchLater";
import WatchLaterCard from "./WatchLaterCard";
import { useWatchLater } from "../../contexts/watchLaterContext";
import { getWatchLaterLocalStorage } from "../../utils/watchLater/getWatchLaterLocalStorage.jsx";
import { addWatchLater } from "../../utils/watchLater/addWatchLater";

const WatchLater = () => {
  const { watchLaterState }= useWatchLater();
  const userWatchLaterData = getWatchLaterLocalStorage(watchLaterState);

  return (
      
        // userWatchLaterData.map((videos)=>(
        //   <VideoCardMain
        //   videos ={videos}
        //   addWatchLater ={addWatchLater}
        //   />
        // ))
        <>
        {userWatchLaterData.length === 0 ? <EmptyWatchLater/> :
        userWatchLaterData.map((videos)=>(
          <WatchLaterCard videos = {videos}/>
        
       ))}
       </>

  );
};
export default WatchLater;
