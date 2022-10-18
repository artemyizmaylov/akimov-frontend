import React from "react";
import { Link } from "react-router-dom";
import "./EnterButton.css";

export default function EnterButton() {
  return (
    <nav className="enter-button">
      <Link to="/catalogue" className="enter-button__link">
        <p className="enter-button__text">ВОЙТИ</p>
        <div className="enter-button__image" />
      </Link>
    </nav>
  );
}
