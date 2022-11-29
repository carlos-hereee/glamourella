import React, { createContext, useContext, useEffect, useReducer } from "react";
import { AuthContext } from "./AuthContext";
import { axiosWithAuth } from "../axios";
import { reducer } from "./userReducer";
export const UserContext = createContext();

export const UserState = ({ children }) => {
  const initialState = { isLoading: false, user: {}, log: [] };
  const [state, dispatch] = useReducer(reducer, initialState);
  const { accessToken } = useContext(AuthContext);

  useEffect(() => {
    if (accessToken) {
      getUserData();
    } else clearUserData();
  }, [accessToken]);

  const clearUserData = async () => {
    console.log("clear");
    dispatch({ type: "IS_LOADING", payload: true });
    dispatch({ type: "UPDATE_USER_DATA", payload: "" });
  };
  const getUserData = async () => {
    dispatch({ type: "IS_LOADING", payload: true });
    try {
      const { data } = await axiosWithAuth.get("/users");
      dispatch({ type: "UPDATE_USER_DATA", payload: data });
    } catch (e) {
      const { data, status } = e.response;
      dispatch({ type: "ADD_MESSAGE_TO_LOG", payload: data });
    }
  };
  return (
    <UserContext.Provider
      value={{
        user: state.user,
        isLoading: state.isLoading,
        log: state.log,
        // getUserData,
      }}>
      {children}
    </UserContext.Provider>
  );
};
