import React from "react";
import "./Menu.css";
import { Link, useLocation } from "react-router-dom";
import logo from "../../images/logo-gold.svg";
import sparkGold from "../../images/spark-gold.svg";
import sparkWhite from "../../images/spark-white.svg";

export default function Menu({ children }) {
  const { pathname } = useLocation();

  return (
    <nav className="menu">
      <img className="menu__logo" src={logo} alt="Логотип" />
      <ul className="menu__items">
        <li className="menu__item">
          <Link
            className={`menu__link ${
              pathname === "/catalogue" && "menu__link_active"
            }`}
            to="/catalogue"
          >
            Каталог
          </Link>
          <img
            src={pathname === "/catalogue" ? sparkWhite : sparkGold}
            alt=""
          />
        </li>

        {pathname === "/catalogue" ? children : null}

        <li className="menu__item">
          <Link
            className={`menu__link ${
              pathname === "/about-collection" && "menu__link_active"
            }`}
            to="/about-collection"
          >
            О коллекции
          </Link>
          <img
            src={pathname === "/about-collection" ? sparkWhite : sparkGold}
            alt=""
          />
        </li>

        <li className="menu__item">
          <Link
            className={`menu__link ${
              pathname === "/contacts" && "menu__link_active"
            }`}
            to="/contacts"
          >
            Контакты
          </Link>
          <img src={pathname === "/contacts" ? sparkWhite : sparkGold} alt="" />
        </li>
      </ul>
    </nav>
  );
}
