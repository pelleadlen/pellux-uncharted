"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import Video from "next-video";
import styles from "./page.module.css";

const ImageModal = ({ media, closeModal }) => {
  const transitionIn = {
    type: "spring",
    damping: 80,
    stiffness: 500,
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0, transition: { duration: 0.4 } }}
      onClick={closeModal}
      className='flex flex-col overflow-hidden bg-white bg-opacity-90 backdrop-blur-lg fixed inset-0 z-50 items-center justify-center'>
      <motion.div
        transition={transitionIn}
        layoutId={media.id}
        className='rounded-lg overflow-hidden '>
        {media.type === "image" ? (
          <Image
            src={media.src}
            layout='responsive'
            className='h-full min-w-72 object-cover'
          />
        ) : (
          <Video
            autoPlay
            muted
            loop
            playsInline
            controls={false}
            src={media.src}
            className={
              media.hasVideoStyle ? styles.video : "h-full origin-center "
            }
          />
        )}
      </motion.div>

      <button onClick={closeModal} className='mb-4'>
        Back to Grid
      </button>
    </motion.div>
  );
};

export default ImageModal;
