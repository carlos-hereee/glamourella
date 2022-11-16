import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import "./stylesheets/index.scss";
import App from "./App";
import { CalendarState } from "./utils/context/CalendarContext";
import { UserState } from "./utils/context/UserContext";
import { AuthState } from "./utils/context/AuthContext";
import { GalleryState } from "./utils/context/GalleryContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <AuthState>
      <UserState>
        <GalleryState>
          <CalendarState>
            <App />
          </CalendarState>
        </GalleryState>
      </UserState>
    </AuthState>
  </BrowserRouter>
);
