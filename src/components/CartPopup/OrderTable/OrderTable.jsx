import React from 'react';
import './OrderTable.css';

export default function OrderTable({ handleButtonClick }) {
  return (
    <div className="order-table">
      <button className="order-table__order-button" type="button" onClick={handleButtonClick}>
        <p className="order-table__text order-table__text_big">Оформить заказ</p>
        <p className="order-table__text order-table__text_small">2 450 000 р</p>
      </button>
    </div>
  );
}
