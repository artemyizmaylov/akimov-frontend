import { React, useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import CartContext from "../../../context/CartContext";
import "./CartItem.css";
import ConfirmDelete from "./ConfirmDelete/ConfirmDelete";

export default function CartItem({ item }) {
  const {
    increaseItemCount,
    decreaseItemCount,
    deleteFromCart,
    setCartIsOpen,
    cartItems,
  } = useContext(CartContext);
  const [popupOpened, setPopupOpened] = useState(false);
  const nav = useNavigate();

  const closePopup = () => {
    setPopupOpened(false);
  };

  const confirmDelete = () => {
    if (cartItems.length === 1) {
      setCartIsOpen(false);
    }

    deleteFromCart(item);
  };

  const increaseCount = () => {
    increaseItemCount(item);
  };

  const decreaseCount = () => {
    if (item.count === 1) {
      setPopupOpened(true);
    } else {
      decreaseItemCount(item);
    }
  };

  return (
    <li className="cart-item">
      <div className="cart-item__description">
        <p className="cart-item__text">{item.type}</p>
        <p className="cart-item__text">{item.name}</p>

        <p className="cart-item__text">
          {item.material === "gold" ? "золото 585" : "серебро 925"}
        </p>
        <p className="cart-item__text">{item.gems}</p>
        <p className="cart-item__text">{`${item.size} мм`}</p>
        <p className="cart-item__text">{`${item.weight} гр`}</p>
      </div>

      <img
        className="cart-item__image"
        src={`/items/${item.article}_${item.material}.webp`}
        alt={item.name}
        onClick={() => {
          nav(`details/${item.article}`);
          setCartIsOpen(false);
        }}
      />

      <div className="cart-item__counter">
        <div className="counter">
          <div className="counter__elements">
            <button
              className="counter__element counter__button"
              onClick={decreaseCount}
              type="button"
            >
              -
            </button>
            <p className="counter__element">{item.count}</p>
            <button
              className="counter__element counter__button"
              onClick={increaseCount}
              type="button"
            >
              +
            </button>
          </div>
          <p className="counter__total">{`${item.price.split('').filter(i => i !== ' ').join('') * item.count} р`}</p>
        </div>
      </div>
      <ConfirmDelete
        isOpen={popupOpened}
        handleClose={closePopup}
        handleDelete={confirmDelete}
      />
    </li>
  );
}
