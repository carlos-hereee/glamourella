import React, { createContext, useReducer } from "react";
import { useEffect } from "react";
import { axiosWithAuth } from "../axios";
import { reducer } from "../reducers/GlamourellaReducer";
import { glamourella } from "../../config";

export const GlamourellaContext = createContext();

export const GlamourellaState = ({ children }) => {
  const initialState = {
    isLoading: false,
    glamourella: [],
    menu: glamourella.menu,
    schedule: glamourella.schedule,
    socials: glamourella.socials,
    about: glamourella.about,
    services: glamourella.services,
    burgerOptions: {
      name: "burger",
      notification: 0,
    },
  };
  const [state, dispatch] = useReducer(reducer, initialState);
  useEffect(() => {
    getAssets();
  }, []);
  const getAssets = async () => {
    try {
      const { data } = await axiosWithAuth.get("/app/glamourella");
      dispatch({ type: "LOAD_CONTENT", payload: data });
    } catch (error) {
      dispatch({ type: "LOAD_CONTENT", payload: glamourella });
      dispatch({ type: "ADD_MESSAGE_TO_LOG", payload: error.response.data });
    }
  };

  return (
    <GlamourellaContext.Provider
      value={{
        glamourella: state.glamourella,
        isLoading: state.isLoading,
        socials: state.socials,
        about: state.about,
        services: state.services,
        menu: state.menu,
        schedule: state.schedule,
        burgerOptions: state.burgerOptions,
      }}>
      {children}
    </GlamourellaContext.Provider>
  );
};
