import React, { useRef, useEffect } from "react";
import gsap from "gsap";
import "./Cursor.css";

export default function Cursor() {
  const pointer = useRef(null);
  const tail = useRef(null);

  const circleAnimation = (e) => {
    const { pageX, pageY } = e;
    animate(pageX, pageY);
  };

  const animate = (x, y) => {
    gsap.to(pointer.current, {
      x,
      y,
      top: 0,
      left: 0,
    });

    setTimeout(() => {
      gsap.to(tail.current, {
        x,
        y,
        top: 0,
        left: 0,
      });
    }, 100);
  };

  useEffect(() => {
    window.addEventListener("mousemove", circleAnimation);
  }, []);

  return (
    <>
      <div ref={pointer} className="cursor cursor__pointer" />
      <div ref={tail} className="cursor cursor__tail" />
    </>
  );
}
