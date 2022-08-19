import gsap from "gsap";
import { useEffect, useRef, React } from "react";
import "./Parallax.css";

import one from "../../../images/parallax/1.png";
import two from "../../../images/parallax/2.png";
import three from "../../../images/parallax/3.png";
import four from "../../../images/parallax/4.png";
import five from "../../../images/parallax/5.png";
import six from "../../../images/parallax/6.png";
import seven from "../../../images/parallax/7.png";

export default function Parallax() {
  const parallax = useRef(null);

  const animateParallax = (e) => {
    const windowWidth = window.innerWidth;
    const windowHeight = window.innerHeight;

    const centerX = windowWidth / 2;
    const centerY = windowHeight / 2;
    const coefficient = 70;

    gsap.to(parallax.current, {
      transform: `
            rotateX(${Math.round((e.clientY - centerY) / coefficient) * -1}deg)
            rotateY(${Math.round((e.clientX - centerX) / coefficient)}deg)
          `,
    });
  };

  useEffect(() => {
    document.addEventListener("mousemove", animateParallax);
    return () => document.removeEventListener("mousemove", animateParallax);
  }, []);

  return (
    <div className="parallax" ref={parallax}>
      <h1 className="parallax__heading parallax__layer">
        Ювелирная <br />
        иконОтека
      </h1>
      <div className="parallax__round-text parallax__layer" />
      <div className="parallax__logo parallax__layer" />

      <img
        className="parallax__layer parallax__layer-one"
        src={one}
        alt="Картина"
      />
      <img
        className="parallax__layer parallax__layer-two"
        src={two}
        alt="Картина"
      />
      <img
        className="parallax__layer parallax__layer-three"
        src={three}
        alt="Картина"
      />
      <img
        className="parallax__layer parallax__layer-four"
        src={four}
        alt="Картина"
      />
      <img
        className="parallax__layer parallax__layer-five"
        src={five}
        alt="Картина"
      />
      <img
        className="parallax__layer parallax__layer-six"
        src={six}
        alt="Картина"
      />
      <img
        className="parallax__layer parallax__layer-seven"
        src={seven}
        alt="Картина"
      />
    </div>
  );
}
