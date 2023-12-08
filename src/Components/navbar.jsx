import { RiShoppingCartLine } from "react-icons/ri";
import React from "react";
import { useCartContex } from "../contex";

const Navbar = () => {
  const { cart } = useCartContex();
  return (
    <header className="navbar navbar-dark bg-dark shadow-sm">
      <div className="container">
        <a className="navbar-tool ms-3">
          <div className="navbar-tool-icon-box bg-secondary">
            <span className="navbar-tool-label">{cart.length}</span>
            <RiShoppingCartLine className="navbar-tool-icon" />
          </div>
        </a>
        <div>
          <p className="h3 mb-0 text-light">Shopping Cart</p>
          <p className="fs-sm text-start mb-0">useContex & useReducer</p>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
