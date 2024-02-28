import eon from "../../../public/images/archive/eon2.png";
import eon2 from "../../../public/images/archive/27.png";
import eon3 from "../../../public/images/archive/32.png";
import eon4 from "../../../public/images/archive/31.png";
import novice from "../../../public/images/archive/novice.png";
import calc from "../../../public/images/archive/Calc.png";
import m1 from "../../../public/images/archive/1M.png";
import m2 from "../../../public/images/archive/2M.png";
import m3 from "../../../public/images/archive/3M.png";
import flutter from "/videos/flutt.mp4";
import bambuser from "/videos/woodbam.mp4";
import trip from "/videos/25.mp4";
import tibb from "/videos/tibb.mp4";

const slideImgsEon = [
  { src: eon },
  { src: eon2 },
  { src: eon3 },
  { src: eon4 },
];
const slideImgsMercedes = [
  { src: calc },
  { src: m3 },
  { src: m2 },
  { src: m1 },
];
export const imgs = [
  {
    src: slideImgsEon,
    id: "slideshow",
    type: "slideshow",
    title: "Hypothesis",
    description:
      "P22 is a design studio that has managed to maintain its independence from external investment. Instead, we choose to power our internal projects through collaborative client work.",
  },

  { src: flutter, id: "flutter", type: "video" },
  { src: novice, id: "novice", type: "image" },
  { src: bambuser, id: "bambuser", type: "video" },
  { src: trip, id: "trip", type: "video" },
  { src: slideImgsMercedes, id: "calculator", type: "slideshow" },
  { src: tibb, id: "tibb", type: "video" },
];
