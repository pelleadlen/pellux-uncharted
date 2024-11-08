'use client';
import { useState, useEffect } from 'react';
import {motion, AnimatePresence} from "framer-motion";
import Image from 'next/image';
import eon from "/public/images/archive/eon2.png";
import eon2 from "/public/images/archive/32.png";
import eon3 from "/public/images/archive/27.png";
import eon4 from "/public/images/archive/31.png";




const images = [
  eon,
 eon2,
  eon3,
  eon4,
];

const infoVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: 20 }
};

const springTransition = {
  type: "spring",
  stiffness: 100,
  damping: 20
};

const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const [isPlaying, setIsPlaying] = useState(true)

  useEffect(() => {
    let timeout;
    if(isPlaying){
    timeout = setTimeout(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 6000);
  }
    return () => clearTimeout(timeout); 
  }, [currentIndex, isPlaying]);

function togglePlayStop() {
  setIsPlaying(!isPlaying)
};



  return (
    <div  onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)} className="relative cursor-help w-full h-[600px] rounded-lg overflow-hidden ">
   
      {images.map((image, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-500 ease-in-out ${index === currentIndex ? 'opacity-100' : 'opacity-0'}`}
        >
          <Image src={image} alt={`Carousel image ${index}`} layout="fill" objectFit="cover" />
        </div>
      ))}
   <AnimatePresence>
        {isHovered && (
          <motion.div 
            variants={infoVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            transition={springTransition}
            className='absolute bg-white bottom-4  mx-4 text-sm p-4 rounded-lg'
          >
            <p>Pelle is a design studio that has managed to maintain its independence from external investment. Instead, we choose to power our internal projects through collaborative client work.</p>
            <h6 className='font-semibold mt-2'>Undisclosed Client 2023</h6>
          </motion.div>
        )}
      </AnimatePresence>

    </div>
  );
};

export default Carousel;
