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
        className={props.className}>
        <Link href={props.path}>
          <motion.div className=' flex flex-col h-full  relative rounded-2xl overflow-hidden'>
            <div className='flex gap-2 absolute z-50 bottom-6  left-6'>
              <h3 className='py-1 px-2 bg-black text-white font-normal font-display tracking-wide backdrop-blur-xl  text-sm  bg-opacity-25    rounded-full leading-none'>
                {props.project}
              </h3>
              <h3 className='py-1 px-2 bg-black text-white font-normal font-display tracking-wide backdrop-blur-xl  text-sm  bg-opacity-25    rounded-full leading-none'>
                {props.description}
              </h3>
            </div>
            <motion.div
              layoutId={props.layoutId}
              whileHover={{ scale: 1.03 }}
              transition={{ duration: 0.5 }}
              className='h-full'>
              <Image
                className='object-cover h-full'
                width='auto'
                height='100%'
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
                    className='absolute inset-0 bg-black bg-opacity-10'
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
