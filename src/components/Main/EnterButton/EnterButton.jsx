import React from 'react';
import { useNavigate } from 'react-router-dom';
import './EnterButton.css';

export default function EnterButton() {
  const nav = useNavigate();

  const handleEnter = () => {
    nav('/catalogue');
  };

  return (
    <button className="enter-button" type="button" onClick={handleEnter}>
      <p className="enter-button__text">ВОЙТИ</p>
      <div className="enter-button__image" />
    </button>
  );
}
