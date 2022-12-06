import React, { createContext, useReducer } from "react";
import { useEffect } from "react";
import { axiosWithAuth } from "../axios";
import { reducer } from "../reducers/GlamourellaReducer";
import { glamourella } from "../../config";
import shortid from "shortid";

export const GlamourellaContext = createContext();

export const GlamourellaState = ({ children }) => {
  const initialState = {
    isLoading: false,
    glamourella: [],
    menu: [
      { name: "home", uid: shortid.generate() },
      { name: "about", uid: shortid.generate() },
      { name: "services", uid: shortid.generate() },
      { name: "booking", uid: shortid.generate() },
      { name: "gallery", uid: shortid.generate() },
      { name: "check-out", uid: shortid.generate() },
      { name: "account", uid: shortid.generate() },
    ],
    socials: glamourella.socials,
    about: glamourella.about,
    services: glamourella.services,
  };
  const [state, dispatch] = useReducer(reducer, initialState);
  useEffect(() => {
    getAssets();
  }, []);
  const getAssets = async () => {
    try {
      const { data } = await axiosWithAuth.get("/glamourella");
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
      }}>
      {children}
    </GlamourellaContext.Provider>
  );
};
