import React, { createContext, useEffect, useReducer } from "react";
import { axiosWithAuth } from "../axios";
import { reducer } from "../reducers/GalleryReducer";
export const GalleryContext = createContext();

export const GalleryState = ({ children }) => {
  const initialState = {
    isLoading: false,
    isFiltered: false,
    filteredGallery: [],
    gallery: [],
    log: [],
  };
  const [state, dispatch] = useReducer(reducer, initialState);
  useEffect(() => {
    // getAllAssets();
  }, []);
  const getAllAssets = async () => {
    dispatch({ type: "IS_LOADING", payload: true });
    try {
      const { data } = await axiosWithAuth.get("/gallery/all?path=assets");
      dispatch({ type: "LOAD_ASSETS", payload: data });
    } catch (err) {
      const data = err.response.data;
      dispatch({ type: "ADD_MESSAGE_TO_LOG", payload: data });
    }
  };
  const addToCart = (service) => {
    try {
      const services = { ...service, isCheckout: true };
      dispatch({ type: "ADD_TO_CART", payload: services });
    } catch (err) {
      const data = err.response.data;
      dispatch({ type: "ADD_MESSAGE_TO_LOG", payload: data.message });
    }
  };
  const filterGallery = async (gallery, filter) => {
    dispatch({ type: "IS_LOADING", payload: true });
    if (filter === "all") {
      return dispatch({ type: "LOAD_ASSETS", payload: gallery });
    }
    const data = gallery.filter((g) => g.path.includes(filter));
    dispatch({ type: "UPDATE_ASSETS", payload: data });
  };
  return (
    <GalleryContext.Provider
      value={{
        gallery: state.gallery,
        isLoading: state.isLoading,
        isFiltered: state.isFiltered,
        filteredGallery: state.filteredGallery,
        filterGallery,
        addToCart,
      }}>
      {children}
    </GalleryContext.Provider>
  );
};
