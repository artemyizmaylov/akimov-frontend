import React from "react";
import "./BackwardButton.css";
import spark from "../../images/spark-gold.svg";
import { useNavigate } from "react-router-dom";

export default function BackwardButton() {
  const nav = useNavigate();

  return (
    <button className="backward-button" onClick={() => nav(-1)}>
      <img className="backward-button__image" src={spark} alt="" />
      Назад
    </button>
  );
}
