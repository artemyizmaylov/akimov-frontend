import React, { useEffect, useRef } from "react";
import "./ItemRotator.css";
import viewer from "../../utils/360viewer";

export default function ItemRotator({
  article,
  cover,
  currFrame,
  setCurrFrame,
}) {
  const progressBar = useRef(null);
  const progressLine = useRef(null);
  const itemRotator = useRef(null);

  useEffect(() => {
    if (viewer.isStarted) viewer.destroy();

    viewer.start().catch((msg) => {
      console.log(msg);
    });

    viewer.events().loadImage.on((progress) => {
      if (progressLine.current) {
        progressLine.current.style.width = `${progress.percentage}%`;
      }

      if (progress.percentage === 100) {
        setTimeout(() => {
          if (progressBar.current && itemRotator.current) {
            progressBar.current.style.opacity = 0;
            itemRotator.current.style.filter = "blur(0)";
          }

          viewer.events().startDragging.on(() => {
            if (setCurrFrame) {
              setCurrFrame(0);
            }
          });

          setTimeout(() => {
            if (progressBar.current) {
              progressBar.current.style.display = "none";
            }
          }, 600);
        }, 1000);
      }
    });
  }, [article]);

  useEffect(() => {
    viewer.rotateToFrame(currFrame);
  }, [currFrame]);

  return (
    <>
      <div className="progress-bar" ref={progressBar}>
        <div className="progress-bar__line" ref={progressLine} />
      </div>
      <div
        className={`item-rotator ${cover ? "cover" : "contain"}`}
        id="item-rotator"
        ref={itemRotator}
      >
        <img
          className="item-rotator-image"
          id="item-rotator-image"
          alt="example"
          src={`/items3D/${article}/0_0.webp`}
        />
      </div>
    </>
  );
}
