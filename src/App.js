import "./App.css";
<<<<<<< HEAD
import react from "react";
import logo from "./logo.png";

=======
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
import User from "./Components/User.Component/User";
import VideoDetailsMain from "./Pages/VideoDetailsMain";
import MockAPI from "./Mockman";
import LikeMain from "./Pages/LikeMain";
>>>>>>> 72af662d18522f1b9952f318590c6e3c4c2656a3
function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<HomeMain />} />
        <Route path="/videos" element={<VideoListingMain />} />
        <Route path="/videos/:videoID" element={<VideoDetailsMain />} />
        <Route element={<PrivateRoute />}>
          <Route path="/user" element={<User />} />
          <Route path="/watchlater" element={<WatchLaterMain />} />
          <Route path="/playlist" element={<PlaylistMain />} />
          <Route path="/like" element={<LikeMain />} />
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
