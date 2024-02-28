import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { useState, useRef, useEffect } from "react";
import { IoPlaySharp } from "react-icons/io5";
import { IoPauseSharp } from "react-icons/io5";

const SlideShow = ({ images, height }) => {
  let [count, setCount] = useState(0);
  const parentRef = useRef();
  const [parentWidth, setParentWidth] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [firstLoad, setFirstLoad] = useState(true);

  useEffect(() => {
    if (parentRef.current) {
      setParentWidth(parentRef.current.offsetWidth);
    }
    setFirstLoad(false);
  }, [parentRef.current]);

  useEffect(() => {
    if (isAutoPlaying) {
      const interval = setInterval(() => {
        setCount((prevCount) => (prevCount + 1) % images.length);
      }, 5000);
      return () => clearInterval(interval);
    }
  }, [isAutoPlaying]);

  const togglePlay = () => {
    setIsAutoPlaying(!isAutoPlaying);
  };

  return (
    <div className={height}>
      <div className=' overflow-hidden w-full h-full'>
        <div ref={parentRef} className='flex relative '>
          <button
            onClick={togglePlay}
            className='absolute top-2 grid place-items-center h-10 w-10 rounded-full right-2 z-50 bg-black hover:bg-primary'>
            {isAutoPlaying ? (
              <IoPauseSharp className='text-white' />
            ) : (
              <IoPlaySharp className='text-white' />
            )}
          </button>

          <AnimatePresence>
            <motion.div
              className='absolute'
              initial={{ x: firstLoad ? 0 : parentWidth }}
              exit={{ x: -parentWidth }}
              animate={{ x: 0 }}
              transition={{ duration: 1 }}
              key={count}>
              <Image
                className='h-[34rem] object-cover relative'
                src={images[Math.abs(count % images.length)].src}
                alt={`Slideshow image ${count + 1}`}
              />
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
};
export default SlideShow;
