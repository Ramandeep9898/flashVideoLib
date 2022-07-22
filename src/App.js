import "./App.css";
import React from "react";
import { Routes, Route } from "react-router-dom";
import HomeMain from "./Pages/HomeMain";
import VideoListingMain from "./Pages/ProductListingMain";
import WatchLaterMain from "./Pages/WatchLaterMain";
import Header from "./Components/Header.Component/Header";
import LoginMain from "./Pages/LoginMain";
import SignUpMain from "./Pages/SignUpMain";
import PlaylistMain from "./Pages/PlaylistMain";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<HomeMain />} />
        <Route path="/VideoListing" element={<VideoListingMain />} />
        <Route path="/WatchLater" element={<WatchLaterMain />} />
        <Route path="/PlayList" element={<PlaylistMain />} />
        <Route path="/login" element={<LoginMain />} />
        <Route path="/signup" element={<SignUpMain />} />
      </Routes>
    </div>
  );
}

export default App;
