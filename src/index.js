import { createRoot } from "react-dom/client";
import React from "react";
import "./index.css";
import App from "./App";
import { makeServer } from "./server";
import { StrictMode } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { CategoryProvider } from "./contexts/categoryContext";
import { WatchLaterProvider } from "./contexts/watchLaterContext";
import { LikeProvider } from "./contexts/LikeContext";
// Call make Server

const root = createRoot(document.getElementById("root"));
makeServer();

root.render(
  <StrictMode>
    <Router>
      <LikeProvider>
        <WatchLaterProvider>
          <CategoryProvider>
            <App />
          </CategoryProvider>
        </WatchLaterProvider>
      </LikeProvider>
    </Router>
  </StrictMode>
);
