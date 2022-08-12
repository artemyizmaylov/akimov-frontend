import './Menu.css';
import { Link, useLocation } from 'react-router-dom';
import {
  memo, useEffect, useRef, useState, React,
} from 'react';
import { gsap } from 'gsap';
import logo from '../../images/logo-gold.svg';
import sparkGold from '../../images/spark-gold.svg';
import sparkWhite from '../../images/spark-white.svg';
import Filter from './Filter/Filter';
import useWindowWidth from '../../hooks/useWindowWidth';

const Menu = memo(() => {
  const windowWidth = useWindowWidth();
  const menu = useRef();
  const location = useLocation();
  const [hidden, setHidden] = useState(!(window.innerWidth >= 1024));

  const switchMenu = () => {
    setHidden(!hidden);
  };

  useEffect(() => {
    const settings = {
      translate: '0',
      ease: 'back.inOut',
      duration: 1.3,
    };

    if (windowWidth >= 1024) {
      setHidden(false);
    }

    if (hidden) {
      settings.translate = '-100%';
    } else {
      settings.translate = '0';
    }

    gsap.to(menu.current, settings);
  }, [hidden, windowWidth]);

  return (
    <nav className="menu" ref={menu}>
      <img className="menu__logo" src={logo} alt="Логотип" />
      <ul className="menu__items">
        <li className="menu__item">
          <Link
            className={`menu__link ${
              location.pathname === '/catalogue' && 'menu__link_active'
            }`}
            to="/catalogue"
            onClick={switchMenu}
          >
            Каталог
          </Link>
          <img
            src={location.pathname === '/catalogue' ? sparkWhite : sparkGold}
            alt=""
          />
        </li>

        {location.pathname === '/catalogue' && <Filter />}

        <li className="menu__item">
          <Link
            className={`menu__link ${
              location.pathname === '/about' && 'menu__link_active'
            }`}
            to="/about"
            onClick={switchMenu}
          >
            О коллекции
          </Link>
          <img
            src={location.pathname === '/about' ? sparkWhite : sparkGold}
            alt=""
          />
        </li>
        <li className="menu__item">
          <Link
            className={`menu__link ${
              location.pathname === '/contacts' && 'menu__link_active'
            }`}
            to="/contacts"
            onClick={switchMenu}
          >
            Контакты
          </Link>
          <img
            src={location.pathname === '/contacts' ? sparkWhite : sparkGold}
            alt=""
          />
        </li>
      </ul>
      <button className="menu__slider" type="button" onClick={switchMenu} aria-label="Открыть" />
    </nav>
  );
});

export default Menu;
