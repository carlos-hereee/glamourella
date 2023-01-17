import { createContext, useReducer } from "react";
import shortid from "shortid";
import { reducer } from "../reducers/ServicesReducer";

export const ServicesContext = createContext();
export const ServicesState = ({ children }) => {
  const initialState = {
    isLoading: false,
    isFiltered: false,
    cart: [
      {
        uid: shortid.generate(),
        subtitle: "pedicure",
        hasHero: false,
        hasIcon: false,
        hero: { link: "/lorem", name: "lorem ipsum" },
        hasLink: false,
        isForSale: true,
        hyperlink: [{ word: "Maiores", link: "/lorem" }],
        //link:
        //   process.env.REACT_APP_DB_URL +
        //   "gallery/photo/?path=assets/pedicure/billie-unsplash.jpg",
        title: "classic",
        length: "30 minutes",
        cost: 25,
        response:
          "Your feet will be pampered, nails are professionally shaped and filed, cuticle trimmer, callus removed, followed by a hot oil massage and finish with a nail buff or polish.",
      },
      {
        uid: shortid.generate(),
        subtitle: "pedicure",
        hasHero: false,
        hasIcon: false,
        hero: { link: "/lorem", name: "lorem ipsum" },
        hasLink: false,
        isForSale: true,
        hyperlink: [{ word: "Maiores", link: "/lorem" }],
        //link:
        //   process.env.REACT_APP_DB_URL +
        //   "gallery/photo/?path=assets/pedicure/billie-unsplash.jpg",
        title: "classic",
        length: "30 minutes",
        cost: 25,
        response:
          "Your feet will be pampered, nails are professionally shaped and filed, cuticle trimmer, callus removed, followed by a hot oil massage and finish with a nail buff or polish.",
      },
      {
        uid: shortid.generate(),
        subtitle: "pedicure",
        hasHero: false,
        hasIcon: false,
        hero: { link: "/lorem", name: "lorem ipsum" },
        hasLink: false,
        isForSale: true,
        hyperlink: [{ word: "Maiores", link: "/lorem" }],
        //link:
        //   process.env.REACT_APP_DB_URL +
        //   "gallery/photo/?path=assets/pedicure/billie-unsplash.jpg",
        title: "classic",
        length: "30 minutes",
        cost: 25,
        response:
          "Your feet will be pampered, nails are professionally shaped and filed, cuticle trimmer, callus removed, followed by a hot oil massage and finish with a nail buff or polish.",
      },
    ],
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
