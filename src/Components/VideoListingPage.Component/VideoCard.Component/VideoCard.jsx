import { useData } from "../../../Custom-hooks/useData";
import React from "react";
import "./videocard.css";
import { useCategory } from "../../../contexts/categoryContext";
import { getFliteredVideos } from "../../../fliters/getFliteredVideos";
import VideoCardMain from "./VideoCardMain.Component/VideoCardMain";
import { addWatchLater } from "../../../utils/watchLater/addWatchLater";

const VideoCard = () => {
  const { state } = useCategory();
  const { videosData } = useData();

  const categoryVideos = getFliteredVideos(
    videosData,
    state.categories.bestseller,
    state.categories.fiction,
    state.categories.nonfiction,
    state.categories.selfhelp,
    state.categories.recommended
  );
  return (
    <>
      {categoryVideos.map((videos) => {
        return <VideoCardMain videos={videos} 
        key ={videos._id}
        VideoCardData={videos}
        addWatchLater= {addWatchLater}
        />;
      })}
    </>
  );
};

export default VideoCard;
//           key={product._id}
// productCardData={product}
// product={product}
// addCartWishList={addCartWishList}