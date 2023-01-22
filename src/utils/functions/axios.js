import axios from "axios";

export const axiosWithAuth = axios.create({
  baseURL: process.env.REACT_APP_DB_URL,
  withCredentials: true,
  headers: {
    "Access-Control-Allow-Origin": process.env.REACT_APP_CLIENT_URL,
    "Content-Type": "application/json; charset=utf-8",
    Accept: "application/json",
  },
});
export const axiosOAuth2 = axios.create({
  baseURL: "https://accounts.google.com/o/oauth2/v2/auth",
  headers: {
    "Access-Control-Allow-Origin": process.env.REACT_APP_CLIENT_URL,
    Accept: "application/json",
  },
});
export const axiosCalendar = axios.create({
  baseURL: process.env.REACT_APP_DB_URL,
  withCredentials: true,
  headers: {
    "Access-Control-Allow-Origin": process.env.REACT_APP_CLIENT_URL,
    Accept: "application/json",
    CalendarId: process.env.REACT_APP_CALENDAR_ID,
  },
});
export const getCookie = (name) => {
  let cookieValue;
  if (document.cookie && document.cookie !== "") {
    let cookies = document.cookie.split(";");
    for (let i = 0; i < cookies.length; i++) {
      let cookie = cookies[i].trim();
      if (cookie.substring(0, name.length + 1) === name + "=") {
        cookieValue = decodeURIComponent(cookie.substring(name.length + 1));
        break;
      }
    }
  }
  return cookieValue;
};
