/* eslint-disable react-hooks/exhaustive-deps */
import { createContext, useEffect, useReducer } from "react";
import { axiosWithAuth, axiosCalendar } from "../functions/axios";
import { reducer } from "../reducers/CalendarReducer";
import { glamourella, isDev } from "../../config";
import { dateEqual, today } from "../functions/moment";

export const CalendarContext = createContext();
export const CalendarState = ({ children }) => {
  const initialState = {
    isLoading: false,
    calendar: [],
    calendarLog: [],
    events: glamourella.events,
    selectedDay: {},
    meeting: {},
    book: {},
  };
  const [state, dispatch] = useReducer(reducer, initialState);

  const getCalendar = async () => {
    try {
      const { data } = await axiosCalendar.get("/calendar/events");
      // console.log("get calendar", data);
      // updateCalendar(data.events);
      updateEvents(data);
      setDay(dateEqual(today, data));
    } catch (error) {
      const { status, data } = error.response;
      isDev && console.log("status", status, data);
      dispatch({ type: "ADD_MESSAGE_TO_LOG", payload: data });
    }
  };

  const updateEvents = async (events) => {
    dispatch({ type: "IS_LOADING", payload: true });
    dispatch({ type: "UPDATE_EVENTS", payload: events });
  };
  const resetDay = async (events) => {
    dispatch({ type: "IS_LOADING", payload: true });
    dispatch({ type: "RESET_EVENTS", payload: events });
  };
  // const updateCalendar = async (calendar) => {
  //   dispatch({ type: "IS_LOADING", payload: true });
  //   dispatch({ type: "UPDATE_CALENDAR", payload: calendar });
  // };
  const contactUs = async (values) => {
    dispatch({ type: "IS_LOADING", payload: true });
    try {
      const data = await axiosWithAuth.post("/contact-me", values);
      dispatch({ type: "ADD_MESSAGE_TO_LOG", payload: data });
    } catch (e) {
      dispatch({ type: "ADD_MESSAGE_TO_LOG", payload: true });
    }
  };
  const getCalendarDay = async (day) => {
    dispatch({ type: "IS_LOADING", payload: true });
    try {
      const data = await axiosWithAuth.get(`/calendar/${day}`);
      dispatch({ type: "ADD_MESSAGE_TO_LOG", payload: data });
    } catch (e) {
      dispatch({ type: "ADD_MESSAGE_TO_LOG", payload: true });
    }
  };
  const setDay = async (event) => {
    dispatch({ type: "IS_LOADING", payload: true });
    dispatch({ type: "UPDATE_CALENDAR_EVENT", payload: event });
  };
  const setMeeting = async (event) => {
    dispatch({ type: "IS_LOADING", payload: true });
    dispatch({ type: "UPDATE_APPOINTMENT", payload: event });
  };

  const bookNow = async (values, event) => {
    dispatch({ type: "IS_LOADING", payload: true });
    try {
      const { data } = await axiosWithAuth.post("calendar/book", { values, event });
      console.log("data", data);
      dispatch({ type: "ADD_MESSAGE_TO_LOG", payload: data });
    } catch (error) {
      const data = error.response.data;
      isDev && console.log("data", data);
      dispatch({ type: "ADD_MESSAGE_TO_LOG", payload: data });
    }
  };
  return (
    <CalendarContext.Provider
      value={{
        isLoading: state.isLoading,
        calendar: state.calendar,
        selectedDay: state.selectedDay,
        meeting: state.meeting,
        events: state.events,
        booked: state.booked,
        calendarLog: state.calendarLog,
        contactUs,
        getCalendarDay,
        setDay,
        setMeeting,
        bookNow,
        resetDay,
      }}>
      {children}
    </CalendarContext.Provider>
  );
};
