const isLoading = (state, action) => {
  return {
    ...state,
    isLoading: action.payload,
  };
};
const loadServices = (state, action) => {
  return {
    ...state,
    isLoading: false,
    isFiltered: false,
    services: action.payload,
  };
};
const updateAssets = (state, action) => {
  return {
    ...state,
    isLoading: false,
    isFiltered: true,
    filteredServices: action.payload,
  };
};
const updateActive = (state, action) => {
  return {
    ...state,
    isLoading: false,
    active: action.payload,
  };
};
const addToCart = (state, action) => {
  return {
    ...state,
    isLoading: false,
    cart: [...state.cart, action.payload],
  };
};
const removeFromCart = (state, action) => {
  return {
    ...state,
    isLoading: false,
    // cart: [...state.cart, action.payload],
    cart: state.cart.filter((c) => c.uid !== action.payload.uid),
  };
};
export const reducer = (state, action) => {
  switch (action.type) {
    case "IS_LOADING":
      return isLoading(state, action);
    case "LOAD_SERVICES":
      return loadServices(state, action);
    case "ADD_TO_CART":
      return addToCart(state, action);
    case "REMOVE_FROM_CART":
      return removeFromCart(state, action);
    case "UPDATE_ACTIVE":
      return updateActive(state, action);
    case "UPDATE_SERVICES":
      return updateAssets(state, action);
    default:
      return state;
  }
};
