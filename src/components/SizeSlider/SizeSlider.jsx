import React from "react";
import "./SizeSlider.css";

export default function SizeSlider({ id, rangeArray, value, onChange }) {
  return (
    <div
      className="size-slider"
      style={{ width: rangeArray.length > 1 ? rangeArray.length * 36 : 41 }}
    >
      <input
        className="size-slider__input"
        id={id}
        value={value}
        onChange={onChange}
        type="range"
        min={rangeArray[0]}
        max={rangeArray[rangeArray.length - 1]}
        step={rangeArray[1] - rangeArray[0] || 1}
      />
      <label className="size-slider__label" htmlFor={id}>
        {rangeArray.map((item) => (
          <p className="size-slider__text" key={item}>
            {item}
          </p>
        ))}
      </label>
    </div>
  );
}
