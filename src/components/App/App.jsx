import "./App.css";
import { Routes, Route, useLocation } from "react-router-dom";
import { React, useEffect, useState } from "react";

import CartContext, { useCart } from "../../context/CartContext";
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
import Cursor from "../Cursor/Cursor";

function App() {
  const [items, setItems] = useState([]);
  const [filteredItems, setFilteredItems] = useState([]);
  const [lastFilter, setLastFilter] = useState({ id: "", pressCount: 0 });
  const [savedSlide, setSavedSlide] = useState(0);

  const cart = useCart();
  const windowWidth = useWindowWidth();
  const { pathname } = useLocation();

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
        setSavedSlide(0);

        return;
      }
      search(id);
    } else {
      search(id);
      setLastFilter({ id, pressCount: 1 });
    }

    setSavedSlide(0);
    window.scrollTo(0, 0);
  };

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart.cartItems));
    cart.setTotalPrice(cart.countTotalPrice());
  }, [cart.cartItems]);

  useEffect(() => {
    getItems().then((data) => {
      localStorage.setItem("items", JSON.stringify(data));
      setItems(data);
      setFilteredItems(data);
    });

    if (!sessionStorage.getItem("savedSlide")) {
      sessionStorage.setItem("savedSlide", 0);
    }

    setSavedSlide(sessionStorage.getItem("savedSlide"));
  }, []);

  return (
    <div className="App">
      <WindowContext.Provider value={windowWidth}>
        <CartContext.Provider value={cart}>
          <Routes>
            <Route exact path="/" element={<Main />} />
            <Route
              path="/catalogue"
              element={
                <Catalogue
                  items={filteredItems}
                  savedSlide={savedSlide}
                  setSavedSlide={setSavedSlide}
                />
              }
            />
            <Route path="/contacts" element={<Contacts />} />
            <Route path="/about-collection" element={<About />} />
            <Route path="/details/:article" element={<Details />} />
          </Routes>

          {pathname === "/" ? null : (
            <Menu>
              <Filter handle={filterItems} />
            </Menu>
          )}
          <CartPopup />
          <Cursor />
        </CartContext.Provider>
      </WindowContext.Provider>
    </div>
  );
}

export default App;
