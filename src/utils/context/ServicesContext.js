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
    cart: [
      {
        cost: 15,
        hasHero: false,
        hasIcon: false,
        hasLink: false,
        hero: { link: "/lorem", name: "lorem ipsum" },
        hyperlink: [{ word: "Maiores", link: "/lorem" }],
        isAccessory: false,
        isBookable: true,
        isBooked: false,
        isForSale: true,
        length: "20 minutes",
        response:
          "Your nail will be professionally shaped and filed,  cuticle trimmer. Followed by lotion massage and finish with a nail buff or polish.",
        subtitle: "manicure",
        title: "classic",
        uid: "pe-123-di-456-cu-789-re-0000",
      },
    ],
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
      dispatch({ type: "REMOVE_FROM_CART", payload: service });
    } catch (err) {
      const data = err.response.data;
      addMessageToLog(data);
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
  const bookEvent = (data, cart, service) => {
    // get
    // add to booked
    // dispatch({ type: "BOOK_EVENT", payload: data });

    // notify success
    addMessageToLog({
      uid: data.event.uid,
      success: true,
      data: {
        isLink: true,
        isNav: true,
        link: "/checkout",
        word: "checkout",
        message: "Successfully booked event, would you like to proceed to checkout?",
      },
    });
  };
  return (
    <ServicesContext.Provider
      value={{
        isLoading: state.isLoading,
        isFiltered: state.isFiltered,
        filteredServices: state.filteredServices,
        cart: state.cart,
        active: state.active,
        bookEvent,
        filterServices,
        addToCart,
        removeFromCart,
        setActive,
      }}>
      {children}
    </ServicesContext.Provider>
  );
};
