import React from "react";
import "./watch-later-card.css"
import { useWatchLater } from "../../contexts/watchLaterContext";

const WatchLaterCard = ({
    videos, 
})=>{
    const{ watchLaterStateDispatch } = useWatchLater();
    return (
        <>
        <div className="card-vertical-WL">
        <img src={videos.thumbnail_url} alt="image" className="avatar sq-avatar card-img-watch-later" />

            <div className="card-typo vert-card-border">
            <div className="card capitalize fW-400 color text-left mgT-8">
                {videos.title}
            </div>
            <div className="card-subtitle capitalize fW-400 color text-left mgT-4">
            {videos.title}
            </div>
                
            
            <button
                className="btn btn-pri-outlined width100 mg-top16"
                onClick={ ()=>
                    watchLaterStateDispatch({
                        type: "REMOVE_FROM_WATCH_LATER",
                        value: videos,
                    })
                }
            >
                remove from cart
            </button>
            
            </div>
        </div>
  </>)
}
export default WatchLaterCard;