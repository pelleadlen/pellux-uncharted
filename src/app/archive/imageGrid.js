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
    <section className=" grid grid-cols-1 gap-4 md:grid-cols-2 lg:mt-4 lg:grid-cols-3">
      {imgs.map((media) => {
        return (
          <div
            key={media.id}
            onMouseEnter={() => setHoveredItemId(media.id)}
            onMouseLeave={() => setHoveredItemId(null)}
            className=" relative min-h-[30rem] overflow-hidden rounded-2xl"
          >
            <div className="flex w-full justify-center bg-surfaceSecondary px-4 py-4 font-display text-sm tracking-wide text-secondary">
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
                      height="h-full"
                      media={media}
                      startDelay={media.startDelay}
                      images={media.src}
                      intervals={media.intervals}
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
                  initial="initial"
                  animate="animate"
                  exit="exit"
                  transition="transition"
                  className="absolute bottom-2 z-50 mx-2 flex flex-col gap-3 rounded-lg bg-white p-4 text-sm font-normal"
                >
                  {media.description}
                  <span className=" text-xs font-medium">
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
