import "./ConfirmOrderPopup.css";
import React from "react";
import { Link } from "react-router-dom";

export default function ConfirmOrderPopup({ isOpen }) {
  const onButtonClick = () => {
    location.reload();
  };

  return (
    <div
      className={`confirm-order-popup ${
        isOpen && "confirm-order-popup_opened"
      }`}
    >
      <div className="#" />
      <p className="confirm-order-popup__text">
        Заказ
        <br />
        оформлен
      </p>
      <div className="confirm-order-popup__checkmark" />
      <p className="confirm-order-popup__message">
        В ближайшее время с вами свяжется наш менеджер. Спасибо за заказ!
      </p>
      <button
        type="button"
        className="confirm-order-popup__button"
        onClick={onButtonClick}
      >
        <Link className="confirm-order-popup__button-text" to="/catalogue">
          в икОнОтеку
        </Link>
        <div className="confirm-order-popup__button-image" />
      </button>
    </div>
  );
}
