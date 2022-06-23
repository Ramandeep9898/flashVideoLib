import "./App.css";
import react from "react";
import React, { Component } from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./Pages/HomeMain";
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;
