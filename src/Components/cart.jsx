import React, { useState } from "react";
import CartItem from "./cartItem";
import { RiFontSize, RiShoppingCartLine } from "react-icons/ri";
import { useCartContex } from "../contex";

const Cart = () => {
  const { cart, clearCarts, total } = useCartContex();

  const renderingContent = () => {
    if (cart.length > 0) {
      return (
        <>
          <div className="col-lg-8 col-md-7 pt-sm-2">
            {cart.map((item) => {
              return <CartItem key={item.id} {...item} />;
            })}
          </div>
          <div className="col-lg-4 col-md-5 pt-3 pt-sm-4 border-end">
            <div className="text-center mb-4 pb-3 border-bottom">
              <h3 className="h5 mb-3 pb-1">جمع کل</h3>
              <h4 className="fw-normal">{total.toLocaleString()} تومان</h4>
            </div>
            <a
              className="btn btn-primary btn-shadow d-block w-100 mt-4"
              onClick={() => clearCarts()}
            >
              حذف همه آیتم ها
            </a>
          </div>
        </>
      );
    }

    return (
      <div className="d-flex flex-column justify-content-center align-items-center">
        <RiShoppingCartLine fontSize={150} />
        <p className="mt-5 fs-lg fw-bold">هیج آیتمی در سبد خرید وجود ندارد</p>
      </div>
    );
  };

  return (
    <>
      <div className="page-title-overlap bg-dark pt-1">
        <div className="container d-lg-flex justify-content-between py-3">
          <div className="order-lg-1 pe-lg-4 text-center text-lg-start">
            <h1 className="h3 text-light mb-0 mt-3">سبد خرید</h1>
          </div>
        </div>
      </div>
      <div className="container pt-4 pb-3 py-sm-4 bg-light rounded shadow-lg">
        <div className="rounded-3  mt-4 mb-5">
          <div className="px-3 px-sm-4 px-xl-5 pt-1 pb-4 pb-sm-5">
            <div className="row">{renderingContent()}</div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Cart;
