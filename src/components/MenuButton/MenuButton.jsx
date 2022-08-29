import React, { useRef } from "react";
import { useState, useContext, useEffect } from "react";
import { gsap } from "gsap";
import WindowContext from "../../context/WindowContext";

import "./MenuButton.css";

export default function MenuButton() {
  const breakpoint = 1024;
  const button = useRef(null);
  const windowWidth = useContext(WindowContext);

  const [hidden, setHidden] = useState(true);

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
    return () => {
      const settings = {
        transform: "translateX(0)",
        display: "flex",
        ease: "back.inOut",
        duration: 0.9,
      };

      gsap.to(".menu", settings);
    };
  }, []);

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
