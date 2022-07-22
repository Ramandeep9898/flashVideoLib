import { createRoot } from "react-dom/client";
import React from "react";
import "./index.css";
import App from "./App";
import { makeServer } from "./server";
import { StrictMode } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { CategoryProvider } from "./contexts/categoryContext";
import { WatchLaterProvider } from "./contexts/watchLaterContext";
import { AuthProvider } from "./Custom-hooks/useAuth";
// Call make Server
const root = createRoot(document.getElementById("root"));
makeServer();

root.render(
  <StrictMode>
    <Router>
      <AuthProvider>
        <WatchLaterProvider>
          <CategoryProvider>
            <App />
          </CategoryProvider>
        </WatchLaterProvider>
      </AuthProvider>
    </Router>
  </StrictMode>
);
