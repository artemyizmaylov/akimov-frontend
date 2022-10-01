import { useNavigate, useParams } from "react-router-dom";
import React, { useContext, useState } from "react";
import Header from "../Header/Header";
import ItemPopup from "../ItemPopup/ItemPopup";
import rotateImage from "../../images/rotate-gold.svg";
import rotateLeftImage from "../../images/rotate-gold-left.svg";
import rotateRightImage from "../../images/rotate-gold-right.svg";
import point from "../../images/point-gold.svg";
import closeButton from "../../images/close-gold.svg";
import arrow from "../../images/arrow-down-gold.svg";

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

  const breakpoint = 1500;

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
    <div className="details animate-bg">
      {windowWidth < breakpoint ? (
        <Header
          text={item.name}
          subtext={item.type}
          buttonImage={closeButton}
          buttonHandler={returnToCatalogue}
          withMenuButton
        />
      ) : (
        <Header withMenuButton />
      )}
      <section className="details__container">
        <div className="details__item">
          <ItemRotator article={article} />

          <img className="details__rotate-image" src={rotateImage} alt="" />
          <img className="details__arrow" src={arrow} alt="" />
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
        </div>
        <div className="details__description">
          {windowWidth >= breakpoint && (
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
