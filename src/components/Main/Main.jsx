import './Main.css';
import React from 'react';
import MainMobile from './MainMobile/MainMobile';
import MainDesktop from './MainDesktop/MainDesktop';
import useWindowWidth from '../../hooks/useWindowWidth';

export default function Main() {
  const breakpoint = 1024;
  const width = useWindowWidth();

  return (
    <div className="main">
      {width > breakpoint ? <MainDesktop /> : <MainMobile />}
    </div>
  );
}
