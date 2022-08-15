import "./Main.css";
import React, { useContext } from "react";
import MainMobile from "./MainMobile/MainMobile";
import MainDesktop from "./MainDesktop/MainDesktop";
import WindowContext from "../../context/WindowContext";

export default function Main() {
  const breakpoint = 1024;
  const windowWidth = useContext(WindowContext);
  console.log(windowWidth);

  return (
    <div className="main">
      {windowWidth > breakpoint ? <MainDesktop /> : <MainMobile />}
    </div>
  );
}
