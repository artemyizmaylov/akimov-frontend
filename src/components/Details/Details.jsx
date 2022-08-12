import { useLocation, useNavigate } from 'react-router-dom';
import React, { useState } from 'react';
import Header from '../Header/Header';
import ItemPopup from '../ItemPopup/ItemPopup';
import rotateImage from '../../images/rotate-gold.svg';
import rotateLeftImage from '../../images/rotate-gold-left.svg';
import rotateRightImage from '../../images/rotate-gold-right.svg';
import point from '../../images/point-gold.svg';
import closeButton from '../../images/close-gold.svg';

import './Details.css';
import ItemRotator from '../ItemRotator/ItemRotator';
import Menu from '../Menu/Menu';
import useWindowWidth from '../../hooks/useWindowWidth';

export default function Details() {
  const location = useLocation();
  const nav = useNavigate();
  const { item } = location.state;
  const [popupOpened, setPopupOpened] = useState(false);
  const windowWidth = useWindowWidth();

  const openPopup = () => {
    setPopupOpened(true);
  };

  const closePopup = () => {
    setPopupOpened(false);
  };

  const returnToCatalogue = () => {
    nav('/catalogue');
  };

  return (
    <div className="details">
      {windowWidth < 1920 ? (
        <Header
          buttonImage={closeButton}
          buttonHandler={returnToCatalogue}
          text={item.name}
          subtext={item.type}
        />
      ) : (
        <Header
          buttonImage={closeButton}
          buttonHandler={returnToCatalogue}
        />
      )}
      <Menu />
      <section className="details__container">
        <div className="details__item">
          <ItemRotator article={item.article} />
          <img className="details__rotate-image" src={rotateImage} alt="" />
          <img className="details__rotate-image-left" src={rotateLeftImage} alt="" />
          <img className="details__rotate-image-right" src={rotateRightImage} alt="" />
          <div className="details__item-circle" />
        </div>
        <div className="details__description">
          {
            windowWidth >= 1920
            && (
            <>
              <p className="details__item-type">{item.type}</p>
              <h2 className="details__text_big details__item-name">{item.name}</h2>
            </>
            )
          }
          <p className="details__text">{item.description}</p>
        </div>
        <button className="details__item-choose" type="button" onClick={openPopup}>
          <img className="dateail__point-image" src={point} alt="" />
          <p className="details__text_big">выбрАть ИСПОЛНЕНИЕ</p>
          <img className="dateail__point-image" src={point} alt="" />
        </button>
      </section>
      <ItemPopup item={item} isOpen={popupOpened} handleClose={closePopup} />
    </div>
  );
}
