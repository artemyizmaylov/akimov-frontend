import React from "react";
import "./Menu.css";
import { Link, useLocation } from "react-router-dom";
import logo from "../../images/logo-gold.svg";
import sparkGold from "../../images/spark-gold.svg";
import sparkWhite from "../../images/spark-white.svg";

export default function Menu({ children }) {
  const location = useLocation();

  return (
    <nav className="menu">
      <img className="menu__logo" src={logo} alt="Логотип" />
      <ul className="menu__items">
        <li className="menu__item">
          <Link
            className={`menu__link ${
              location.pathname === "/catalogue" && "menu__link_active"
            }`}
            to="/catalogue"
          >
            Каталог
          </Link>
          <img
            src={location.pathname === "/catalogue" ? sparkWhite : sparkGold}
            alt=""
          />
        </li>

        {location.pathname === "/catalogue" ? children : null}

        <li className="menu__item">
          <Link
            className={`menu__link ${
              location.pathname === "/about-collection" && "menu__link_active"
            }`}
            to="/about-collection"
          >
            О коллекции
          </Link>
          <img
            src={
              location.pathname === "/about-collection" ? sparkWhite : sparkGold
            }
            alt=""
          />
        </li>

        <li className="menu__item">
          <Link
            className={`menu__link ${
              location.pathname === "/contacts" && "menu__link_active"
            }`}
            to="/contacts"
          >
            Контакты
          </Link>
          <img
            src={location.pathname === "/contacts" ? sparkWhite : sparkGold}
            alt=""
          />
        </li>
      </ul>
    </nav>
  );
}
