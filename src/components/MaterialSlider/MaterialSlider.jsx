import React from "react";
import "./MaterialSlider.css";

export default function MaterialSlider({ id, isChecked, onChange, vertical }) {
  return (
    <div className="material-slider">
      <input
        className="material-slider__checkbox"
        type="checkbox"
        id={id}
        checked={isChecked}
        onChange={onChange}
      />
      <label
        className={`material-slider__label ${
          vertical && "material-slider__label_vertical"
        }`}
        htmlFor={id}
      >
        <span
          className={`material-slider__pointer ${
            vertical && "material-slider__pointer_vertical"
          }`}
        />
        <p className="material-slider__text">с.925</p>
        <p className="material-slider__text">з.585</p>
      </label>
    </div>
  );
}
