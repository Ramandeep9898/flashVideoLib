import "./App.css";
import React from "react";
import { Routes, Route } from "react-router-dom";
import HomeMain from "./Pages/HomeMain";
import VideoListingMain from "./Pages/ProductListingMain";
import WatchLaterMain from "./Pages/WatchLaterMain";
import Header from "./Components/Header.Component/Header";
import PlaylistMain from "./Pages/PlaylistMain";
import VideoDetailsMain from "./Pages/VideoDetailsMain";
import LikeMain from "./Pages/LikeMain";
function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<HomeMain />} />
        <Route path="/VideoListing" element={<VideoListingMain />} />
        <Route path="/VideoListing/:videoID" element={<VideoDetailsMain />} />
        <Route path="/WatchLater" element={<WatchLaterMain />} />
        <Route path="/PlayList" element={<PlaylistMain />} />
        <Route path="/LikedVideos" element={<LikeMain />} />
      </Routes>
    </div>
  );
}

export default App;
