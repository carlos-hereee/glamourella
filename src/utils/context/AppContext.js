import { createContext, useReducer } from "react";
import { axiosWithAuth } from "../functions/axios";
import { reducer } from "../reducers/AppReducer";
import { glamourella } from "../../config";

export const AppContext = createContext();

export const AppState = ({ children }) => {
  const initialState = {
    isLoading: false,
    menu: glamourella.menu,
    schedule: glamourella.schedule,
    socials: glamourella.socials,
    about: glamourella.about,
    services: glamourella.services,
    gallery: glamourella.gallery,
    checkout: glamourella.checkout,
    contact: glamourella.contact,
    footerNewsletter: glamourella.footerNewsletter,
    paymentMethods: glamourella.paymentMethods,
    burger: { notification: 0 },
    paymentType: {},
    app: {
      title: "Glamour Beauty Collection",
      link: require("../../assets/glamour-logo.jpg"),
      alt: "industry brand",
    },
  };
  const [state, dispatch] = useReducer(reducer, initialState);
  // useEffect(() => {
  //   // getAllAssets();
  // }, []);
  // const getAssets = async () => {
  //   try {
  //     const { data } = await axiosWithAuth.get("/app/glamourella");
  //     dispatch({ type: "LOAD_CONTENT", payload: data });
  //   } catch (error) {
  //     dispatch({ type: "LOAD_CONTENT", payload: glamourella });
  //     dispatch({ type: "ADD_MESSAGE_TO_LOG", payload: error.response.data });
  //   }
  // };
  // const getAllAssets = async () => {
  //   dispatch({ type: "IS_LOADING", payload: true });
  //   try {
  //     const { data } = await axiosWithAuth.get("/gallery/all?path=assets");
  //     console.log("data", data);
  //     dispatch({ type: "LOAD_ASSETS", payload: data });
  //   } catch (err) {
  //     const data = err.response.data;
  //     dispatch({ type: "ADD_MESSAGE_TO_LOG", payload: data });
  //   }
  // };
  const updateBurger = (payload) => {
    dispatch({ type: "UPDATE_BURGER", payload: payload });
  };
  const updateMenu = (payload) => {
    dispatch({ type: "UPDATE_MENU", payload: payload });
  };
  const newsletter = async (values) => {
    dispatch({ type: "IS_LOADING", payload: true });
    try {
      const data = await axiosWithAuth.post("/newsletter", values);
      dispatch({ type: "ADD_MESSAGE_TO_LOG", payload: data });
    } catch (e) {
      dispatch({ type: "ADD_MESSAGE_TO_LOG", payload: true });
    }
  };
  const selectPaymentType = (method) => {
    const data = {
      ...method,
      title: `Payment type: ${method.name}`,
      subtitle: "Summary Details",
    };
    dispatch({ type: "SELECT_PAYMENT_TYPE", payload: data });
  };

  return (
    <AppContext.Provider
      value={{
        isLoading: state.isLoading,
        socials: state.socials,
        about: state.about,
        services: state.services,
        menu: state.menu,
        schedule: state.schedule,
        burger: state.burger,
        gallery: state.gallery,
        checkout: state.checkout,
        contact: state.contact,
        footerNewsletter: state.footerNewsletter,
        app: state.app,
        paymentMethods: state.paymentMethods,
        paymentType: state.paymentType,
        updateBurger,
        updateMenu,
        newsletter,
        selectPaymentType,
      }}>
      {children}
    </AppContext.Provider>
  );
};
