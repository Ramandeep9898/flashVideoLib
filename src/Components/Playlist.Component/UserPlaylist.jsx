import React, { useState } from "react";
import { AiOutlineDelete } from "react-icons/ai";

const UserPlaylist = ({ name, setName }) => {
  //   const [hideUserPlaylist, setHideUserPlaylist] = useState(false);
  //   const deletePlaylistHandler = () => {
  //     setHideUserPlaylist(!hideUserPlaylist);
  //   };
  return (
    <>
      <div
        //   hidden={hideUserPlaylist}
        className="create-new-PL-card mgT-16"
      >
        <p className="h3 color capitalize fW-700 fix text-left gap">
          {name}
          <div
          //   onClick={deletePlaylistHandler}
          >
            <AiOutlineDelete />
          </div>
        </p>
        <p className="h7 color capitalize fW-700 fix text-left gap">0 videos</p>
      </div>
    </>
  );
};

export default UserPlaylist;
