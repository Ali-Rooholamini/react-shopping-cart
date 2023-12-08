import { createContext, useContext, useReducer } from "react";
import cartItems from "./data";
import reducer from "./reducer";

const CartContex = createContext();

const initialState = {
  loading: false,
  cart: cartItems,
  amount: 0,
  total: 0,
};

const CartProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const clearCarts = () => {
    dispatch({ type: "CLEAR_ALL" });
  };

  const removeItem = (id) => {
    dispatch({ type: "REMOVE_CART", payload: id });
  };

  const updateQuantity = (id, quantity) => {
    dispatch({ type: "UPDATE_QUANTITY", payload: { id, quantity } });
  };

  return (
    <CartContex.Provider
      value={{ ...state, clearCarts, removeItem, updateQuantity }}
    >
      {children}
    </CartContex.Provider>
  );
};

const useCartContex = () => {
  return useContext(CartContex);
};

export { CartProvider, useCartContex };
