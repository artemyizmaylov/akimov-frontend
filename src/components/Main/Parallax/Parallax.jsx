import gsap from "gsap";
import { useEffect, useRef, React } from "react";
import "./Parallax.css";

export default function Parallax() {
  const parallax = useRef(null);

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
    document.addEventListener("mousemove", animateParallax);
    return () => document.removeEventListener("mousemove", animateParallax);
  }, []);

  return (
    <div className="parallax" ref={parallax}>
      <div className="parallax__depth1 parallax__layer" />
      <div className="parallax__depth2 parallax__layer" />
      <div className="parallax__depth3 parallax__layer" />
      <div className="parallax__depth4 parallax__layer" />
      <div className="parallax__depth5 parallax__layer" />
      <div className="parallax__depth6 parallax__layer" />
      <h1 className="content__heading">
        Ювелирная <br />
        иконОтека
      </h1>
      <div className="content">
        <div className="content__round-text" />
        <div className="content__logo" />
      </div>
    </div>
  );
}
