import React, { useContext, useRef } from "react";
import MenuContext from "../../context/MenuContext";
// import { useState, useContext, useEffect } from "react";
// import { gsap } from "gsap";
// import WindowContext from "../../context/WindowContext";

import "./MenuButton.css";

export default function MenuButton() {
  const button = useRef(null);
  const [menuHidden, setMenuHidden] = useContext(MenuContext);

  const switchMenu = () => {
    setMenuHidden(!menuHidden);
  };

  return (
    <button
      ref={button}
      className="menu-button header__button"
      type="button"
      onClick={switchMenu}
    />
  );
}
