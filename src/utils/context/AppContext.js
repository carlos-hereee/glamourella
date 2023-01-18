import { createContext, useEffect, useReducer } from "react";
import { axiosWithAuth } from "../functions/axios";
import { reducer } from "../reducers/GlamourellaReducer";
import { glamourella } from "../../config";

export const AppContext = createContext();

export const AppState = ({ children }) => {
  const initialState = {
    isLoading: false,
    glamourella: [],
    menu: glamourella.menu,
    schedule: glamourella.schedule,
    socials: glamourella.socials,
    about: glamourella.about,
    services: glamourella.services,
    gallery: glamourella.gallery,
    app: {
      title: "Glamour Beauty Collection",
      link: require("../../assets/glamour-logo.jpg"),
      alt: "industry brand",
    },
  };
  const [state, dispatch] = useReducer(reducer, initialState);
  useEffect(() => {
    // getAllAssets();
  }, []);
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
  const newsletter = async (values) => {
    dispatch({ type: "IS_LOADING", payload: true });
    try {
      const data = await axiosWithAuth.post("/newsletter", values);
      dispatch({ type: "ADD_MESSAGE_TO_LOG", payload: data });
    } catch (e) {
      dispatch({ type: "ADD_MESSAGE_TO_LOG", payload: true });
    }
  };

  return (
    <AppContext.Provider
      value={{
        glamourella: state.glamourella,
        isLoading: state.isLoading,
        socials: state.socials,
        about: state.about,
        services: state.services,
        menu: state.menu,
        schedule: state.schedule,
        burger: state.burger,
        gallery: state.gallery,
        app: state.app,
        updateBurger,
        newsletter,
      }}>
      {children}
    </AppContext.Provider>
  );
};
