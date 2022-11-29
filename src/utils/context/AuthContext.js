import React, { createContext, useEffect, useReducer } from "react";
import { axiosWithOutAuth } from "../axios";
import authReducer from "./authReducer";
import * as yup from "yup";

export const AuthContext = createContext();

export const AuthState = (props) => {
  const initialState = {
    isLoading: false,
    signInError: "",
    signUpError: "",
    accessToken: "",
    signUpValues: { email: "", password: "", confirmPassword: "" },
    signUpSchema: yup.object().shape({
      email: yup.string().email().required("*Required field"),
      password: yup.string().required("*Required field"),
      confirmPassword: yup
        .string()
        .oneOf([yup.ref("password"), null], "Passwords must match")
        .required("*Required field"),
    }),
    loginValues: { email: "", password: "" },
    loginSchema: yup.object().shape({
      email: yup.string().email().required("*Required field"),
      password: yup.string().required("*Required field"),
    }),
    appName: "Glamourella",
  };
  const [state, dispatch] = useReducer(authReducer, initialState);
  useEffect(() => {
    getAccessToken();
  }, []);

  const getAccessToken = async () => {
    try {
      const { data } = await axiosWithOutAuth.post("/users/refresh-token");
      dispatch({ type: "SIGNIN_SUCCESS", payload: data });
    } catch (err) {
      const { status, data } = err.response;
      dispatch({ type: "SIGNIN_ERROR", payload: data });
    }
  };
  const signUp = async (values) => {
    dispatch({ type: "IS_LOADING", payload: true });
    try {
      const { data } = await axiosWithOutAuth.post("/users/register", values);
      console.log("data", data);
      dispatch({ type: "SIGNUP_SUCCESS", payload: data });
    } catch (error) {
      const { data, status } = error.response;
      console.log("error.response", error.response);
      dispatch({ type: "SIGNUP_ERROR", payload: data });
    }
  };
  const signIn = async (values) => {
    try {
      const { data } = await axiosWithOutAuth.post("/users/login", values);
      dispatch({ type: "SIGNIN_SUCCESS", payload: data });
    } catch (err) {
      const { data, status } = err.response;
      dispatch({ type: "SIGNIN_ERROR", payload: data });
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
        appName: state.appName,
        isLoading: state.isLoading,
        signUpValues: state.signUpValues,
        signUpSchema: state.signUpSchema,
        loginValues: state.loginValues,
        loginSchema: state.loginSchema,
        accessToken: state.accessToken,
        signInError: state.signInError,
        signUpError: state.signUpError,
        signIn,
        signUp,
        signOut,
      }}>
      {props.children}
    </AuthContext.Provider>
  );
};
