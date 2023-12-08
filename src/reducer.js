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

    case "UPDATE_QUANTITY":
      const tempCart = state.cart.map((item) => {
        if (item.id === action.payload.id && action.payload.quantity > 0) {
          return {
            ...item,
            quantity: action.payload.quantity,
          };
        }
        return { ...item };
      });

      return {
        ...state,
        cart: tempCart,
      };

    default:
      return state;
  }
};

export default reducer;
