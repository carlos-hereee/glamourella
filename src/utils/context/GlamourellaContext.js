import React, { createContext, useReducer } from "react";
import { useEffect } from "react";
import { axiosWithOutAuth } from "../axios";
import { reducer } from "./glamaurellaReducer";
export const GlamourellaContext = createContext();

export const GlamourellaState = ({ children }) => {
  const initialState = {
    isLoading: false,
    glamourella: [],
    socials: [],
  };
  const [state, dispatch] = useReducer(reducer, initialState);
  useEffect(() => {
    getAssets();
  }, []);
  const getAssets = async () => {
    try {
      const { data } = await axiosWithOutAuth.get("/glamourella");
      dispatch({ type: "LOAD_SOCIALS", payload: data });
    } catch (error) {
      dispatch({ type: "ADD_MESSAGE_TO_LOG", payload: error.response.message });
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
