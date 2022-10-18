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
  const [lastFilter, setLastFilter] = useState({ id: "", pressCount: 0 });
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

    if (windowWidth < breakpoint) {
      setMenuHidden(true);
    }

    setTimeout(() => {
      setSavedSlide(0);
      window.scrollTo(0, 0);
    }, 0);

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
                  <Filter handle={filterItems} />
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
