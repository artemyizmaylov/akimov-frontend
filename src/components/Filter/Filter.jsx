import "./Filter.css";
import { useState, useEffect, useRef, React } from "react";
import gsap from "gsap";

export default function Filter({ handle }) {
  const who = useRef();
  const category = useRef();
  const [whoActive, setwhoActive] = useState(false);
  const [categoryActive, setCategoryActive] = useState(false);

  const ease = "inOut";

  useEffect(() => {
    if (whoActive) {
      gsap.to(who.current, {
        height: 101,
        display: "block",
        ease,
      });
    } else {
      gsap.to(who.current, {
        height: 0,
        display: "none",
        ease,
      });
    }
  }, [whoActive]);

  useEffect(() => {
    if (categoryActive) {
      gsap.to(category.current, {
        height: 310,
        display: "block",
        ease,
      });
    } else {
      gsap.to(category.current, {
        height: 0,
        display: "none",
        ease,
      });
    }
  }, [categoryActive]);

  return (
    <>
      <li className="menu__item">
        <button
          className={`menu__link ${whoActive && "menu__link_active"}`}
          onClick={() => setwhoActive(!whoActive)}
          type="button"
        >
          Для кого
        </button>
        <svg
          className="plus"
          width="23"
          height="24"
          viewBox="0 0 23 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M22.8363 13.1021H12.6485V23.2899H10.3846V13.1021H0.196812V10.8382H10.3846V0.650391H12.6485V10.8382H22.8363V13.1021Z"
            fill={whoActive ? "white" : "var(--gold)"}
          />
        </svg>
      </li>
      <li className="menu__filter" ref={who}>
        <ul className="menu__filter-container">
          <button
            className="menu__item menu__link"
            id="male"
            type="button"
            onClick={handle}
          >
            Мужчина
          </button>
          <button
            className="menu__item menu__link"
            id="female"
            type="button"
            onClick={handle}
          >
            Женщина
          </button>
        </ul>
      </li>
      <li className="menu__item">
        <button
          className={`menu__link ${categoryActive && "menu__link_active"}`}
          onClick={() => setCategoryActive(!categoryActive)}
          type="button"
        >
          Категория
        </button>
        <svg
          className="plus"
          width="23"
          height="24"
          viewBox="0 0 23 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M22.8363 13.1021H12.6485V23.2899H10.3846V13.1021H0.196812V10.8382H10.3846V0.650391H12.6485V10.8382H22.8363V13.1021Z"
            fill={categoryActive ? "white" : "var(--gold)"}
          />
        </svg>
      </li>
      <li className="menu__filter" ref={category}>
        <ul className="menu__filter-container">
          <button
            className="menu__item menu__link"
            id="cross"
            type="button"
            onClick={handle}
          >
            Кресты
          </button>
          <button
            className="menu__item menu__link"
            id="images"
            type="button"
            onClick={handle}
          >
            Образки
          </button>
          <button
            className="menu__item menu__link"
            id="rings"
            type="button"
            onClick={handle}
          >
            Кольца
          </button>
          <button
            className="menu__item menu__link"
            id="earrings"
            type="button"
            onClick={handle}
          >
            Серьги
          </button>
          <button
            className="menu__item menu__link"
            id="foldings"
            type="button"
            onClick={handle}
          >
            Складни
          </button>
          <button
            className="menu__item menu__link"
            id="chains"
            type="button"
            onClick={handle}
          >
            Цепи
          </button>
        </ul>
      </li>
    </>
  );
}
