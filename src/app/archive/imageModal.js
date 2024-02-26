"use client";
import { motion } from "framer-motion";
import Video from "next-video";
import Image from "next/image";

const ImageModal = ({ media, closeModal }) => {
  const transitionIn = {
    type: "spring",
    stiffness: 100,
    damping: 30,
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={closeModal}
      className=' bg-white   grid place-items-center px-4  fixed inset-0 z-50 '>
      <motion.div
        layout
        transition={transitionIn}
        layoutId={media.id}
        onClick={closeModal}>
        {media.type === "image" ? (
          <Image
            draggable='false'
            src={media.src}
            className='w-auto aspect-square rounded-2xl md:aspect-auto object-cover'
          />
        ) : (
          <Video
            autoPlay
            muted
            loop
            playsInline
            controls={false}
            src={media.src}
            className=' max-w-screen  rounded-2xl  object-cover'
          />
        )}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 20 }}
          transition={{ delay: 0.1, duration: 0.9 }}
          className='flex  justify-center py-6'>
          <p>Case for E.ON the leading electricity provider in Europe</p>
        </motion.div>
      </motion.div>
      <button onClick={closeModal} className='mb-4 absolute right-4 top-4'>
        Close
      </button>
    </motion.div>
  );
};

export default ImageModal;
