import Cart from "./Components/cart";

const reducer = (state, action) => {
  switch (action.type) {
    case "Clear_All":
      return { ...state, cart: [], amount: 0, total: 0 };
    default:
      return state;
  }
};

export default reducer;
