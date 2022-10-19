import "./App.css";
import {
  Routes,
  Route,
  useLocation,
  useNavigate,
  Navigate,
} from "react-router-dom";
import { lazy, React, Suspense, useEffect, useMemo, useState } from "react";

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
import MenuContext from "../../context/MenuContext";
import Page404 from "../Page404/Page404";

function App() {
  const [items, setItems] = useState([]);
  const [filteredItems, setFilteredItems] = useState([]);

  const [savedSlide, setSavedSlide] = useState(0);
  const [isLoading, setIsLoading] = useState(false);
  const breakpoint = 1024;

  const cart = useCart();
  const windowWidth = useWindowWidth();
  const location = useLocation();
  const navigate = useNavigate();

  const [menuHidden, setMenuHidden] = useState(true);
  const menu = useMemo(() => {
    return [menuHidden, setMenuHidden];
  }, [menuHidden]);

  function searchAnimation() {
    setTimeout(() => {
      const scrollPage = document.querySelector(".catalogue__items");
      scrollPage && scrollPage.scrollTo(0, 0);

      setSavedSlide(0);

      if (windowWidth < breakpoint) {
        setMenuHidden(true);
      }
    }, 0);
  }

  function search(gender, type) {
    let newFilteredItems = [...items];

    if (gender) {
      newFilteredItems = newFilteredItems.filter((item) =>
        gender.value.length < 2
          ? item.gender === gender.value || item.gender === "both"
          : item.gender === gender.value
      );
    }

    if (type) {
      newFilteredItems = newFilteredItems.filter(
        (item) => item.type === type.value
      );
    }

    setFilteredItems(newFilteredItems);
  }

  const filterItems = (evt) => {
    searchAnimation();

    const { who, category } = evt.target.closest("form");

    const gender = Array.from(who.elements).find((e) => e.checked);
    const type = Array.from(category.elements).find((e) => e.checked);

    search(gender, type);
    navigate("/catalogue");
  };

  const showLoadScreen = () => {
    setIsLoading(true);

    if (document.readyState === "complete") {
      setIsLoading(false);
    } else {
      window.addEventListener("load", hideLoadScreen);
    }
  };

  const hideLoadScreen = () => {
    setTimeout(() => {
      setIsLoading(false);
      window.removeEventListener("load", hideLoadScreen);
    }, 1000);
  };

  useEffect(() => {
    showLoadScreen();
  }, [location]);

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart.cartItems));
    cart.setTotalPrice(cart.countTotalPrice());
  }, [cart.cartItems]);

  useEffect(() => {
    showLoadScreen();

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
    <div className="App animate-bg">
      <LoadScreen isLoading={isLoading} />
      <WindowContext.Provider value={windowWidth}>
        <CartContext.Provider value={cart}>
          <MenuContext.Provider value={menu}>
            <Suspense>
              {location.pathname !== "/" && location.pathname !== "/404" && (
                <Menu>
                  <Filter handleFilter={filterItems} />
                </Menu>
              )}
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
                <Route path="/404" element={<Page404 />} />

                <Route path="*" element={<Navigate to="/404" replace />} />
              </Routes>
              <CartPopup />
            </Suspense>
          </MenuContext.Provider>
        </CartContext.Provider>
      </WindowContext.Provider>
    </div>
  );
}

export default App;
