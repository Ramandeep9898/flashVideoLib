import React, { useId, useState } from "react";
import { MdOutlineClose } from "react-icons/md";
import UserPlaylist from "./UserPlaylist";
import Playlist from "./Playlist";
import { Link } from "react-router-dom";

const CreateNewPlaylist = ({
  createPlaylistModel,
  setCreatePlaylistModel,
  playlistItem,
  setPlaylistItem,
}) => {
  return (
    <>
      <div className="create-new-PL-container ">
        <div className="create-new-PL-card ">
          <p className="h3 color capitalize fW-700 fix text-left ">
            create new playlist
            <div
              onClick={() => {
                setCreatePlaylistModel(!createPlaylistModel);
              }}
            >
              <MdOutlineClose />
            </div>
          </p>
          <div className="input-box mgT-16">
            <input
              type="text"
              className="input"
              placeholder="My Playlist"
              valide
              value={playlistItem.title}
              onChange={(e) => {
                console.log(e.target.value);
                setPlaylistItem((prev) => {
                  return { ...prev, title: e.target.value };
                });
              }}
            />
            <button
              className="btn solid-pri-btn mgT-8 "
              // disabled={playlistItem.title === "" ? true : false}
              onClick={() => {
                setCreatePlaylistModel(!createPlaylistModel);
                // setPlaylistItem((prev) => {
                //   return { ...prev, title: "" };
                // });
              }}
            >
              {" "}
              Create +{" "}
            </button>
          </div>
        </div>
      </div>
    </>
  );
};
export default CreateNewPlaylist;
