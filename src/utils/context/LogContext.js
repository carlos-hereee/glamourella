import React, { createContext, useReducer } from "react";
import { reducer } from "..reducers/logReducer";
import { useEffect } from "react";
export const LogContext = createContext();

export const LogState = ({ children }) => {
  const initialState = { isLoading: false, log: [] };
  const [state, dispatch] = useReducer(reducer, initialState);
  useEffect(() => {}, []);
  return (
    <LogContext.Provider value={{ init: state.log, isLoading: state.isLoading }}>
      {children}
    </LogContext.Provider>
  );
};
