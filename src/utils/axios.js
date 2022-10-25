import axios from "axios";

export const axiosWithAuth = axios.create({
  baseURL: process.env.REACT_APP_DB_URL,
  withCredentials: true,
  headers: {
    "Access-Control-Allow-Origin": process.env.REACT_APP_CLIENT_BASE_URL,
    "Content-Type": "application/json; charset=utf-8",
    Accept: "application/json",
  },
});
export const axiosWithOutAuth = axios.create({
  baseURL: process.env.REACT_APP_DB_URL,
  withCredentials: true,
  headers: {
    "Access-Control-Allow-Origin": process.env.REACT_APP_CLIENT_BASE_URL,
    "Content-Type": "application/json;charset=UTF-8",
    Accept: "application/json",
  },
});
