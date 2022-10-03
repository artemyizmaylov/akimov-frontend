import React, { useContext } from "react";
import "./Menu.css";
import { Link, useLocation, useNavigate } from "react-router-dom";
import logo from "../../images/logo-gold.svg";
import sparkGold from "../../images/spark-gold.svg";
import sparkWhite from "../../images/spark-white.svg";
import CartContext from "../../context/CartContext";

export default function Menu({ children }) {
  const { pathname } = useLocation();
  const { setCartIsOpen } = useContext(CartContext);
  const nav = useNavigate();

  return (
    <nav className="menu animate-bg">
      <img className="menu__logo" src={logo} alt="Логотип" />
      <ul className="menu__items">
        <li className="menu__item" onClick={() => setCartIsOpen(false)}>
          <Link
            className={`menu__link ${
              pathname === "/catalogue" && "menu__link_active"
            }`}
            to="/catalogue"
          >
            Каталог
          </Link>
          <img
            className="menu__item-image"
            src={pathname === "/catalogue" ? sparkWhite : sparkGold}
            alt=""
            onClick={() => nav("/catalogue")}
          />
        </li>

        {pathname === "/catalogue" ? children : null}

        <li className="menu__item" onClick={() => setCartIsOpen(false)}>
          <Link
            className={`menu__link ${
              pathname === "/about-collection" && "menu__link_active"
            }`}
            to="/about-collection"
          >
            О коллекции
          </Link>
          <img
            className="menu__item-image"
            src={pathname === "/about-collection" ? sparkWhite : sparkGold}
            alt=""
            onClick={() => nav("/about-collection")}
          />
        </li>
      </ul>
    </nav>
  );
}
