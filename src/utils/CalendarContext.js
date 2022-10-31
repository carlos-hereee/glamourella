import React, { createContext, useEffect, useReducer } from "react";
import { axiosWithOutAuth } from "./axios";
import { reducer } from "./reducer";
import { gapi } from "gapi-script";
import moment from "moment";
import { getEvents } from "./calendar";

export const CalendarContext = createContext();
export const CalendarState = ({ children }) => {
  const initialState = {
    isLoading: false,
    calendar: [],
    log: [],
    events: [],
    selectedDay: [],
    appointment: {},
  };
  const [state, dispatch] = useReducer(reducer, initialState);
  const calendarId = process.env.REACT_APP_CALENDAR_ID;
  const apiKey = process.env.REACT_APP_CALENDAR_API_KEY;
  const accessToken = process.env.REACT_APP_CALENDAR_ACCESS_TOKEN;

  useEffect(() => {
    getEvents(calendarId, apiKey, updateEvents, updateCalendar);
  }, []);
  useEffect(() => {
    setDay(eventMatch(today, state.events));
  }, [state.events]);

  const formatDate = (t) => moment(t).format("dddd MMM DD YYYY");
  const formatTime = (t) => moment(t).format("hh:mm a");
  const today = formatDate(new Date());

  const updateEvents = async (events) => {
    dispatch({ type: "IS_LOADING", payload: true });
    dispatch({ type: "UPDATE_EVENTS", payload: events });
  };
  const updateCalendar = async (calendar) => {
    dispatch({ type: "IS_LOADING", payload: true });
    dispatch({ type: "UPDATE_CALENDAR", payload: calendar });
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
  const setDay = async (event) => {
    dispatch({ type: "IS_LOADING", payload: true });
    dispatch({ type: "UPDATE_CALENDAR_EVENT", payload: event });
  };
  const eventMatch = (date, events) => {
    return events.filter((e) => {
      return formatDate(e.start.dateTime) === date;
    });
  };
  const getCalendar = () => {
    getEvents(calendarId, apiKey);
  };
  const bookNow = async (values, appointment) => {
    try {
      console.log("appointment", appointment, values);
      // addEvent(calendarId, appointment);
      dispatch({ type: "IS_LOADING", payload: true });
      dispatch({ type: "BOOK_NOW", payload: appointment });
    } catch (e) {
      const { data } = e.response;
      dispatch({ type: "ADD_MESSAGE_TO_LOG", payload: data.message });
    }
  };
  return (
    <CalendarContext.Provider
      value={{
        isLoading: state.isLoading,
        calendar: state.calendar,
        selectedDay: state.selectedDay,
        appointment: state.appointment,
        events: state.events,
        log: state.log,
        contactUs,
        getCalendarDay,
        setDay,
        formatDate,
        formatTime,
        bookNow,
        eventMatch,
        getCalendar,
        getEvents,
      }}>
      {children}
    </CalendarContext.Provider>
  );
};
