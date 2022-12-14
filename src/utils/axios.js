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
