import React, { createContext, useEffect, useReducer } from "react";
import { axiosWithAuth } from "../axios";
import { reducer } from "../reducers/ServicesReducer";

export const ServicesContext = createContext();
export const ServicesState = ({ children }) => {
  const initialState = {
    isLoading: false,
    isFiltered: false,
    cart: [
      {
        uid: "qwerty",
        type: "pedicure",
        src:
          process.env.REACT_APP_DB_URL +
          "gallery/photo/?path=assets/pedicure/billie-unsplash.jpg",
        name: "classic ",
        length: "30 minutes",
        cost: 25,
        description:
          "Your feet will be pampered, nails are professionally shaped and filed, cuticle trimmer, callus removed, followed by a hot oil massage and finish with a nail buff or polish.",
      },
    ],
    filteredServices: [],
  };
  const [state, dispatch] = useReducer(reducer, initialState);

  const addToCart = (service) => {
    try {
      const services = { ...service, isService: true };
      dispatch({ type: "ADD_TO_CART", payload: services });
    } catch (err) {
      const data = err.response.data;
      dispatch({ type: "ADD_MESSAGE_TO_LOG", payload: data.message });
    }
  };
  const filterServices = async (services, filter) => {
    dispatch({ type: "IS_LOADING", payload: true });
    if (filter === "all") {
      return dispatch({ type: "LOAD_SERVICES", payload: services });
    }
    const data = services.filter((s) => s.type === filter);
    dispatch({ type: "UPDATE_SERVICES", payload: data });
  };
  return (
    <ServicesContext.Provider
      value={{
        isLoading: state.isLoading,
        isFiltered: state.isFiltered,
        filteredServices: state.filteredServices,
        cart: state.cart,
        filterServices,
        addToCart,
      }}>
      {children}
    </ServicesContext.Provider>
  );
};
