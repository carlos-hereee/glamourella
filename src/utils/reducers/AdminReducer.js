const isLoading = (state, action) => {
  return { ...state, isLoading: action.payload };
};
const setMenuActive = (state, action) => {
  return {
    ...state,
    isLoading: false,
    active: action.payload,
    menu: action.menu,
  };
};
const loadPlanner = (state, action) => {
  return {
    ...state,
    isLoading: false,
    isFiltered: action.payload,
  };
};
const filterPlanner = (state, action) => {
  return {
    ...state,
    isLoading: false,
    isFiltered: true,
    planner: action.payload,
  };
};
const loadBooked = (state, action) => {
  return {
    ...state,
    isLoading: false,
    booked: {
      ...state.booked,
      sections: action.payload,
    },
  };
};
export const reducer = (state, action) => {
  switch (action.type) {
    case "IS_LOADING":
      return isLoading(state, action);
    case "SET_MENU_ACTIVE":
      return setMenuActive(state, action);
    case "LOAD_PLANNER":
      return loadPlanner(state, action);
    case "FILTER_PLANNER":
      return filterPlanner(state, action);
    case "LOAD_BOOKED":
      return loadBooked(state, action);
    default:
      return state;
  }
};
