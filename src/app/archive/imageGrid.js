"use client";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import ImageModal from "./imageModal"; // Assuming ImageModal is in the same directory

import one from "../../../public/images/archive/1.png";
import two from "../../../public/images/archive/2.png";
import three from "../../../public/images/archive/3.png";
import four from "../../../public/images/archive/4.png";
import five from "../../../public/images/archive/5.png";
import six from "../../../public/images/archive/6.png";
import seven from "../../../public/images/archive/7.png";
import eight from "../../../public/images/archive/8.png";
import nine from "../../../public/images/archive/9.png";
import ten from "../../../public/images/archive/10.png";
import eleven from "../../../public/images/archive/11.png";
import twelve from "../../../public/images/archive/12.png";

const imgs = [
  { src: one, id: "one" },
  { src: two, id: "two" },
  { src: three, id: "three" },
  { src: four, id: "four" },
  { src: five, id: "five" },
  { src: six, id: "six" },
  { src: seven, id: "seven" },
  { src: eight, id: "eight" },
  { src: nine, id: "nine" },
  { src: ten, id: "ten" },
  { src: eleven, id: "eleven" },
  { src: twelve, id: "twelve" },
];
const ImageGrid = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  const handleImageClick = (image) => {
    setSelectedImage(image);
  };

  const closeModal = () => {
    setSelectedImage(null);
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
        {imgs.map((image) => (
          <motion.div
            transition={transitionOut}
            layoutId={image.id}
            key={image.id}
            onClick={() => handleImageClick(image)}
            className=' rounded-2xl overflow-hidden min-w-80 w-full cursor-pointer relative'>
            <Image src={image.src} layout='responsive' objectFit='cover' />
          </motion.div>
        ))}
      </section>

      <AnimatePresence>
        {selectedImage && (
          <ImageModal image={selectedImage} closeModal={closeModal} />
        )}
      </AnimatePresence>
    </>
  );
};

export default ImageGrid;
