import React from "react";
import "./SizeSlider.css";

export default function SizeSlider({ rangeArray, value, onChange }) {
  return (
    <div
      className="size-slider"
      style={{ width: rangeArray.length > 1 ? rangeArray.length * 36 : 41 }}
    >
      {rangeArray.map((range) =>
        <label className="size-slider__label" key={range}>
          <input
            name="size"
            className="size-slider__input"
            value={range}
            onChange={onChange}
            type="radio"
            checked={value === range}
          />
          <span className="size-slider__text">
            {range}
          </span>
        </label>)
      }
    </div >
  );
}
