import React, { createContext, useReducer } from "react";
import { axiosWithOutAuth } from "./axios";
import { reducer } from "./reducer";
export const CalendarContext = createContext();

export const CalendarState = ({ children }) => {
  const initialState = { isLoading: false, calendar: [], log: [] };
  const [state, dispatch] = useReducer(reducer, initialState);

  const contactUs = async (values) => {
    dispatch({ type: "IS_LOADING", payload: true });
    try {
      const data = await axiosWithOutAuth.post("/contact", values);
      console.log("data", data);
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
        log: state.log,
        contactUs,
      }}>
      {children}
    </CalendarContext.Provider>
  );
};
