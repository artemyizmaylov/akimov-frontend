import React, { useContext, useEffect, useState } from "react";
import CartContext from "../../context/CartContext";
import MenuButton from "../MenuButton/MenuButton";
import BackwardButton from "../BackwardButton/BackwardButton";
import "./Header.css";
import WindowContext from "../../context/WindowContext";

export default function Header({
  text,
  subtext,
  buttonHandler,
  buttonImage,
  withMenuButton,
}) {
  const { cartItems, setCartIsOpen } = useContext(CartContext);
  const [counter, setCounter] = useState(0);
  const windowWidth = useContext(WindowContext);
  const [button, setButton] = useState(
    windowWidth < 1024 ? <MenuButton /> : <BackwardButton />
  );

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

  useEffect(() => {
    setButton(windowWidth < 1024 ? <MenuButton /> : <BackwardButton />);
  }, [windowWidth]);

  return (
    <header className="header">
      {withMenuButton ? button : null}
      <div className="header__text-container">
        <p className="header__subtext">{subtext}</p>
        {text && (
          <p
            className={`header__text ${
              text.length > 15 ? "header__text_small" : ""
            }`}
          >
            {text}
          </p>
        )}
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
