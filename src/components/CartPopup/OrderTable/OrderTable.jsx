import React, { useContext } from "react";
import CartContext from "../../../context/CartContext";
import "./OrderTable.css";

export default function OrderTable({ handleButtonClick }) {
  const { totalPrice, cartItems } = useContext(CartContext);
  return (
    <div className="order-table">
      <button
        className="order-table__order-button"
        type="button"
        onClick={handleButtonClick}
        disabled={cartItems.length === 0}
      >
        <p className="order-table__text order-table__text_big">
          {cartItems.length === 0 ? "Корзина пуста" : "Оформить заказ"}
        </p>
        <p className="order-table__text order-table__text_small">
          {totalPrice} р
        </p>
      </button>
    </div>
  );
}
