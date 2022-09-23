import React from "react";
import { Link } from "react-router-dom";

const EmptyWatchLater = ()=>{
    return(
        <>
        <div className="empty-comp">
        <h1 className="text-center">Your Watch Later is empty.</h1>
        <Link to="/VideoListing">
                <button className="btn solid-pri-btn mgT-16">watch now</button>
        </Link>
        </div>

        </>
    )
}
export default EmptyWatchLater;
