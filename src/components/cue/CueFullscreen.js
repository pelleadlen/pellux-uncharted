"use client";
import Image from "next/image";

import { motion } from "framer-motion";
import { useEffect, useRef } from "react";
import Lenis from "lenis";

const CueFullscreen = ({ closeCue }) => {
  const images = [
    { layoutId: "cue", key: "1", src: "/images/cue/cue1.png" },
    { key: "2", src: "/images/cue/cue2.png" },
    { key: "3", src: "/images/cue/cue3.png" },
    { key: "4", src: "/images/cue/cue4.png" },
    { key: "5", src: "/images/cue/cue4.png" },
    { key: "6", src: "/images/cue/cue4.png" },
    { key: "7", src: "/images/cue/cue4.png" },
    { key: "8", src: "/images/cue/cue4.png" },
  ];

  const scrollContainerRef = useRef(null);

  useEffect(() => {
    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = "auto";
    };
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
    exit: { opacity: 0 },
  };

  const itemVariants = {
    hidden: { y: 16, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        damping: 8,

        stiffness: 40,
      },
    },
  };

  return (
    <>
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        exit="exit"
        className="fixed inset-0 z-10 max-h-screen bg-white"
      >
        <div className=" absolute right-4 top-4">
          <button onClick={closeCue}>Close</button>
        </div>

        <div
          ref={scrollContainerRef}
          className=" flex h-full items-center 
overflow-x-auto overflow-y-hidden"
        >
          {images.map((image) => (
            <motion.div
              variants={itemVariants}
              layoutId={image.layoutId}
              transition={{
                type: "spring",
                damping: 10,
                mass: 0.75,
                stiffness: 50,
              }}
              key={image.key}
              className="mx-4"
            >
              <Image
                src={image.src}
                className="min-h-[852px] min-w-[393px] object-cover"
                width={393}
                height={852}
              />
            </motion.div>
          ))}
        </div>
      </motion.div>
    </>
  );
};

export default CueFullscreen;
