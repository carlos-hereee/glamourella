import React, { createContext, useEffect, useReducer } from "react";
import { axiosWithOutAuth } from "./axios";
import { reducer } from "./reducer";
import { gapi } from "gapi-script";

export const CalendarContext = createContext();
export const CalendarState = ({ children }) => {
  const initialState = { isLoading: false, calendar: [], log: [], events: [] };
  const [state, dispatch] = useReducer(reducer, initialState);
  const calendarId = process.env.REACT_APP_CALENDAR_ID;
  const apiKey = process.env.REACT_APP_CALENDAR_API_AKEY;
  const accessToken = process.env.REACT_APP_CALENDAR_ACCESS_TOKEN;

  useEffect(() => {
    // getCalendar();
    const events = getEvents(calendarId, apiKey);
    updateEvents(events);
  }, []);

  const getEvents = (calendarID, apiKey) => {
    const initiate = () => {
      gapi.client
        .init({ apiKey: apiKey })
        .then(function () {
          return gapi.client.request({
            path: `https://www.googleapis.com/calendar/v3/calendars/${calendarID}/events`,
          });
        })
        .then(
          (res) => {
            let events = res.result.items;
            return events;
          },
          (err) => [false, err]
        );
    };
    gapi.load("client", initiate);
  };
  const updateEvents = async (events) => {
    dispatch({ type: "IS_LOADING", payload: true });
    dispatch({ type: "UPDATE_EVENTS", payload: events });
  };
  const contactUs = async (values) => {
    dispatch({ type: "IS_LOADING", payload: true });
    try {
      const data = await axiosWithOutAuth.post("/contact-me", values);
      dispatch({ type: "ADD_MESSAGE_TO_LOG", payload: data });
    } catch (e) {
      dispatch({ type: "ADD_MESSAGE_TO_LOG", payload: true });
    }
  };
  const getCalendarDay = async (day) => {
    dispatch({ type: "IS_LOADING", payload: true });
    try {
      const data = await axiosWithOutAuth.get(`/calendar/${day}`);
      dispatch({ type: "ADD_MESSAGE_TO_LOG", payload: data });
    } catch (e) {
      dispatch({ type: "ADD_MESSAGE_TO_LOG", payload: true });
    }
  };
  const getCalendar = async () => {
    dispatch({ type: "IS_LOADING", payload: true });
    try {
      const data = await axiosWithOutAuth.get("/calendar/");
      dispatch({ type: "ADD_MESSAGE_TO_LOG", payload: data });
    } catch (e) {
      dispatch({ type: "ADD_MESSAGE_TO_LOG", payload: true });
    }
  };
  return (
    <CalendarContext.Provider
      value={{
        isLoading: state.isLoading,
        calendar: state.calendar,
        events: state.events,
        log: state.log,
        contactUs,
        getCalendarDay,
      }}>
      {children}
    </CalendarContext.Provider>
  );
};
