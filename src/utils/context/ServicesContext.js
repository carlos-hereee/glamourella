import React, { createContext, useEffect, useReducer } from "react";
import { axiosWithOutAuth } from "../axios";
import { reducer } from "./servicesReducer";

export const ServicesContext = createContext();
export const ServicesState = ({ children }) => {
  const initialState = {
    isLoading: false,
    services: [],
    cart: [],
    filteredServices: [],
  };
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
  const filterServices = async (services, filter) => {
    dispatch({ type: "IS_LOADING", payload: true });
    if (filter === "all") {
      return dispatch({ type: "LOAD_ASSETS", payload: services });
    }
    const data = services.filter((g) => g.path.includes(filter));
    dispatch({ type: "UPDATE_ASSETS", payload: data });
  };
  return (
    <ServicesContext.Provider
      value={{
        services: state.services,
        isLoading: state.isLoading,
        filteredServices: state.filteredServices,
        cart: state.cart,
        filterServices,
        addToCart,
      }}>
      {children}
    </ServicesContext.Provider>
  );
};
