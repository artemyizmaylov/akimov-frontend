import gsap from "gsap";
import { useEffect, useRef, React } from "react";
import "./Parallax.css";
import depth1 from "../../../images/parallax/6.webp";
import depth2 from "../../../images/parallax/5.webp";
import depth3 from "../../../images/parallax/4.webp";
import depth4 from "../../../images/parallax/3.webp";
import depth5 from "../../../images/parallax/2.webp";
import depth6 from "../../../images/parallax/1.webp";
import logo from "../../../images//logo-white.svg";

import { useNavigate } from "react-router-dom";

export default function Parallax() {
  const parallax = useRef(null);
  const nav = useNavigate();

  const animateParallax = (e) => {
    let _w = window.innerWidth / 2;
    let _h = window.innerHeight / 2;
    let _mouseX = e.clientX;
    let _mouseY = e.clientY;

    let _depth1 = [`${(_mouseX - _w) * 0.002}%`, `${(_mouseY - _h) * 0.011}%`];
    let _depth2 = [`${(_mouseX - _w) * 0.003}%`, `${(_mouseY - _h) * 0.009}%`];
    let _depth3 = [`${(_mouseX - _w) * 0.004}%`, `${(_mouseY - _h) * 0.007}%`];
    let _depth4 = [`${(_mouseX - _w) * 0.005}%`, `${(_mouseY - _h) * 0.005}%`];
    let _depth5 = [`${(_mouseX - _w) * 0.006}%`, `${(_mouseY - _h) * 0.003}%`];
    let _depth6 = [`${(_mouseX - _w) * 0.007}%`, `${(_mouseY - _h) * 0.001}%`];

    gsap.to(".parallax__depth6, .content", { x: _depth1[0], y: _depth1[1] });
    gsap.to(".parallax__depth5", { x: _depth2[0], y: _depth2[1] });
    gsap.to(".parallax__depth4", { x: _depth3[0], y: _depth3[1] });
    gsap.to(".parallax__depth3", { x: _depth4[0], y: _depth4[1] });
    gsap.to(".parallax__depth2", { x: _depth5[0], y: _depth5[1] });
    gsap.to(".parallax__depth1", { x: _depth6[0], y: _depth6[1] });
  };

  useEffect(() => {
    document.body.addEventListener("mouseenter", animateParallax);
    document.addEventListener("mousemove", animateParallax);

    return () => {
      document.body.removeEventListener("mouseenter", animateParallax);
      document.removeEventListener("mousemove", animateParallax);
    };
  }, []);

  return (
    <div className="parallax" ref={parallax}>
      <img src={depth1} alt="" className="parallax__depth1 parallax__layer" />
      <img src={depth2} alt="" className="parallax__depth2 parallax__layer" />
      <img src={depth3} alt="" className="parallax__depth3 parallax__layer" />
      <img src={depth4} alt="" className="parallax__depth4 parallax__layer" />
      <img src={depth5} alt="" className="parallax__depth5 parallax__layer" />
      <img src={depth6} alt="" className="parallax__depth6 parallax__layer" />
      <h1 className="content__heading">
        ?????????????????? <br />
        ??????????????????
      </h1>
      <div className="content">
        <button
          className="content__round-text"
          type="button"
          onClick={() => nav("/catalogue")}
        />
        <img src={logo} alt="???????? ??????????????" className="content__logo" />
      </div>
    </div>
  );
}
