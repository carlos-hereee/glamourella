const isLoading = (state, action) => {
  return {
    ...state,
    isLoading: action.payload,
  };
};
const addMessageToLog = (state, action) => {
  return {
    ...state,
    log: [...state.log, action.payload],
  };
};
const loadAssets = (state, action) => {
  return {
    ...state,
    isLoading: false,
    gallery: action.payload,
  };
};
const updateAssets = (state, action) => {
  return {
    ...state,
    isLoading: false,
    isFiltered: true,
    filteredGallery: action.payload,
  };
};
export const reducer = (state, action) => {
  switch (action.type) {
    case "IS_LOADING":
      return isLoading(state, action);
    case "ADD_MESSAGE_TO_LOG":
      return addMessageToLog(state, action);
    case "LOAD_ASSETS":
      return loadAssets(state, action);
    case "UPDATE_ASSETS":
      return updateAssets(state, action);
    default:
      return state;
  }
};
