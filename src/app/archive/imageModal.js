"use client";
import { motion } from "framer-motion";
import Image from "next/image";

const ImageModal = ({ image, closeModal }) => {
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
        layoutId={image.id}
        className='rounded-lg overflow-hidden '>
        <Image
          src={image.src}
          layout='responsive'
          width={500}
          height={500}
          objectFit='cover'
        />
      </motion.div>
      <button onClick={closeModal} className='mb-4'>
        Back to Grid
      </button>
    </motion.div>
  );
};

export default ImageModal;
