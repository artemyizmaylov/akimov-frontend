import "./App.css";
import { Routes, Route, useLocation } from "react-router-dom";
import { lazy, React, Suspense, useEffect, useState } from "react";

import CartContext, { useCart } from "../../context/CartContext";
import WindowContext from "../../context/WindowContext";

const Main = lazy(() => import("../Main/Main"));
const Menu = lazy(() => import("../Menu/Menu"));
const About = lazy(() => import("../About/About"));
const Contacts = lazy(() => import("../Contacts/Contacts"));
const Catalogue = lazy(() => import("../Catalogue/Catalogue"));
const CartPopup = lazy(() => import("../CartPopup/CartPopup"));
const Details = lazy(() => import("../Details/Details"));
const Filter = lazy(() => import("../Filter/Filter"));

import LoadScreen from "../LoadScreen/LoadScreen";
import useWindowWidth from "../../hooks/useWindowWidth";

import { getItems } from "../../utils/api";

function App() {
  const [items, setItems] = useState([]);
  const [filteredItems, setFilteredItems] = useState([]);
  const [lastFilter, setLastFilter] = useState({ id: "", pressCount: 0 });
  const [savedSlide, setSavedSlide] = useState(0);
  const [isLoading, setIsLoading] = useState(false);

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
    setIsLoading(true);

    getItems().then((data) => {
      localStorage.setItem("items", JSON.stringify(data));
      setItems(data);
      setFilteredItems(data);
    });

    if (!sessionStorage.getItem("savedSlide")) {
      sessionStorage.setItem("savedSlide", 0);
    }

    setSavedSlide(sessionStorage.getItem("savedSlide"));

    window.addEventListener("load", () => {
      setTimeout(() => setIsLoading(false), 1000);
    });
  }, []);

  return (
    <div className="App animate-bg">
      <LoadScreen isLoading={isLoading} />
      <WindowContext.Provider value={windowWidth}>
        <CartContext.Provider value={cart}>
          <Suspense>
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
          </Suspense>
        </CartContext.Provider>
      </WindowContext.Provider>
    </div>
  );
}

export default App;
