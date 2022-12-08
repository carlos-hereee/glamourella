const isLoading = (state, action) => {
  return {
    ...state,
    isLoading: action.payload,
  };
};
const loadContent = (state, action) => {
  return {
    ...state,
    isLoading: false,
    socials: action.payload.socials,
    about: action.payload.about,
    services: action.payload.services,
    schedule: action.payload.schedule,
  };
};
const updateMenu = (state, action) => {
  return {
    ...state,
    isLoading: false,
    menu: action.payload,
  };
};
const updateBurger = (state, action) => {
  return {
    ...state,
    isLoading: false,
    burgerOptions: action.payload,
  };
};
export const reducer = (state, action) => {
  switch (action.type) {
    case "IS_LOADING":
      return isLoading(state, action);
    case "UPDATE_MENU":
      return updateMenu(state, action);
    case "LOAD_CONTENT":
      return loadContent(state, action);
    case "UPDATE_BURGER":
      return updateBurger(state, action);
    default:
      return state;
  }
};
