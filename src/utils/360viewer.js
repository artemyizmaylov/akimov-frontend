import { JavascriptViewer } from "@3dweb/360javascriptviewer";

const viewer = new JavascriptViewer({
  mainHolderId: "item-rotator",
  mainImageId: "item-rotator-image",
  totalFrames: 179,
  speed: 90,
  inertia: 0,
  autoRotate: true,
  autoRotateReverse: true,
  autoRotateSpeed: 50,
  enableImageEvents: false,
  defaultProgressBar: true,
  imageUrlFormat: "0_x.webp",
  cursorConfig: "none",
});

export default viewer;
