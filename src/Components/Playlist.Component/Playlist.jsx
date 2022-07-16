import React, { useState } from "react";
import Empty from "../WatchLater.Component/Empty";
import "./playlist.css";
// import { MdOutlineClose } from "react-icons/md";
import CreateNewPlaylist from "./CreateNewPlaylist";
// MdOutlineClose

const Playlist = () => {
  const [createNewPlaylist, setCreateNewPlaylist] = useState(false);
  const createNewPlaylisthandler = () => {
    setCreateNewPlaylist(true);
  };
  return (
    <>
      {/* <Empty name="Playlist" link="PlayList" button="Create Now +" /> */}
      <div className="empty-comp">
        <h1 className="text-center">Your Playlist is empty.</h1>

        <button
          className="btn solid-pri-btn mgT-16"
          onClick={createNewPlaylisthandler}
        >
          Create Now +
        </button>
      </div>
      {createNewPlaylist ? <CreateNewPlaylist /> : null}
    </>
  );
};
export default Playlist;
