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
  const cookieName = process.env.REACT_APP_COOKIE_NAME;
  useEffect(() => {
    if (document.cookie.indexOf(cookieName) !== -1) {
      getAccessToken();
    }
  }, []);

  const getAccessToken = async () => {
    try {
      const { data } = await axiosWithOutAuth.post("/users/refresh-token");
      console.log("data", data);
      dispatch({ type: "SIGNIN_SUCCESS", payload: data });
    } catch (err) {
      console.log("err", err);
      dispatch({ type: "SIGNIN_ERROR", payload: err.response.data.message });
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
      const res = await axiosWithOutAuth.post("/users/login", values);
      console.log("res", res);
      dispatch({ type: "SIGNIN_SUCCESS", payload: res.data });
    } catch (err) {
      const { data, status } = err.response;
      console.log("sign in error", err.response);

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
