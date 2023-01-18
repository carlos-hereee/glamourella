import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import { CalendarState } from "./utils/context/CalendarContext";
import { UserState } from "./utils/context/UserContext";
import { AuthState } from "./utils/context/AuthContext";
import { GalleryState } from "./utils/context/GalleryContext";
import { ServicesState } from "./utils/context/ServicesContext";
import { AppState } from "./utils/context/AppContext";
import "./stylesheets/index.scss";
import { AdminState } from "./utils/context/AdminContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <AuthState>
      <UserState>
        <AdminState>
          <AppState>
            <ServicesState>
              <GalleryState>
                <CalendarState>
                  <App />
                </CalendarState>
              </GalleryState>
            </ServicesState>
          </AppState>
        </AdminState>
      </UserState>
    </AuthState>
  </BrowserRouter>
);
