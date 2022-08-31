import React, { useEffect } from "react";
import "./ItemRotator.css";
import viewer from "../../utils/360viewer";

export default function ItemRotator({ article }) {
  useEffect(() => {
    viewer.start();
    return () => {
      viewer.destroy();
    };
  }, []);

  return (
    <div className="item-rotator" id="item-rotator">
      <img
        className="item-rotator-image"
        id="item-rotator-image"
        alt="example"
        src={`/items3D/${article}/0_0.webp`}
      />
    </div>
  );
}
