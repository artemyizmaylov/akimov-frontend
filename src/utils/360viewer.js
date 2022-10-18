import { JavascriptViewer } from "@3dweb/360javascriptviewer";

const viewer = new JavascriptViewer({
  mainHolderId: "item-rotator",
  mainImageId: "item-rotator-image",
  totalFrames: 179,
  speed: 90,
  inertia: 0,
  enableImageEvents: false,
  defaultProgressBar: false,
  imageUrlFormat: "0_x.webp",
});

export default viewer;
