const isLoading = (state, action) => {
  return {
    ...state,
    isLoading: action.payload,
  };
};
const addMessageToLog = (state, action) => {
  return {
    ...state,
    log: action.payload,
  };
};
const updateEvents = (state, action) => {
  return {
    ...state,
    events: action.payload,
  };
};
export const reducer = (state, action) => {
  switch (action.type) {
    case "IS_LOADING":
      return isLoading(state, action);
    case "ADD_MESSAGE_TO_LOG":
      return addMessageToLog(state, action);
    case "UPDATE_EVENTS":
      return updateEvents(state, action);
    default:
      return state;
  }
};
