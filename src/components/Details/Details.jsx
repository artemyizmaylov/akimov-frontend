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
import Menu from "../Menu/Menu";
import WindowContext from "../../context/WindowContext";
import db from "../../db.json";

export default function Details() {
  const nav = useNavigate();
  const { article } = useParams();
  const { windowWidth } = useContext(WindowContext);
  const [popupOpened, setPopupOpened] = useState(false);

  const item = db.find((i) => i.article === article);

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
          buttonImage={closeButton}
          buttonHandler={returnToCatalogue}
          text={item.type}
          subtext={item.name}
        />
      ) : (
        <Header buttonImage={closeButton} buttonHandler={returnToCatalogue} />
      )}
      <Menu />
      <section className="details__container">
        <div className="details__item">
          <ItemRotator article={article} />
          <img className="details__rotate-image" src={rotateImage} alt="" />
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
        </div>
        <button
          className="details__item-choose"
          type="button"
          onClick={openPopup}
        >
          <img className="dateail__point-image" src={point} alt="" />
          <p className="details__text_big">выбрАть ИСПОЛНЕНИЕ</p>
          <img className="dateail__point-image" src={point} alt="" />
        </button>
      </section>
      <ItemPopup item={item} isOpen={popupOpened} handleClose={closePopup} />
    </div>
  );
}
