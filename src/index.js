import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import "./stylesheets/index.scss";
import App from "./App";
import { CalendarState } from "./utils/context/CalendarContext";
import { UserState } from "./utils/context/UserContext";
import { AuthState } from "./utils/context/AuthContext";
import { GalleryState } from "./utils/context/GalleryContext";
import { ServicesState } from "./utils/context/ServicesContext";
import { GlamourellaState } from "./utils/context/GlamourellaContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <AuthState>
      <UserState>
        <GlamourellaState>
          <ServicesState>
            <GalleryState>
              <CalendarState>
                <App />
              </CalendarState>
            </GalleryState>
          </ServicesState>
        </GlamourellaState>
      </UserState>
    </AuthState>
  </BrowserRouter>
);
