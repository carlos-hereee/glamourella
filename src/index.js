import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import "./stylesheets/index.scss";
import App from "./App";
import { CalendarState } from "./utils/CalendarContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <CalendarState>
      <App />
    </CalendarState>
  </BrowserRouter>
);
