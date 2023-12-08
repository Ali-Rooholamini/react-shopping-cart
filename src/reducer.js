import Cart from "./Components/cart";

const reducer = (state, action) => {
  switch (action.type) {
    case "CLEAR_ALL":
      return { ...state, cart: [], amount: 0, total: 0 };
    case "REMOVE_CART":
      return {
        ...state,
        cart: state.cart.filter((item) => item.id !== action.payload),
      };
    default:
      return state;
  }
};

export default reducer;
