import React from "react";
import { AddToLike } from "../../utils/watchLater/AddToLike";
import {
  AiOutlineLike,
  AiOutlineShareAlt,
  AiOutlineClockCircle,
} from "react-icons/ai";
import { MdPlaylistAdd } from "react-icons/md";

const VideoSec = ({
  _id,
  title,
  subtitle,
  thumbnail_url,
  category,
  channel_name,
  channel_logo,
  subscribers,
  discription,
  share_link,
  date,
  veiws,
  videoDetails,
}) => {
  // console.log(videoDetails);
  const videoEmbed = "https://www.youtube.com/embed/";
  const videoSrc = `${videoEmbed}${_id}?autoplay=1`;
  return (
    <>
      <div className="video-container">
        <iframe
          src={videoSrc}
          frameborder="0"
          allowfullscreen
          className="video"
        ></iframe>
        <div className="h4 capitalize fW-500 color text-left mgT-16">
          {title}
        </div>
        <div className="h7 capitalize fW-500 color text-left mgT-8">
          {subtitle}
        </div>
        <div className="video-features h5 capitalize fW-500 color text-left mgT-8 disp-flex ">
          <div className="features-startsec disp-flex ">
            <div className="viewcount">{veiws} views &#8226; </div>
            <div className="date"> {date} </div>
          </div>
          <div className="feature-endsec disp-flex ">
            <AddToLike videoDetails={videoDetails} />
            <div className="btn-icon-gap disp-flex">
              watch-later
              <AiOutlineClockCircle />
            </div>
            <div className="btn-icon-gap disp-flex">
              save
              <MdPlaylistAdd />
            </div>
            <div className="btn-icon-gap disp-flex">
              share
              <AiOutlineShareAlt />
            </div>
          </div>
        </div>
        <div className="line-hori mgT-16"></div>

        <div className="video-description mgT-16 h6 capitalize fW-500 color text-left mgT-8 ">
          <div className="video-channel-info disp-flex ">
            <div className="channel-logo">
              <img src={channel_logo} alt="" className="avatar avatar-md" />
            </div>
            <div className="channel-name-sub">
              <div className="channel-name"> {channel_name}</div>
              <div className="sub-count">{subscribers} subscribers</div>
            </div>
          </div>
          <p className="description mgT-16">{discription}</p>
        </div>
      </div>
    </>
  );
};
export default VideoSec;
