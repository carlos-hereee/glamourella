import React, { createContext, useReducer } from "react";
import { useEffect } from "react";
import shortid from "shortid";
import { axiosWithOutAuth } from "../axios";
import { reducer } from "./reducer";
export const GlamourellaContext = createContext();

export const GlamourellaState = ({ children }) => {
  const initialState = {
    isLoading: false,
    glamourella: [],
    socials: [
      {
        social: "instagram",
        link: "https://www.instagram.com/glamourrella/",
        key: shortid.generate(),
      },
    ],
  };
  const [state, dispatch] = useReducer(reducer, initialState);
  useEffect(() => {
    getAssets();
  }, []);
  const getAssets = async () => {
    // console.log('log', log)
    try {
      const data = await axiosWithOutAuth.get("/glamourella");
      console.log("data", data);
    } catch (error) {
      console.log("error", error);
    }
  };
  return (
    <GlamourellaContext.Provider
      value={{
        glamourella: state.glamourella,
        isLoading: state.isLoading,
        socials: state.socials,
      }}>
      {children}
    </GlamourellaContext.Provider>
  );
};
