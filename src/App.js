import "./App.css";
import React from "react";
import { Routes, Route } from "react-router-dom";
import HomeMain from "./Pages/HomeMain";
import VideoListingMain from "./Pages/ProductListingMain";
import WatchLaterMain from "./Pages/WatchLaterMain";
import Header from "./Components/Header.Component/Header";
import PlaylistMain from "./Pages/PlaylistMain";
import PrivateRoute from "./Components/Private-Route/Private.jsx";
import { RestrictedRoute } from "./Components/RestrictedRoute.Component/RestrictedRoute.jsx";
import { Auth } from "./Components/Auth.Component/Auth";
import MockAPI from "./Mockman";
function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<HomeMain />} />
        <Route path="/videos" element={<VideoListingMain />} />
        <Route element={<PrivateRoute />}>
          <Route path="/watchlater" element={<WatchLaterMain />} />
          <Route path="/playlists" element={<PlaylistMain />} />
        </Route>
        <Route element={<RestrictedRoute />}>
          <Route path="/auth" element={<Auth />} />
        </Route>
        <Route path="/mockman" element={<MockAPI />} />
      </Routes>
    </div>
  );
}

export default App;
