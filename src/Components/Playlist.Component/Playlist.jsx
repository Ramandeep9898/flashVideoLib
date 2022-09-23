import React, { useEffect, useState } from "react";
import "./playlist.css";
import UserPlaylist from "./UserPlaylist";
import CreateNewPlaylist from "./CreateNewPlaylist";

const Playlist = () => {
  const [createPlaylistModel, setCreatePlaylistModel] = useState(false);
  const [playlistItem, setPlaylistItem] = useState({
    title: "",
  });
  const [playlistArr, setPlayListArr] = useState([playlistItem]);
  const createPlaylistModelToggleHandler = () => {
    setCreatePlaylistModel(!createPlaylistModel);
  };
  // useEffect(() => {
  //   setPlayListArr(playlistArr);
  // });
  // console.log(playlistArr);

  return (
    <>
      <div className="empty-comp">
        <h1 className="text-center">Your Playlist is empty.</h1>

        <button
          className="btn solid-pri-btn mgT-16"
          onClick={createPlaylistModelToggleHandler}
        >
          Create Now +
        </button>
      </div>
      {createPlaylistModel ? (
        <CreateNewPlaylist
          createPlaylistModel={createPlaylistModel}
          setCreatePlaylistModel={setCreatePlaylistModel}
          playlistItem={playlistItem.title}
          setPlaylistItem={setPlaylistItem}
        />
      ) : (
        ""
      )}
      {playlistItem.title.length === 0 ? (
        ""
      ) : (
        <UserPlaylist playlistItem={playlistItem.title} />
      )}
    </>
  );
};
export default Playlist;
