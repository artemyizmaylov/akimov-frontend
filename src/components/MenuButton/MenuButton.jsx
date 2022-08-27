import React, { useRef } from "react";
import { useState, useContext, useEffect } from "react";
import { gsap } from "gsap";
import WindowContext from "../../context/WindowContext";

import "./MenuButton.css";

export default function MenuButton() {
  const [hidden, setHidden] = useState(true);
  const windowWidth = useContext(WindowContext);
  const breakpoint = 1024;
  const button = useRef(null);

  const switchMenu = () => {
    if (windowWidth < breakpoint) {
      setHidden(!hidden);
    }
  };

  useEffect(() => {
    const settings = {
      transform: "translateX(0)",
      display: "flex",
      ease: "back.inOut",
      duration: 0.9,
    };

    if (hidden) {
      settings.transform = "translateX(-100%)";
      settings.display = "none";
    } else {
      settings.transform = "translateX(0)";
      settings.display = "flex";
    }

    gsap.to(".menu", settings);
  }, [hidden]);

  useEffect(() => {
    if (windowWidth >= breakpoint) {
      setHidden(false);
      button.current.classList.add("menu-button_hidden");
    } else {
      setHidden(true);
      button.current.classList.remove("menu-button_hidden");
    }
  }, [windowWidth]);

  return (
    <button
      ref={button}
      className="menu-button header__button"
      type="button"
      onClick={switchMenu}
    >
      &equiv;
    </button>
  );
}
