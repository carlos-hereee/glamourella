import React, { createContext, useEffect, useReducer } from "react";
import { axiosWithOutAuth } from "../axios";
import { reducer } from "./servicesReducer";

export const ServicesContext = createContext();
export const ServicesState = ({ children }) => {
  const initialState = { isLoading: false, services: [], cart: [] };
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    getAllServices();
  }, []);

  const getAllServices = async () => {
    dispatch({ type: "IS_LOADING", payload: true });
    try {
      const { data } = await axiosWithOutAuth.get("services");
      dispatch({ type: "LOAD_SERVICES", payload: data });
    } catch (err) {
      const data = err.response.data;
      dispatch({ type: "ADD_MESSAGE_TO_LOG", payload: data.message });
    }
  };
  const addToCart = (service) => {
    console.log("service", service);
    try {
      dispatch({ type: "ADD_TO_CART", payload: service });
    } catch (err) {
      const data = err.response.data;
      dispatch({ type: "ADD_MESSAGE_TO_LOG", payload: data.message });
    }
  };
  return (
    <ServicesContext.Provider
      value={{
        services: state.services,
        isLoading: state.isLoading,
        cart: state.cart,
        addToCart,
      }}>
      {children}
    </ServicesContext.Provider>
  );
};
