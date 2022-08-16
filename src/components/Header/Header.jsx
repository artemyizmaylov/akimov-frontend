import React, { useContext, useEffect, useState } from "react";
import CartContext from "../../context/CartContext";
import "./Header.css";

export default function Header({ text, subtext, buttonHandler, buttonImage }) {
  const { cartItems, setCartIsOpen } = useContext(CartContext);
  const [counter, setCounter] = useState(0);

  const openCartPopup = () => {
    setCartIsOpen(true);
  };

  useEffect(() => {
    let count = 0;

    cartItems.forEach((item) => {
      count = item.count + count;
    });

    setCounter(count);
  }, [cartItems]);

  return (
    <header className="header">
      <button className="header__question header__button" type="button">
        ?
      </button>
      <div className="header__text-container">
        <p className="header__subtext">{subtext}</p>
        <p className="header__text">{text}</p>
      </div>
      <button
        className="header__button"
        onClick={buttonHandler || openCartPopup}
        type="button"
      >
        {buttonImage ? (
          <img className="header__button-image" src={buttonImage} alt="" />
        ) : (
          <div className="header__cart">
            <p className="header__cart-counter">{counter}</p>
          </div>
        )}
      </button>
    </header>
  );
}
