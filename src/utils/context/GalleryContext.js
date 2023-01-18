import React, { createContext, useEffect, useReducer } from "react";
import { reducer } from "../reducers/GalleryReducer";
export const GalleryContext = createContext();

export const GalleryState = ({ children }) => {
  const initialState = {
    isLoading: false,
    isFiltered: false,
    filteredGallery: [],
    // gallery: [],
  };
  const [state, dispatch] = useReducer(reducer, initialState);
  useEffect(() => {
    // getAllAssets();
  }, []);

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
    const data = gallery.filter((g) => g.hero.path.includes(filter));
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
