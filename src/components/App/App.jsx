import "./App.css";
import { lazy, React, Suspense, useEffect, useMemo, useState } from "react";
import {
  Routes,
  Route,
  useLocation,
  useNavigate,
  Navigate,
} from "react-router-dom";
import { useTransition, animated } from "react-spring";

import CartContext, { useCart } from "../../context/CartContext";
import WindowContext from "../../context/WindowContext";
import MenuContext from "../../context/MenuContext";
import { getItems } from "../../utils/api";
import useWindowWidth from "../../hooks/useWindowWidth";

import Main from "../Main/Main";
import Menu from "../Menu/Menu";
import About from "../About/About";
import Catalogue from "../Catalogue/Catalogue";
import Details from "../Details/Details";
import Filter from "../Filter/Filter";
import LoadScreen from "../LoadScreen/LoadScreen";

const Page404 = lazy(() => import("../Page404/Page404"));
const CartPopup = lazy(() => import("../CartPopup/CartPopup"));

function App() {
  const [items, setItems] = useState([]);
  const [filteredItems, setFilteredItems] = useState([]);
  const [savedSlide, setSavedSlide] = useState(0);
  const [isLoading, setIsLoading] = useState(false);
  const [menuHidden, setMenuHidden] = useState(true);

  const cart = useCart();
  const windowWidth = useWindowWidth();
  const location = useLocation();
  const navigate = useNavigate();

  const tansition = useTransition(location, {
    from: { opacity: 0 },
    to: { opacity: 1 },
    enter: { opacity: 1 },
  });

  const menu = useMemo(() => {
    return [menuHidden, setMenuHidden];
  }, [menuHidden]);

  function searchAnimation() {
    setTimeout(() => {
      sessionStorage.setItem("latestItemsPos", 0);
      setSavedSlide(0);
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
    if (location.pathname !== "/catalogue") navigate("/catalogue");

    const { who, category } = evt.target.closest("form");
    const gender = Array.from(who.elements).find((e) => e.checked);
    const type = Array.from(category.elements).find((e) => e.checked);

    search(gender, type);
    searchAnimation();
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
              {tansition((props, item) => {
                return (
                  <animated.div style={{ ...props, height: "100%" }}>
                    <Routes location={item}>
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
                      <Route path="/about-collection" element={<About />} />
                      <Route path="/details/:article" element={<Details />} />
                      <Route path="/404" element={<Page404 />} />
                      <Route
                        path="*"
                        element={<Navigate to="/404" replace />}
                      />
                    </Routes>
                  </animated.div>
                );
              })}
              <CartPopup />
            </Suspense>
          </MenuContext.Provider>
        </CartContext.Provider>
      </WindowContext.Provider>
    </div>
  );
}

export default App;
