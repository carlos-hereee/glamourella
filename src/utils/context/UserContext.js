import React, { createContext, useContext, useEffect, useReducer } from "react";
import { AuthContext } from "./AuthContext";
import { axiosWithAuth } from "../functions/axios";
import { reducer } from "../reducers/UserReducer";
import { isDev } from "../../config";
import * as yup from "yup";

export const UserContext = createContext();
export const UserState = ({ children }) => {
  const initialState = {
    isLoading: false,
    user: {},
    booked: [],
    userSchema: yup.object().shape({
      name: yup.string().required("*Required field"),
      email: yup.string().email().required("*Required field"),
      // recaptcha: yup.string().required("*Required field").nullable(),
      phone: yup.number().required("*Required field"),
    }),
    userValues: { name: "", email: "", phone: "" },
    shippingSchema: yup.object().shape({
      firstName: yup.string().required("*Required field"),
      lastName: yup.string().required("*Required field"),
      streetAddress: yup.string().required("*Required field"),
      apt: yup.number().required("*Required field"),
      city: yup.string().required("*Required field"),
      state: yup.string().required("*Required field"),
      postalCode: yup.number().required("*Required field"),
    }),
    shippingValues: {
      firstName: "",
      lastName: "",
      streetAddress: "",
      apt: 101,
      city: "",
      state: "",
      postalCode: "",
    },
    shippingDetails: {},
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
  const updateUserData = (data) => {
    dispatch({ type: "UPDATE_USER_DATA", payload: data });
  };
  const setShipping = (data) => {
    dispatch({ type: "UPDATE_SHIPPING_DETAILS", payload: data });
  };
  return (
    <UserContext.Provider
      value={{
        isLoading: state.isLoading,
        user: state.user,
        booked: state.booked,
        admin: state.admin,
        userSchema: state.userSchema,
        userValues: state.userValues,
        shippingDetails: state.shippingDetails,
        shippingValues: state.shippingValues,
        shippingSchema: state.shippingSchema,
        // getUserData,
        updateUserData,
        setShipping,
      }}>
      {children}
    </UserContext.Provider>
  );
};
