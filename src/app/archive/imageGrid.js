"use client";
import Image from "next/image";
import Video from "next-video";
import flutter from "/videos/flutt.mp4";
import bambuser from "/videos/woodbam.mp4";
import trip from "/videos/25.mp4";
import tibb from "/videos/tibb.mp4";
import eon from "../../../public/images/archive/eon2.png";
import novice from "../../../public/images/archive/novice.png";
import legacy from "../../../public/images/archive/legacy.png";
import calc from "../../../public/images/archive/Calc.png";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

const imgs = [
  {
    src: eon,
    id: "eon",
    type: "image",
    title: "Hypothesis",
    description:
      "P22 is a design studio that has managed to maintain its independence from external investment. Instead, we choose to power our internal projects through collaborative client work.",
  },

  { src: flutter, id: "flutter", type: "video" },
  { src: novice, id: "novice", type: "image" },
  { src: bambuser, id: "bambuser", type: "video" },
  { src: trip, id: "trip", type: "video" },
  { src: legacy, id: "legacy", type: "image" },
  { src: calc, id: "calculator", type: "image" },
  { src: tibb, id: "tibb", type: "video" },
];
const ImageGrid = () => {
  const [hoveredItemId, setHoveredItemId] = useState(null);
  return (
    <>
      <section className=' grid grid-cols-3 gap-4 lg:mt-4'>
        {imgs.map((media) => (
          <div className='cursor-pointer relative min-h-[30rem] rounded-2xl overflow-hidden'>
            {media.type === "image" ? (
              <div
                onMouseEnter={() => setHoveredItemId(media.id)}
                onMouseLeave={() => setHoveredItemId(null)}
                className='relative overflow-hidden rounded-xl'>
                <div className='font-display text-secondary text-sm tracking-wide  bg-surfaceSecondary w-full py-2 flex justify-center'>
                  Hypothesis
                </div>
                <Image
                  draggable='false'
                  alt={media.src}
                  src={media.src}
                  className=' h-[34rem] object-cover'
                />
                <AnimatePresence>
                  {hoveredItemId === media.id && (
                    <motion.div
                      initial={{ opacity: 0, y: 40 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 40 }}
                      transition={{
                        type: "spring",
                        stiffness: 80,
                        damping: 12,
                      }}
                      key={media.id}
                      className='absolute font-normal  z-50 bottom-2 mx-2 rounded-lg  flex flex-col gap-3  p-4 bg-white  text-sm '>
                      {media.description}
                      <span className=' font-medium  text-xs'>
                        Undisclosed Client
                      </span>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ) : (
              <div
                onMouseEnter={() => setHoveredItemId(media.id)}
                onMouseLeave={() => setHoveredItemId(null)}
                className='relative overflow-hidden rounded-xl'>
                <div className='font-display  text-secondary text-sm tracking-wide  bg-surfaceSecondary w-full py-2 flex justify-center'>
                  Hypothesis
                </div>
                <Video
                  autoPlay
                  muted
                  loop
                  playsInline
                  controls={false}
                  src={media.src}
                  className=' h-[34rem] w-full object-cover'
                />
                <AnimatePresence>
                  {hoveredItemId === media.id && (
                    <motion.div
                      initial={{ opacity: 0, y: 40 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 40 }}
                      transition={{
                        type: "spring",
                        stiffness: 80,
                        damping: 12,
                      }}
                      key={media.id}
                      className='absolute font-normal  z-50 bottom-2 mx-2 rounded-lg  flex flex-col gap-3  p-4 bg-white  text-sm '>
                      {media.description}
                      <span className=' font-medium  text-xs'>
                        Undisclosed Client
                      </span>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            )}
          </div>
        ))}
      </section>
    </>
  );
};

export default ImageGrid;
