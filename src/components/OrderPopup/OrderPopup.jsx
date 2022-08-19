import { useRef, React, useState, useContext } from "react";
import CartContext from "../../context/CartContext";
import ConfirmOrderPopup from "../ConfirmOrderPopup/ConfirmOrderPopup";
import "./OrderPopup.css";
import WindowContext from "../../context/WindowContext";
import { sendOrder } from "../../utils/api";

export default function OrderPopup({ isOpen, switchPopup }) {
  const popup = useRef();
  const windowWidth = useContext(WindowContext);
  const breakpoint = 1024;
  const [confirmOrderOpened, setConfirmOrderOpened] = useState(false);
  const { totalPrice, cartItems } = useContext(CartContext);

  const handleSwitchPopup = () => {
    switchPopup();
  };

  const hadleSubmit = (evt) => {
    evt.preventDefault();
    setConfirmOrderOpened(true);
    document
      .querySelector(".order-popup")
      .classList.add("order-popup_fullscreen");

    const bill = {
      customer: {
        name: evt.target.name.value,
        email: evt.target.email.value,
        number: evt.target.number.value,
        order_text: evt.target.wishes.value,
      },
      order: cartItems,
    };

    sendOrder(bill);
  };

  return (
    <div
      className={`order-popup ${isOpen && "order-popup_opened"}`}
      ref={popup}
    >
      {isOpen && (
        <button
          className="order-popup__close-button"
          type="button"
          onClick={handleSwitchPopup}
          aria-label="Закрыть"
        />
      )}
      {windowWidth >= breakpoint ? (
        <p className="order-button__policy-agreement">
          Продолжая, вы соглашаетесь на обработку персональных данных в
          соответсвии
          <br />с{" "}
          <span className="order-popup__span-text">
            политикой конфиденциальности
          </span>
        </p>
      ) : (
        <button
          className="order-popup__price-button"
          onClick={handleSwitchPopup}
          type="button"
        >
          <p className="order-popup__price">{`${totalPrice} р`}</p>
          <h3 className="order-popup__text">Оформить заказ</h3>
        </button>
      )}

      <form
        className="order-popup__form"
        name="order"
        onSubmit={hadleSubmit}
        method="POST"
      >
        <input
          className="order-popup__input"
          name="name"
          type="text"
          placeholder="Как вас зовут"
          min={2}
          max={30}
          // required
        />
        <input
          className="order-popup__input"
          name="number"
          type="tel"
          placeholder="Телефон"
          // required
        />
        <input
          className="order-popup__input"
          name="email"
          type="email"
          placeholder="Почта"
          // required
        />
        <textarea
          className="order-popup__input order-popup__input_type_textarea"
          name="wishes"
          placeholder="Здесь вы можете оставить свои пожелания к заказу"
        />
        <button className="order-popup__confirm-button" type="submit">
          Оставить
          <br />
          заявку
        </button>
      </form>
      <ConfirmOrderPopup isOpen={confirmOrderOpened} />
    </div>
  );
}
