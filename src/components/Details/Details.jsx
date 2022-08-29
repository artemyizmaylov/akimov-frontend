import { useNavigate, useParams } from "react-router-dom";
import React, { useContext, useState } from "react";
import Header from "../Header/Header";
import ItemPopup from "../ItemPopup/ItemPopup";
import rotateImage from "../../images/rotate-gold.svg";
import rotateLeftImage from "../../images/rotate-gold-left.svg";
import rotateRightImage from "../../images/rotate-gold-right.svg";
import point from "../../images/point-gold.svg";
import closeButton from "../../images/close-gold.svg";

import "./Details.css";
import ItemRotator from "../ItemRotator/ItemRotator";
import WindowContext from "../../context/WindowContext";

export default function Details() {
  const nav = useNavigate();
  const windowWidth = useContext(WindowContext);
  const [popupOpened, setPopupOpened] = useState(false);

  const { article } = useParams();
  const items = JSON.parse(localStorage.getItem("items"));
  const item = items.find((i) => i.article === article);

  const openPopup = () => {
    setPopupOpened(true);
  };

  const closePopup = () => {
    setPopupOpened(false);
  };

  const returnToCatalogue = () => {
    nav("/catalogue");
  };

  return (
    <div className="details">
      {windowWidth < 1920 ? (
        <Header
          text={item.name}
          subtext={item.type}
          buttonImage={closeButton}
          buttonHandler={returnToCatalogue}
          withMenuButton
        />
      ) : (
        <Header buttonImage={closeButton} buttonHandler={returnToCatalogue} />
      )}
      <section className="details__container">
        <div className="details__item">
          {item.type === "цепь" ? (
            <img
              className="details__image"
              src={`/items/${item.article}_gold_i.webp`}
              alt={item.name}
            />
          ) : (
            <ItemRotator article={article} />
          )}
          <img className="details__rotate-image" src={rotateImage} alt="" />

          <svg
            className="details__arrow"
            width="40"
            height="40"
            viewBox="0 0 12 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M0.000201021 0C-0.0162592 4.2623 0.970956 7.8812 5.61424 10C0.970956 12.1188 0.000201021 15.7212 0.000201021 20H2.1949C2.1949 15.05 6.23514 11 11.1732 11V9C6.23514 9 2.1949 4.95 2.1949 0H0.000201021Z"
              fill="#ffba80"
            />
          </svg>

          <img
            className="details__rotate-image-left"
            src={rotateLeftImage}
            alt=""
          />
          <img
            className="details__rotate-image-right"
            src={rotateRightImage}
            alt=""
          />
          <div className="details__item-circle" />
        </div>
        <div className="details__description">
          {windowWidth >= 1920 && (
            <>
              <p className="details__item-type">{item.type}</p>
              <h2 className="details__text_big details__item-name">
                {item.name}
              </h2>
            </>
          )}

          <p className="details__text">{item.description}</p>
          <button
            className="details__item-choose"
            type="button"
            onClick={openPopup}
          >
            <img className="dateail__point-image" src={point} alt="" />
            <p className="details__text_big">выбрАть ИСПОЛНЕНИЕ</p>
            <img className="dateail__point-image" src={point} alt="" />
          </button>
        </div>
      </section>
      <ItemPopup item={item} isOpen={popupOpened} handleClose={closePopup} />
    </div>
  );
}
