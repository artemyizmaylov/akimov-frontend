import "./App.css";
import { Routes, Route } from "react-router-dom";
import { React, useEffect, useMemo, useState } from "react";

import CartContext from "../../context/CartContext";
import WindowContext from "../../context/WindowContext";

import Main from "../Main/Main";
import About from "../About/About";
import Contacts from "../Contacts/Contacts";
import Catalogue from "../Catalogue/Catalogue";
import Details from "../Details/Details";
import CartPopup from "../CartPopup/CartPopup";
import useWindowWidth from "../../hooks/useWindowWidth";

function App() {
  const [cartIsOpen, setCartIsOpen] = useState(false);
  const [cartItems, setCartItems] = useState(
    JSON.parse(localStorage.getItem("cart")) || []
  );
  const [totalPrice, setTotalPrice] = useState(0);
  const windowWidth = useWindowWidth();

  const countTotalPrice = () => {
    let total = 0;

    if (cartItems.length > 0) {
      cartItems.forEach((item) => {
        total += item.price * item.count;
      });
    }

    setTotalPrice(total);
  };

  const increaseItemCount = (item) => {
    const index = cartItems.findIndex(
      (cartItem) =>
        cartItem.article === item.article &&
        cartItem.size === item.size &&
        cartItem.material === item.material
    );
    const newItems = [...cartItems];

    newItems[index].count = item.count + 1;
    setCartItems(newItems);
    countTotalPrice();
  };

  const decreaseItemCount = (item) => {
    const index = cartItems.findIndex(
      (cartItem) =>
        cartItem.article === item.article &&
        cartItem.size === item.size &&
        cartItem.material === item.material
    );

    if (index > -1) {
      const newItems = [...cartItems];

      newItems[index].count = item.count - 1;
      setCartItems(newItems);
      countTotalPrice();
    }
  };

  const addToCart = (item) => {
    const index = cartItems.findIndex(
      (cartItem) =>
        cartItem.article === item.article &&
        cartItem.size === item.size &&
        cartItem.material === item.material
    );

    const itemCopy = { ...item };
    itemCopy.count = 1;

    if (index === -1) {
      setCartItems([...cartItems, itemCopy]);
    } else {
      increaseItemCount(itemCopy);
    }

    countTotalPrice();
  };

  const deleteFromCart = (item) => {
    const index = cartItems.findIndex(
      (cartItem) => cartItem.article === item.article
    );

    if (index > -1) {
      const newItems = [...cartItems];

      newItems.splice(index, 1);
      setCartItems(newItems);
      countTotalPrice();
    }

    countTotalPrice();
  };

  const cartContext = useMemo(
    () => ({
      cartIsOpen,
      setCartIsOpen,
      cartItems,
      setCartItems,
      addToCart,
      increaseItemCount,
      decreaseItemCount,
      deleteFromCart,
      totalPrice,
    }),
    [cartIsOpen, cartItems]
  );

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cartItems));
    countTotalPrice();
  }, [cartItems]);

  return (
    <div className="App">
      <WindowContext.Provider value={windowWidth}>
        <CartContext.Provider value={cartContext}>
          <Routes>
            <Route exact path="/" element={<Main />} />
            <Route path="/catalogue" element={<Catalogue />} />
            <Route path="/contacts" element={<Contacts />} />
            <Route path="/about" element={<About />} />
            <Route path="/details/:article" element={<Details />} />
          </Routes>
          <CartPopup />
        </CartContext.Provider>
      </WindowContext.Provider>
    </div>
  );
}

export default App;
