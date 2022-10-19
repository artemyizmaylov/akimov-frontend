import React from "react";
import "./Page404.css";

export default function Page404() {
  return (
    <div className="page-404 animate-bg">
      <h1 className="page-404__heading">404</h1>
      <p className="page-404__text">Здесь ничего нет...</p>

      <div className="page-404__button-container">
        <a
          className="page-404__text page-404__link"
          href="https://daryvolkhvov.ru/catalogue"
        >
          На сайт
        </a>
      </div>
    </div>
  );
}
