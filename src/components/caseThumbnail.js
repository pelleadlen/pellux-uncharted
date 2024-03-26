"use client";
import {AnimatePresence, motion, useTransform, useMotionValue, useSpring } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";


const CaseThumbnail = (props) => {
  const [isHovered, setIsHovered] = useState(false);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const springConfig = { damping: 20, stiffness: 120 };
  const cursorX = useSpring(
    useTransform(x, (val) => val - 44),
    springConfig,
  );
  const cursorY = useSpring(
    useTransform(y, (val) => val - 32),
    springConfig,
  );

  useEffect(() => {
    const updateMousePosition = (e) => {
      x.set(e.clientX);
      y.set(e.clientY);
    };
    window.addEventListener("mousemove", updateMousePosition);

    return () => {
      window.removeEventListener("mousemove", updateMousePosition);
    };
  }, [x, y]);

  return (
    <>
      <div
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        className={`overflow-hidden  ${props.className}`}
      >
        <Link href={props.path}>
          <motion.div className=" relative  flex h-full flex-col overflow-hidden rounded-lg">
      {/* Cursor */}
      <AnimatePresence>
              {isHovered && (
                <motion.div 
                  style={{ x: cursorX, y: cursorY, position: "fixed", top: 0, left: 0 }}
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0 }}
                  className="z-50 flex gap-2"
                >
                  <h3 className="rounded-full  bg-black bg-opacity-25 px-2 py-2 leading-none text-white backdrop-blur-xl">
                    View Case
                  </h3>
                </motion.div>
              )}
            </AnimatePresence>
            {/* Image */}
            <motion.div layoutId={props.layoutId} className="h-full">
              <Image
                className=" h-full  object-cover "
                width="auto"
                height="100%"
                src={props.src}
                alt={props.project}
              />
            </motion.div>
          </motion.div>
        </Link>
      </div>
    </>
  );
};
export default CaseThumbnail;
