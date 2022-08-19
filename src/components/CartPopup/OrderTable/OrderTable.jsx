import React, { useContext } from "react";
import CartContext from "../../../context/CartContext";
import "./OrderTable.css";

export default function OrderTable({ handleButtonClick }) {
  const { totalPrice } = useContext(CartContext);
  return (
    <div className="order-table">
      <button
        className="order-table__order-button"
        type="button"
        onClick={handleButtonClick}
      >
        <p className="order-table__text order-table__text_big">
          Оформить заказ
        </p>
        <p className="order-table__text order-table__text_small">
          {totalPrice}
        </p>
      </button>
    </div>
  );
}
