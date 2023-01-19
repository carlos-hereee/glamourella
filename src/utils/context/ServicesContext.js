import { useContext } from "react";
import { createContext, useReducer } from "react";
import shortid from "shortid";
import { reducer } from "../reducers/ServicesReducer";
import { LogContext } from "./LogContext";

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
  const { addMessageToLog } = useContext(LogContext);

  const addToCart = (cart, service) => {
    if (cart.length > 0) {
      if (cart.filter((c) => c.uid === service.uid).length > 0) {
        const data = {
          uid: shortid.generate(),
          data: {
            isLink: false,
            message: "Unable to add to cart because, service is already in cart",
          },
        };
        addMessageToLog(data);
      } else {
        dispatch({ type: "ADD_TO_CART", payload: service });
      }
    } else {
      dispatch({ type: "ADD_TO_CART", payload: service });
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
    const data = services.filter((s) => s.subtitle === filter);
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
