"use client";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import styles from "./page.module.css";
import Image from "next/image";
import ImageModal from "./imageModal";
import Video from "next-video";
import flutter from "/videos/flutt.mp4";
import bambuser from "/videos/woodbam.mp4";
import eon from "../../../public/images/archive/eon2.png";

import three from "../../../public/images/archive/3.png";

import five from "../../../public/images/archive/5.png";
import legacy from "../../../public/images/archive/legacy.png";
import seven from "../../../public/images/archive/7.png";
import eight from "../../../public/images/archive/8.png";
import nine from "../../../public/images/archive/9.png";
import ten from "../../../public/images/archive/10.png";
import eleven from "../../../public/images/archive/11.png";
import twelve from "../../../public/images/archive/12.png";

const imgs = [
  { src: eon, id: "eon", type: "image" },
  { src: flutter, id: "flutter", type: "video", hasVideoStyle: false },
  { src: three, id: "three", type: "image" },
  { src: bambuser, id: "bambuser", type: "video", hasVideoStyle: true },
  { src: five, id: "five", type: "image" },
  { src: legacy, id: "legacy", type: "image" },
  { src: seven, id: "seven", type: "image" },
  { src: eight, id: "eight", type: "image" },
  { src: nine, id: "nine", type: "image" },
  { src: ten, id: "ten", type: "image" },
  { src: eleven, id: "eleven", type: "image" },
  { src: twelve, id: "twelve", type: "image" },
];
const ImageGrid = () => {
  const [selectedMedia, setSelectedMedia] = useState(null);

  const handleMediaClick = (media) => {
    setSelectedMedia(media);
  };

  const closeModal = () => {
    setSelectedMedia(null);
  };

  const transitionOut = {
    type: "spring",
    stiffness: 400,
    damping: 50,
  };

  return (
    <>
      <section
        className='grid grid-flow-row-dense  lg:mt-4 gap-4'
        style={{
          gridTemplateColumns: "repeat(auto-fill, minmax(320px, 1fr))",
        }}>
        {imgs.map((media) => (
          <motion.div
            transition={transitionOut}
            layoutId={media.id}
            key={media.id}
            onClick={() => handleMediaClick(media)}
            className=' rounded-2xl overflow-hidden min-w-80 w-full cursor-pointer relative'>
            {media.type === "image" ? (
              <Image
                alt={media.src}
                src={media.src}
                width='auto'
                className='h-full object-cover'
              />
            ) : (
              <Video
                autoPlay
                muted
                loop
                playsInline
                controls={false}
                src={media.src}
                className={media.hasVideoStyle ? styles.video : "h-full"}
              />
            )}
          </motion.div>
        ))}
      </section>

      <AnimatePresence>
        {selectedMedia && (
          <ImageModal media={selectedMedia} closeModal={closeModal} />
        )}
      </AnimatePresence>
    </>
  );
};

export default ImageGrid;
