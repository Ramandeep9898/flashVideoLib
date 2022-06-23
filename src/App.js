import "./App.css";
import React from "react";
import { Routes, Route } from "react-router-dom";
import HomeMain from "./Pages/HomeMain";
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<HomeMain />} />
      </Routes>
    </div>
  );
}

export default App;
