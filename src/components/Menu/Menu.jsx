import React, { useContext, useEffect, useState } from "react";
import "./Menu.css";
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import gsap from "gsap";
import WindowContext from "../../context/WindowContext";
import logo from "../../images/logo-gold.svg";
import sparkGold from "../../images/spark-gold.svg";
import sparkWhite from "../../images/spark-white.svg";
import CartContext from "../../context/CartContext";
import MenuContext from "../../context/MenuContext";
import Filter from "../Filter/Filter";

export default function Menu({ handleFilter }) {
  const breakpoint = 1024;
  const windowWidth = useContext(WindowContext);
  const [menuHidden, setMenuHidden] = useContext(MenuContext);

  const { pathname } = useLocation();
  const { setCartIsOpen } = useContext(CartContext);
  const nav = useNavigate();

  const [whoActive, setWhoActive] = useState(false);
  const [categoryActive, setCategoryActive] = useState(false);

  const settings = {
    transform: "translateX(0)",
    display: "flex",
    ease: "back.inOut",
    duration: 0.9,
  };

  const activeStyle = {
    color: "white",
  };

  const closeMenu = () => {
    if (windowWidth < breakpoint) {
      setMenuHidden(true);
    }
  };

  const overMenuClick = (e) => {
    if (
      typeof e.target.className === "string" &&
      e.target.className.includes("menu-over")
    ) {
      setMenuHidden(true);
    }
  };

  useEffect(() => {
    if (menuHidden) {
      settings.transform = "translateX(-100%)";
      settings.display = "none";
    } else {
      settings.transform = "translateX(0)";
      settings.display = "flex";
    }

    gsap.to(".menu", settings);
  }, [menuHidden]);

  useEffect(() => {
    if (windowWidth >= breakpoint) {
      setMenuHidden(false);
    } else {
      setMenuHidden(true);
    }
  }, [windowWidth]);

  useEffect(() => {
    document.addEventListener("click", overMenuClick);
    return () => document.removeEventListener("click", overMenuClick);
  }, []);

  return (
    <>
      <nav className="menu animate-bg">
        <img className="menu__logo" src={logo} alt="Логотип" />
        <ul className="menu__items">
          <li className="menu__item" onClick={() => setCartIsOpen(false)}>
            <NavLink
              className="menu__link"
              style={({ isActive }) => (isActive ? activeStyle : undefined)}
              to="catalogue"
              onClick={closeMenu}
            >
              Каталог
            </NavLink>
            <img
              className="menu__item-image"
              src={pathname === "/catalogue" ? sparkWhite : sparkGold}
              alt=""
              onClick={() => {
                nav("/catalogue");
                closeMenu();
              }}
            />
          </li>

          <Filter
            handleFilter={handleFilter}
            whoActive={whoActive}
            categoryActive={categoryActive}
            setWhoActive={setWhoActive}
            setCategoryActive={setCategoryActive}
          />

          <li
            className="menu__item"
            onClick={() => {
              setWhoActive(false);
              setCategoryActive(false);
              setCartIsOpen(false);
              document.forms.filter.reset();
            }}
          >
            <NavLink
              className="menu__link"
              to="about-collection"
              style={({ isActive }) => (isActive ? activeStyle : undefined)}
              onClick={closeMenu}
            >
              О иконотеке
            </NavLink>
            <img
              className="menu__item-image"
              src={pathname === "/about-collection" ? sparkWhite : sparkGold}
              alt=""
              onClick={() => {
                nav("/about-collection");
                closeMenu();
              }}
            />
          </li>
        </ul>
        <div className="menu-over" />
      </nav>
    </>
  );
}
