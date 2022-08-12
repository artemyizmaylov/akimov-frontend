import React from 'react';
import './MainMobile.css';
import logo from '../../../images/logo-white.svg';
import EnterButton from '../EnterButton/EnterButton';

export default function MainMobile() {
  return (
    <div className="main-mobile">
      <img className="main-mobile__logo" src={logo} alt="Дары Волхвов" />
      <h1 className="main-mobile__heading">Ювелирная иконотека</h1>
      <EnterButton />
    </div>
  );
}
