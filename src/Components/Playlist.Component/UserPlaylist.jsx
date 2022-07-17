import React, { useState } from "react";
import { AiOutlineDelete } from "react-icons/ai";

const UserPlaylist = ({ playlistItem }) => {
  return (
    <>
      <div className="create-new-PL-card mgT-16 index0">
        <p className="h3 color capitalize fW-700 fix text-left gap">
          {playlistItem}
          <div>
            <AiOutlineDelete />
          </div>
        </p>
        <p className="h7 color capitalize fW-700 fix text-left gap">0 videos</p>
      </div>
    </>
  );
};

export default UserPlaylist;
