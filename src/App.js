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
import PrivateRoute from "./Components/Private-Route/Private.jsx";
import { RestrictedRoute } from "./Components/RestrictedRoute.Component/RestrictedRoute.jsx";
import MockAPI from "./Mockman";
function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<HomeMain />} />
        <Route path="/VideoListing" element={<VideoListingMain />} />
        <Route path="/login" element={<LoginMain />} />
        <Route path="/signup" element={<SignUpMain />} />
        <Route element={<PrivateRoute />}>
          <Route path="/WatchLater" element={<WatchLaterMain />} />
          <Route path="/PlayList" element={<PlaylistMain />} />
        </Route>
        <Route element={<RestrictedRoute />}>
          {/* <Route path="/auth" element={<Auth />} /> */}
        </Route>
        <Route path="/mockman" element={<MockAPI />} />
      </Routes>
    </div>
  );
}

export default App;
