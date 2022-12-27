const isLoading = (state, action) => {
  return {
    ...state,
    isLoading: action.payload,
  };
};
const setMenuActive = (state, action) => {
  return {
    ...state,
    isLoading: false,
    active: action.payload,
    menu: action.menu,
  };
};
export const reducer = (state, action) => {
  switch (action.type) {
    case "IS_LOADING":
      return isLoading(state, action);
    case "SET_MENU_ACTIVE":
      return setMenuActive(state, action);
    default:
      return state;
  }
};
