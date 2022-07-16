import React, { useState } from "react";
import { MdOutlineClose } from "react-icons/md";
import Playlist from "./Playlist";
import { Link } from "react-router-dom";

const CreateNewPlaylist = () => {
  const [closeCreatePlaylistBtn, setCloseCreatePlaylistBtn] = useState(false);

  return (
    <>
      <div hidden={closeCreatePlaylistBtn} className="create-new-PL-container">
        <div className="create-new-PL-card ">
          <p className="h3 color capitalize fW-700 fix text-left ">
            create new playlist
            <div
              onClick={() => {
                setCloseCreatePlaylistBtn(!closeCreatePlaylistBtn);
              }}
            >
              <MdOutlineClose />
            </div>
          </p>
          <div className="input-box mgT-16">
            <input
              id="text"
              type="text"
              className="input"
              placeholder="My Playlist"
              valide
            />
            <button className="btn solid-pri-btn mgT-8 "> Create + </button>
          </div>
        </div>
      </div>
    </>
  );
};
export default CreateNewPlaylist;
