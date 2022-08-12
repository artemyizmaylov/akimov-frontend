import './Filter.css';
import {
  useState, useEffect, useRef, React,
} from 'react';
import gsap from 'gsap';

export default function Filter() {
  const who = useRef();
  const category = useRef();
  const [whoActive, setwhoActive] = useState(false);
  const [categoryActive, setCategoryActive] = useState(false);

  const ease = 'inOut';

  useEffect(() => {
    if (whoActive) {
      gsap.to(who.current, {
        height: 101,
        ease,
      });
    } else {
      gsap.to(who.current, {
        height: 0,
        ease,
      });
    }
  }, [whoActive]);

  useEffect(() => {
    if (categoryActive) {
      gsap.to(category.current, {
        height: 351,
        ease,
      });
    } else {
      gsap.to(category.current, {
        height: 0,
        ease,
      });
    }
  }, [categoryActive]);

  return (
    <>
      <li className="menu__item flex-row">
        <button
          className={`menu__link ${whoActive && 'menu__link_active'}`}
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
            fill={whoActive ? 'white' : 'var(--gold)'}
          />
        </svg>
      </li>
      <li className="menu__filter" ref={who}>
        <ul className="menu__filter-container">
          <p className="menu__item menu__link">Мужчина</p>
          <p className="menu__item menu__link">Женщина</p>
        </ul>
      </li>
      <li className="menu__item flex-row">
        <button
          className={`menu__link ${categoryActive && 'menu__link_active'}`}
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
            fill={categoryActive ? 'white' : 'var(--gold)'}
          />
        </svg>
      </li>
      <li className="menu__filter" ref={category}>
        <ul className="menu__filter-container">
          <p className="menu__item menu__link">Кресты</p>
          <p className="menu__item menu__link">Образки</p>
          <p className="menu__item menu__link">Кольца</p>
          <p className="menu__item menu__link">Браслеты</p>
          <p className="menu__item menu__link">Серьги</p>
          <p className="menu__item menu__link">Складни</p>
          <p className="menu__item menu__link">Цепи</p>
        </ul>
      </li>
    </>
  );
}
