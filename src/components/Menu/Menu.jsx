import "./Menu.css";
import { Link, useLocation } from "react-router-dom";
import { useEffect, useRef, useState, React, useContext } from "react";
import { gsap } from "gsap";
import logo from "../../images/logo-gold.svg";
import sparkGold from "../../images/spark-gold.svg";
import sparkWhite from "../../images/spark-white.svg";
import WindowContext from "../../context/WindowContext";

export default function Menu({ children }) {
  const windowWidth = useContext(WindowContext);
  const menu = useRef();
  const location = useLocation();
  const [hidden, setHidden] = useState(true);
  const breakpoint = 1024;

  const switchMenu = () => {
    if (windowWidth < breakpoint) {
      setHidden(!hidden);
    }
  };

  useEffect(() => {
    const settings = {
      transform: "translateX(0)",
      ease: "back.inOut",
      duration: 1.3,
    };

    if (hidden) {
      settings.transform = "translateX(-100%)";
    } else {
      settings.transform = "translateX(0)";
    }

    gsap.to(menu.current, settings);
  }, [hidden]);

  useEffect(() => {
    if (windowWidth >= breakpoint) {
      setHidden(false);
    } else {
      setHidden(true);
    }
  }, [windowWidth]);

  return (
    <nav className="menu" ref={menu}>
      <img className="menu__logo" src={logo} alt="Логотип" />
      <ul className="menu__items">
        <li className="menu__item">
          <Link
            className={`menu__link ${
              location.pathname === "/catalogue" && "menu__link_active"
            }`}
            to="/catalogue"
            onClick={switchMenu}
          >
            Каталог
          </Link>
          <img
            src={location.pathname === "/catalogue" ? sparkWhite : sparkGold}
            alt=""
          />
        </li>

        {children}

        <li className="menu__item">
          <Link
            className={`menu__link ${
              location.pathname === "/about-collection" && "menu__link_active"
            }`}
            to="/about-collection"
            onClick={switchMenu}
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
            onClick={switchMenu}
          >
            Контакты
          </Link>
          <img
            src={location.pathname === "/contacts" ? sparkWhite : sparkGold}
            alt=""
          />
        </li>
      </ul>
      <button
        className="menu__slider"
        type="button"
        onClick={switchMenu}
        aria-label="Открыть"
      />
    </nav>
  );
}
