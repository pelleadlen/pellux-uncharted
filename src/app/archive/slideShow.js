import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { useState, useRef, useEffect } from "react";
import { IoPlaySharp } from "react-icons/io5";
import { IoPauseSharp } from "react-icons/io5";

const SlideShow = ({ images, height, startDelay }) => {
  let [count, setCount] = useState(0);
  const parentRef = useRef();
  const [parentWidth, setParentWidth] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true); // Initially set to true
  const [firstLoad, setFirstLoad] = useState(true);

  useEffect(() => {
    if (parentRef.current) {
      setParentWidth(parentRef.current.offsetWidth);
    }
    setFirstLoad(false);
  }, []);

  useEffect(() => {
    const startTimer = setTimeout(() => {
      setIsAutoPlaying(true);
    }, startDelay);

    return () => clearTimeout(startTimer);
  }, [startDelay]);

  useEffect(() => {
    let interval;

    if (isAutoPlaying) {
      interval = setInterval(() => {
        setCount((prevCount) => (prevCount + 1) % images.length);
      }, startDelay);
    }

    return () => clearInterval(interval);
  }, [isAutoPlaying, count, images.length, startDelay]);

  const togglePlay = () => {
    setIsAutoPlaying(!isAutoPlaying);
  };

  return (
    <div className={height}>
      <div className="h-full w-full overflow-hidden">
        <div ref={parentRef} className="relative flex ">
          <button
            onClick={togglePlay}
            className="absolute right-2 top-2 z-50 grid h-10 w-10 place-items-center rounded-full bg-black hover:bg-primary"
          >
            {isAutoPlaying ? (
              <IoPauseSharp className="text-white" />
            ) : (
              <IoPlaySharp className="text-white" />
            )}
          </button>

          <AnimatePresence>
            <motion.div
              className="absolute"
              initial={{ x: firstLoad ? 0 : parentWidth }}
              exit={{ x: -parentWidth }}
              animate={{ x: 0 }}
              transition={{ duration: 1 }}
              key={count}
            >
              <Image
                className="relative h-[34rem] object-cover"
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
