import React, { useEffect } from "react";
import "./ItemRotator.css";
import { JavascriptViewer } from "@3dweb/360javascriptviewer";

export default function ItemRotator({ article }) {
  const viewer = new JavascriptViewer({
    mainHolderId: "item-rotator",
    mainImageId: "item-rotator-image",
    totalFrames: 179,
    speed: 90,
    defaultProgressBar: true,
    imageUrlFormat: "0_x.png",
  });

  useEffect(() => {
    viewer.start();
  }, []);

  return (
    <div className="item-rotator" id="item-rotator">
      <img
        className="item-rotator-image"
        id="item-rotator-image"
        alt="example"
        src={`/items3D/${article}/0_0.png`}
      />
    </div>
  );
}
