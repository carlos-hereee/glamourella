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
const loadAssets = (state, action) => {
  return {
    ...state,
    isLoading: false,
    gallery: action.payload,
    // socials: action.payload.socials,
    // about: action.payload.about,
    // services: action.payload.services,
    // schedule: action.payload.schedule,
  };
};
const updateMenu = (state, action) => {
  return {
    ...state,
    isLoading: false,
    menu: state.menu.map((m) => {
      if (m.name === "booking") {
        return { ...m, notification: action.payload.servicesCount };
      } else if (m.name === "checkout") {
        return {
          ...m,
          notification: action.payload.accessoryCount + action.payload.servicesCount,
        };
      } else return m;
    }),
  };
};
const updateBurger = (state, action) => {
  return {
    ...state,
    isLoading: false,
    burger: action.payload,
  };
};
const selectPaymentType = (state, action) => {
  return {
    ...state,
    isLoading: false,
    paymentType: action.payload,
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
    case "LOAD_ASSETS":
      return loadAssets(state, action);
    case "UPDATE_BURGER":
      return updateBurger(state, action);
    case "SELECT_PAYMENT_TYPE":
      return selectPaymentType(state, action);
    default:
      return state;
  }
};
