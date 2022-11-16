import React, { createContext, useEffect, useReducer } from "react";
import { axiosWithOutAuth } from "../axios";
import { reducer } from "./galleryReducer";
export const GalleryContext = createContext();

export const GalleryState = ({ children }) => {
  const initialState = { isLoading: false, gallery: [], log: [] };
  const [state, dispatch] = useReducer(reducer, initialState);
  useEffect(() => {
    getAllAssets();
  }, []);
  const getAllAssets = async () => {
    dispatch({ type: "IS_LOADING", payload: true });
    try {
      const { data } = await axiosWithOutAuth.get("/gallery/all");
      dispatch({ type: "LOAD_ASSETS", payload: data });
    } catch (err) {
      const data = err.response.data;
      dispatch({ type: "ADD_MESSAGE_TO_LOG", payload: data });
    }
  };
  return (
    <GalleryContext.Provider
      value={{ gallery: state.gallery, isLoading: state.isLoading }}>
      {children}
    </GalleryContext.Provider>
  );
};
