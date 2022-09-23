import React, { useState, useEffect } from "react";
const axios = require("axios").default;

export const useData = () => {
  const [videosData, setVideoData] = useState([]);

  useEffect(() => {
    (async () => {
      const response = await axios.get("/api/videos");
      setVideoData(response.data.videos);
    })();
  }, []);
  return { videosData };
};
