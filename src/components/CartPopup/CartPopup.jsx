import { React, useContext, useEffect, useRef, useState } from "react";
import gsap from "gsap";
import CartContext from "../../context/CartContext";
import Header from "../Header/Header";
import "./CartPopup.css";
import Item from "./CartItem/CartItem";
import OrderPopup from "../OrderPopup/OrderPopup";
import closeButton from "../../images/close-gold.svg";
import OrderTable from "./OrderTable/OrderTable";

export default function CartPopup() {
  const { cartIsOpen, setCartIsOpen, cartItems } = useContext(CartContext);
  const popup = useRef(null);
  const [isOrderPopupOpened, setIsOrderPopupOpened] = useState(false);

  const handleClosePopup = () => {
    setCartIsOpen(false);
  };

  const switchOrderPopup = () => {
    setIsOrderPopupOpened(!isOrderPopupOpened);
  };

  useEffect(() => {
    if (cartIsOpen) {
      gsap.to(popup.current, {
        opacity: 1,
        display: "block",
      });
    } else {
      gsap.to(popup.current, {
        opacity: 0,
        display: "none",
      });
    }

    setIsOrderPopupOpened(false);
  }, [cartIsOpen]);

  return (
    <div
      className="cart-popup animate-bg"
      ref={popup}
      onScroll={(evt) => evt.stopPropagation()}
    >
      <Header
        buttonImage={closeButton}
        buttonHandler={handleClosePopup}
        text="коРЗИНА"
      />
      <ul className="cart-popup__items">
        {cartItems.map((item) => (
          <Item key={item.article + item.material + item.size} item={item} />
        ))}
      </ul>
      <OrderTable handleButtonClick={switchOrderPopup} />
      <OrderPopup isOpen={isOrderPopupOpened} switchPopup={switchOrderPopup} />
    </div>
  );
}
