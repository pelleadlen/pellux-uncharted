"use client";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const CaseThumbnail = (props) => {
  const [isHovered, setIsHovered] = useState(false);
  return (
    <>
      <div
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        className={props.className}
      >
        <Link href={props.path}>
          <motion.div className=" relative flex h-full  flex-col overflow-hidden rounded-2xl">
            <div className="absolute bottom-4 left-4 z-50 flex  gap-2">
              <h3 className="rounded-full bg-black bg-opacity-25 px-2 py-1 font-display text-sm font-normal  leading-none  tracking-wide    text-white backdrop-blur-xl">
                {props.project}
              </h3>
              <h3 className="rounded-full bg-black bg-opacity-25 px-2 py-1 font-display text-sm font-normal  leading-none  tracking-wide    text-white backdrop-blur-xl">
                {props.description}
              </h3>
            </div>
            <motion.div
              layoutId={props.layoutId}
              whileHover={{ scale: 1.03 }}
              transition={{ duration: 0.5 }}
              className="h-full"
            >
              <Image
                className=" h-full object-cover "
                width="auto"
                height="100%"
                src={props.src}
                alt={props.project}
              />
              <AnimatePresence>
                {isHovered && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.2 }}
                    exit={{ opacity: 0 }}
                    className="absolute inset-0 bg-black bg-opacity-10"
                  />
                )}
              </AnimatePresence>
            </motion.div>
          </motion.div>
        </Link>
      </div>
    </>
  );
};
export default CaseThumbnail;
