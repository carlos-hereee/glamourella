import { createContext, useReducer } from "react";
import { reducer } from "../reducers/ServicesReducer";

export const ServicesContext = createContext();
export const ServicesState = ({ children }) => {
  const initialState = {
    isLoading: false,
    isFiltered: false,
    cart: [],
    filteredServices: [],
    active: {},
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
  const removeFromCart = (service, active) => {
    try {
      // reset active if it matches item
      service.uid === active.uid && setActive({});
      const services = { ...service, isService: true };
      dispatch({ type: "REMOVE_FROM_CART", payload: services });
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
    console.log("services", services);
    const data = services.filter((s) => s.type === filter);
    dispatch({ type: "UPDATE_SERVICES", payload: data });
  };
  const setActive = (active) => {
    dispatch({ type: "IS_LOADING", payload: true });
    dispatch({ type: "UPDATE_ACTIVE", payload: active });
  };
  return (
    <ServicesContext.Provider
      value={{
        isLoading: state.isLoading,
        isFiltered: state.isFiltered,
        filteredServices: state.filteredServices,
        cart: state.cart,
        active: state.active,
        filterServices,
        addToCart,
        removeFromCart,
        setActive,
      }}>
      {children}
    </ServicesContext.Provider>
  );
};
