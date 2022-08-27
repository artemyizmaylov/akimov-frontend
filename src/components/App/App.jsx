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
import Menu from "../Menu/Menu";
import Filter from "../Filter/Filter";

import { getItems } from "../../utils/api";

function App() {
  const [items, setItems] = useState([]);
  const [filteredItems, setFilteredItems] = useState([]);
  const [lastFilter, setLastFilter] = useState({ id: "", pressCount: 0 });

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

    return total;
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
  };

  const deleteFromCart = (item) => {
    const index = cartItems.findIndex(
      (cartItem) =>
        cartItem.article === item.article &&
        cartItem.size === item.size &&
        cartItem.material === item.material
    );

    if (index > -1) {
      const newItems = [...cartItems];

      newItems.splice(index, 1);
      setCartItems(newItems);
    }
  };

  const search = (id) => {
    switch (id) {
      case "male":
        setFilteredItems(items.filter((item) => item.gender === "m"));
        break;
      case "female":
        setFilteredItems(items.filter((item) => item.gender === "f"));
        break;
      case "cross":
        setFilteredItems(items.filter((item) => item.type === "крест"));
        break;
      case "images":
        setFilteredItems(items.filter((item) => item.type === "образок"));
        break;
      case "rings":
        setFilteredItems(items.filter((item) => item.type === "кольцо"));
        break;
      case "earrings":
        setFilteredItems(items.filter((item) => item.type === "серьги"));
        break;
      case "foldings":
        setFilteredItems(items.filter((item) => item.type === "складень"));
        break;
      case "chains":
        setFilteredItems(items.filter((item) => item.type === "цепь"));
        break;
    }
  };

  const filterItems = (evt) => {
    const { id, classList } = evt.target;

    if (lastFilter.id && id !== lastFilter.id) {
      document
        .querySelector(`#${lastFilter.id}`)
        .classList.remove("menu__link_active");
    }

    classList.toggle("menu__link_active");

    if (lastFilter.id === id) {
      setLastFilter({ id, pressCount: lastFilter.pressCount + 1 });

      if (lastFilter.pressCount % 2 === 1) {
        setFilteredItems(items);
        return;
      }
      search(id);
    } else {
      search(id);
      setLastFilter({ id, pressCount: 1 });
    }
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
    [cartIsOpen, cartItems, totalPrice]
  );

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cartItems));
    setTotalPrice(countTotalPrice());
  }, [cartItems]);

  useEffect(() => {
    getItems().then((data) => {
      localStorage.setItem("items", JSON.stringify(data));
      setItems(data);
      setFilteredItems(data);
    });
  }, []);

  return (
    <div className="App">
      <WindowContext.Provider value={windowWidth}>
        <CartContext.Provider value={cartContext}>
          <Routes>
            <Route exact path="/" element={<Main />} />
            <Route
              path="/catalogue"
              element={<Catalogue items={filteredItems} />}
            />
            <Route path="/contacts" element={<Contacts />} />
            <Route path="/about-collection" element={<About />} />
            <Route path="/details/:article" element={<Details />} />
          </Routes>

          <Menu>
            <Filter handle={filterItems} />
          </Menu>
          <CartPopup />
        </CartContext.Provider>
      </WindowContext.Provider>
    </div>
  );
}

export default App;
