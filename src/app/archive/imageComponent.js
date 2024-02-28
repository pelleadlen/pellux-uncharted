" use client";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";

const ImageComponent = ({ media, hoveredItemId, setHoveredItemId }) => {
  return (
    <div className='relative overflow-hidden rounded-b-xl'>
      <Image
        draggable='false'
        alt={media.src}
        src={media.src}
        className=' h-[34rem] object-cover'
      />
    </div>
  );
};

export default ImageComponent;
