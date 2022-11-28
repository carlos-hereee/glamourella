import React, { createContext, useReducer } from "react";
import { useEffect } from "react";
import { axiosWithOutAuth } from "../axios";
import { reducer } from "./glamaurellaReducer";
import glamourella from "../../glamourella.json";

export const GlamourellaContext = createContext();

export const GlamourellaState = ({ children }) => {
  const initialState = {
    isLoading: false,
    glamourella: [],
    socials: [],
    about: [],
    services: [],
  };
  const [state, dispatch] = useReducer(reducer, initialState);
  useEffect(() => {
    getAssets();
  }, []);
  const getAssets = async () => {
    try {
      const { data } = await axiosWithOutAuth.get("/glamourella");
      dispatch({ type: "LOAD_CONTENT", payload: data });
    } catch (error) {
      dispatch({ type: "LOAD_CONTENT", payload: glamourella });
      dispatch({ type: "ADD_MESSAGE_TO_LOG", payload: error.response.message });
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
      }}>
      {children}
    </GlamourellaContext.Provider>
  );
};
