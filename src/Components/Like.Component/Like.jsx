import React from "react";
import Empty from "../WatchLater.Component/Empty";
import { useLikes } from "../../contexts/likeContext";
import VideoCardMain from "../VideoListingPage.Component/VideoCard.Component/VideoCardMain.Component/VideoCardMain";

const Like = () => {
  const { likes } = useLikes();
  console.log("likes", likes);
  return (
    <>
      <Empty name={"liked video list "} button />
      {likes.map((videos) => (
        <VideoCardMain videos={videos} />
      ))}
    </>
  );
};
export default Like;
