import "./Filter.css";
import { useEffect, useRef, React } from "react";
import gsap from "gsap";
import { useNavigate } from "react-router-dom";

export default function Filter({
  handleFilter,
  whoActive,
  categoryActive,
  setWhoActive,
  setCategoryActive,
}) {
  const who = useRef();
  const whoButton = useRef();
  const category = useRef();
  const categoryButton = useRef();

  const navigate = useNavigate();

  const ease = "inOut";

  const handleClick = (evt) => {
    evt.preventDefault();

    setTimeout(() => {
      evt.target.checked = !evt.target.checked;
      handleFilter(evt.target.closest("form"));
    }, 0);

    if (location.pathname !== "/catalogue") navigate("/catalogue");
  };

  useEffect(() => {
    if (whoActive) {
      gsap.to(who.current, {
        height: 202,
        display: "block",
        ease,
      });
      gsap.to(whoButton.current, {
        transform: "rotate(45deg)",
      });
    } else {
      gsap.to(who.current, {
        height: 0,
        display: "none",
        ease,
      });
      gsap.to(whoButton.current, {
        transform: "rotate(0)",
      });

      const form = document.forms.filter;
      const inputs = Array.from(form.who.elements);

      inputs.map((input) => (input.checked = false));
      handleFilter(form);
    }
  }, [whoActive]);

  useEffect(() => {
    if (categoryActive) {
      gsap.to(category.current, {
        height: 310,
        display: "block",
        ease,
      });
      gsap.to(categoryButton.current, {
        transform: "rotate(45deg)",
      });
    } else {
      gsap.to(category.current, {
        height: 0,
        display: "none",
        ease,
      });
      gsap.to(categoryButton.current, {
        transform: "rotate(0)",
      });

      const form = document.forms.filter;
      const inputs = Array.from(form.category.elements);

      inputs.map((input) => (input.checked = false));
      handleFilter(form);
    }
  }, [categoryActive]);

  return (
    <form name="filter" id="filter">
      <li className="menu__item" onClick={() => setWhoActive(!whoActive)}>
        <button
          className={`menu__link ${whoActive && "menu__link_active"}`}
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
          ref={whoButton}
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M22.8363 13.1021H12.6485V23.2899H10.3846V13.1021H0.196812V10.8382H10.3846V0.650391H12.6485V10.8382H22.8363V13.1021Z"
            fill={whoActive ? "white" : "var(--gold)"}
          />
        </svg>
      </li>
      <li form="filter" className="menu__filter" ref={who}>
        <fieldset className="menu__filter-container" id="who">
          <input
            className="filter__input"
            id="male"
            name="gender"
            value="m"
            type="radio"
            form="filter"
            onClick={handleClick}
          />
          <label className="menu__item menu__link" htmlFor="male">
            Мужчина
          </label>
          <input
            className="filter__input"
            id="female"
            name="gender"
            value="f"
            type="radio"
            form="filter"
            onClick={handleClick}
          />
          <label className="menu__item menu__link" htmlFor="female">
            Женщина
          </label>
          <input
            className="filter__input"
            id="boy"
            name="gender"
            value="m child"
            type="radio"
            form="filter"
            onClick={handleClick}
          ></input>
          <label className="menu__item menu__link" htmlFor="boy">
            Мальчик
          </label>
          <input
            className="filter__input"
            id="girl"
            name="gender"
            value="f child"
            type="radio"
            form="filter"
            onClick={handleClick}
          ></input>
          <label className="menu__item menu__link" htmlFor="girl">
            Девочка
          </label>
        </fieldset>
      </li>
      <li
        className="menu__item"
        onClick={() => setCategoryActive(!categoryActive)}
      >
        <button
          className={`menu__link ${categoryActive && "menu__link_active"}`}
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
          ref={categoryButton}
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
        <fieldset className="menu__filter-container" id="category">
          <input
            className="filter__input"
            id="cross"
            name="type"
            value="крест"
            type="radio"
            form="filter"
            onClick={handleClick}
          />
          <label className="menu__item menu__link" htmlFor="cross">
            Кресты
          </label>
          <input
            className="filter__input"
            id="images"
            name="type"
            value="образок"
            type="radio"
            form="filter"
            onClick={handleClick}
          />
          <label className="menu__item menu__link" htmlFor="images">
            Образки
          </label>

          <input
            className="filter__input"
            id="rings"
            name="type"
            value="кольцо"
            type="radio"
            form="filter"
            onClick={handleClick}
          />
          <label className="menu__item menu__link" htmlFor="rings">
            Кольца
          </label>
          <input
            className="filter__input"
            id="earrings"
            name="type"
            value="серьги"
            type="radio"
            form="filter"
            onClick={handleClick}
          />
          <label className="menu__item menu__link" htmlFor="earrings">
            Серьги
          </label>
          <input
            className="filter__input"
            id="foldings"
            name="type"
            value="складень"
            type="radio"
            form="filter"
            onClick={handleClick}
          />
          <label className="menu__item menu__link" htmlFor="foldings">
            Складни
          </label>
          <input
            className="filter__input"
            id="chains"
            name="type"
            value="цепь"
            type="radio"
            form="filter"
            onClick={handleClick}
          />
          <label className="menu__item menu__link" htmlFor="chains">
            Цепи
          </label>
        </fieldset>
      </li>
    </form>
  );
}
