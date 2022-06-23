import "./App.css";
import React from "react";
import { Routes, Route } from "react-router-dom";
import HomeMain from "./Pages/HomeMain";
import VideoListingMain from "./Pages/ProductListingMain";
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<HomeMain />} />
        <Route path="/VideoListing" element={<VideoListingMain />} />
      </Routes>
    </div>
  );
}

export default App;
