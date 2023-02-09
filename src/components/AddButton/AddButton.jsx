import React from "react";
import "./AddButton.css";

export default function AddButton({ price, text, onClick, disabled }) {
  return (
    <button className={`add-button ${disabled && 'add-button_disabled'}`} type="button" onClick={onClick} disabled={disabled}>
      {
        disabled
          ? (<p className="add-button__price">{price}</p>)
          : (
            <>
              <p className="add-button__price">{`${price} Р`}</p>
              <p className="add-button__text">{text}</p>
            </>
          )
      }
    </button>
  );
}
