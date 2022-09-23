import React from "react";
import Empty from "./Empty";
import WatchLaterCard from "./WatchLaterCard";
import { useWatchLater } from "../../contexts/watchLaterContext";
import { getWatchLaterLocalStorage } from "../../utils/watchLater/getWatchLaterLocalStorage.jsx";

const WatchLater = () => {
  const { watchLaterState } = useWatchLater();
  const userWatchLaterData = getWatchLaterLocalStorage(watchLaterState);

  return (
    <>
      {userWatchLaterData.length === 0 ? (
        <Empty name="Watch Later" link="VideoListing" button="Watch Now" />
      ) : (
        userWatchLaterData.map((videos) => <WatchLaterCard videos={videos} />)
      )}
    </>
  );
};
export default WatchLater;
