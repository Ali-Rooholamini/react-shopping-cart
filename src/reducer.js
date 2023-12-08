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

    case "GET_TOTAL":
      const { total } = state.cart.reduce(
        (cartTotal, cartItem) => {
          const { price, quantity } = cartItem;
          const itemTotal = price * quantity;
          cartTotal.total += itemTotal;
          return cartTotal;
        },
        {
          total: 0,
        }
      );

      return { ...state, total };

    default:
      return state;
  }
};

export default reducer;
