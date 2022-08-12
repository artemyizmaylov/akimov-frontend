import React from 'react';
import './SizeSlider.css';

export default function SizeSlider({
  id, rageArray, value, onChange,
}) {
  return (
    <div className="size-slider" style={{ width: rageArray.length > 1 ? (rageArray.length * 36) : 41 }}>
      <input
        className="size-slider__input"
        id={id}
        value={value}
        onChange={onChange}
        type="range"
        min={rageArray[0]}
        max={rageArray[rageArray.length - 1]}
        step={rageArray[1] - rageArray[0] || 1}
      />
      <label className="size-slider__label" htmlFor={id}>
        {rageArray.map((item) => <p className="size-slider__text" key={item}>{item}</p>)}
      </label>
    </div>
  );
}
