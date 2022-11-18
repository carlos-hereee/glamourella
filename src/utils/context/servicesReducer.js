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
    services: action.payload,
  };
};
const addToCart = (state, action) => {
  return {
    ...state,
    isLoading: false,
    cart: [...state.cart, action.payload],
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
    default:
      return state;
  }
};
