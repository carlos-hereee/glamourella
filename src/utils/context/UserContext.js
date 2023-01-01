import React, { createContext, useContext, useEffect, useReducer } from "react";
import { AuthContext } from "./AuthContext";
import { axiosWithAuth } from "../axios";
import { reducer } from "../reducers/UserReducer";
import { isDev } from "../../config";

export const UserContext = createContext();
export const UserState = ({ children }) => {
  const initialState = {
    isLoading: false,
    user: {},
    booked: [],
    log: [],
  };
  const [state, dispatch] = useReducer(reducer, initialState);
  const { accessToken } = useContext(AuthContext);

  useEffect(() => {
    if (accessToken) {
      getUserData();
    }
  }, [accessToken]);

  // const clearUserData = async () => {
  //   dispatch({ type: "IS_LOADING", payload: true });
  //   dispatch({ type: "UPDATE_USER_DATA", payload: "" });
  // };
  const getUserData = async () => {
    dispatch({ type: "IS_LOADING", payload: true });
    try {
      const { data } = await axiosWithAuth.get("/users");
      // console.log("data", data);
      dispatch({ type: "UPDATE_USER_DATA", payload: data });
    } catch (e) {
      const { data, status } = e.response;
      isDev && console.log("status", status, data);
      dispatch({ type: "ADD_MESSAGE_TO_LOG", payload: data });
    }
  };
  return (
    <UserContext.Provider
      value={{
        isLoading: state.isLoading,
        user: state.user,
        booked: state.booked,
        log: state.log,
        admin: state.admin,
        // getUserData,
      }}>
      {children}
    </UserContext.Provider>
  );
};
