"use client";
import { AnimatePresence, motion } from "framer-motion";
import { imgs } from "./data";
import ImageComponent from "./imageComponent";
import VideoComponent from "./videoComponent";
import SlideShow from "./slideShow";
import { useState } from "react";

const ImageGrid = () => {
  const [hoveredItemId, setHoveredItemId] = useState(null);

  const descriptionAnimation = {
    initial: { opacity: 0, y: 40 },
    animate: {
      opacity: 1,
      y: 0,
      transition: { type: "spring", stiffness: 120, damping: 18 },
    },
    exit: { opacity: 0, y: 40 },
  };

  return (
    <section className=' grid grid-cols-3 gap-4 lg:mt-4'>
      {imgs.map((media) => {
        return (
          <div
            key={media.id}
            onMouseEnter={() => setHoveredItemId(media.id)}
            onMouseLeave={() => setHoveredItemId(null)}
            className=' relative min-h-[30rem] rounded-2xl overflow-hidden'>
            <div className='font-display text-secondary text-sm tracking-wide bg-surfaceSecondary w-full py-4 px-4 flex justify-center'>
              Hypothesis
            </div>
            {(() => {
              switch (media.type) {
                case "image":
                  return <ImageComponent media={media} />;
                case "video":
                  return <VideoComponent media={media} />;
                case "slideshow":
                  return (
                    <SlideShow
                      height='h-full'
                      media={media}
                      images={media.src}
                    />
                  );
                default:
                  return null;
              }
            })()}
            <AnimatePresence>
              {hoveredItemId === media.id && (
                <motion.div
                  variants={descriptionAnimation}
                  initial='initial'
                  animate='animate'
                  exit='exit'
                  transition='transition'
                  className='absolute bottom-2 mx-2 rounded-lg p-4 bg-white text-sm font-normal z-50 flex flex-col gap-3'>
                  {media.description}
                  <span className=' font-medium text-xs'>
                    Undisclosed Client
                  </span>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        );
      })}
    </section>
  );
};

export default ImageGrid;
