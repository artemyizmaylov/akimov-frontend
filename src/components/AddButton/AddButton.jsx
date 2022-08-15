import React from "react";
import "./AddButton.css";

export default function AddButton({ price, text, onClick }) {
  return (
    <button className="add-button" type="button" onClick={onClick}>
      <p className="add-button__price">{`${price} Р`}</p>
      <p className="add-button__text">{text}</p>
    </button>
  );
}
