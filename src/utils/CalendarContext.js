import React, { createContext, useEffect, useReducer } from "react";
import { axiosWithOutAuth, axiosWithAuth } from "./axios";
import { reducer } from "./reducer";
import moment from "moment";
import { joinEvent } from "./calendar";

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
  const accessToken = process.env.REACT_APP_CALENDAR_ACCESS_TOKEN;

  useEffect(() => {
    // refresh accesstoken
    getAccessToken();
  }, []);

  const formatDate = (t) => moment(t).format("dddd MMM DD YYYY");
  const formatTime = (t) => moment(t).format("hh:mm a");
  const today = formatDate(new Date());
  const getAccessToken = async () => {
    const { data } = await axiosWithAuth.get("/calendar/events");
    console.log("data", data);
    updateCalendar(data.events);
    updateEvents(data.events.items);
    updateDay(isDateEqual(today, data.events.items));
  };
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
  const updateDay = async (event) => {
    dispatch({ type: "IS_LOADING", payload: true });
    dispatch({ type: "UPDATE_CALENDAR_EVENT", payload: event });
  };
  const isDateEqual = (date, events) => {
    return events.filter((e) => {
      return formatDate(e.start.dateTime) === date;
    });
  };
  const bookNow = async (values, appointment) => {
    dispatch({ type: "IS_LOADING", payload: true });
    try {
      const data = {
        ...appointment,
        summary: `Appointment set for ${values.name}, at ${
          (formatTime(appointment.start.dateTime),
          " - ",
          formatTime(appointment.end.dateTime))
        }.`,
        attendees: [values.email],
      };
      joinEvent(calendarId, accessToken, data);
      // dispatch({ type: "BOOK_NOW", payload: appointment });
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
        setDay: updateDay,
        formatDate,
        formatTime,
        bookNow,
        eventMatch: isDateEqual,
      }}>
      {children}
    </CalendarContext.Provider>
  );
};
