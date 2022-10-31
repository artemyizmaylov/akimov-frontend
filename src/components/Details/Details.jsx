import { useNavigate, useParams } from "react-router-dom";
import React, { useContext, useEffect, useState } from "react";
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

  const breakpoint = 1500;

  let [rotationImagePos, setRotationImagePos] = useState(0);
  const [rotate, setRotate] = useState("");
  const [intervalID, setIntervalID] = useState("");

  const openPopup = () => {
    setPopupOpened(true);
  };

  const closePopup = () => {
    setPopupOpened(false);
  };

  const returnToCatalogue = () => {
    nav("/catalogue");
  };

  useEffect(() => {
    if (rotate === "left") {
      const interval = setInterval(() => {
        setRotationImagePos(rotationImagePos++);
      }, 50);
      setIntervalID(interval);
    } else if (rotate === "right") {
      const interval = setInterval(() => {
        setRotationImagePos(rotationImagePos--);
      }, 50);
      setIntervalID(interval);
    } else {
      clearInterval(intervalID);
    }
  }, [rotate]);

  return (
    <>
      <div className="details">
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
            <ItemRotator
              article={article}
              currFrame={rotationImagePos}
              setCurrFrame={setRotationImagePos}
            />

            <img className="details__rotate-image" src={rotateImage} alt="" />
            <a className="details__arrow" href="#description" />
            <img
              className="details__rotate-image-left"
              src={rotateLeftImage}
              alt=""
              onMouseDown={() => setRotate("left")}
              onMouseUp={() => setRotate("")}
              onMouseLeave={() => setRotate("")}
            />
            <img
              className="details__rotate-image-right"
              src={rotateRightImage}
              alt=""
              onMouseDown={() => setRotate("right")}
              onMouseUp={() => setRotate("")}
              onMouseLeave={() => setRotate("")}
            />
          </div>
          <div className="details__description" id="description">
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

      <link
        rel="canonical"
        href="https://daryvolkhvov.ru/details/5001#description"
      />
    </>
  );
}
