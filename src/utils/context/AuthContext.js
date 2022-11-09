import React, { createContext, useEffect, useReducer } from "react";
import { axiosWithOutAuth } from "../axios";
import authReducer from "./authReducer";

export const AuthContext = createContext();

export const AuthState = (props) => {
  const initialState = {
    isLoading: false,
    signInError: "",
    signUpError: "",
    accessToken: "",
    appName: "Glamourella",
  };
  const [state, dispatch] = useReducer(authReducer, initialState);
  useEffect(() => {
    axiosWithOutAuth
      .post("/users/refresh-token")
      .then((res) => dispatch({ type: "SIGNIN_SUCCESS", payload: res.data }))
      .catch((e) =>
        dispatch({ type: "SIGNIN_ERROR", payload: e.response.data.message })
      );
  }, []);

  const register = async (values) => {
    dispatch({ type: "IS_LOADING", payload: true });
    try {
      const res = await axiosWithOutAuth.post("/users/register", values);
      dispatch({ type: "SIGNUP_SUCCESS", payload: res.data });
    } catch (error) {
      const { message } = error.response.data;
      dispatch({ type: "SIGNUP_ERROR", payload: message });
    }
  };
  const signIn = async (values) => {
    try {
      const res = await axiosWithOutAuth.post("/users/login", values);
      dispatch({ type: "SIGNIN_SUCCESS", payload: res.data });
    } catch (e) {
      dispatch({ type: "SIGNIN_ERROR", payload: e.response.data.message });
    }
  };
  const signOut = () => {
    try {
      dispatch({ type: "SIGNOUT_SUCCESS" });
    } catch (error) {
      dispatch({ type: "SIGNOUT_ERROR", payload: error.message });
    }
  };

  return (
    <AuthContext.Provider
      value={{
        error: state.error,
        isLoading: state.isLoading,
        signInError: state.signInError,
        signUpError: state.signUpError,
        accessToken: state.accessToken,
        appName: state.appName,
        signIn,
        register,
        signOut,
      }}>
      {props.children}
    </AuthContext.Provider>
  );
};
