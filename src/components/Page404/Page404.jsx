import React from "react";
import BackwardButton from "../BackwardButton/BackwardButton";
import "./Page404.css";

export default function Page404() {
  return (
    <div className="page-404 animate-bg">
      <h1 className="page-404__heading">404</h1>
      <p className="page-404__text">Здесь ничего нет...</p>

      <div className="page-404__button-container">
        <BackwardButton />
      </div>
    </div>
  );
}
