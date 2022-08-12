import React from 'react';
import './MainDesktop.css';
import EnterButton from '../EnterButton/EnterButton';
import Parallax from '../Parallax/Parallax';

export default function MainDesktop() {
  return (
    <div className="main-desktop">
      <div className="main-desktop__button">
        <EnterButton />
      </div>
      <Parallax />
    </div>
  );
}
