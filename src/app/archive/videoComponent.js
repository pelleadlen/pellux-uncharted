"use client";
import Video from "next-video";
import { AnimatePresence, motion } from "framer-motion";

const VideoComponent = ({ media, hoveredItemId, setHoveredItemId }) => {
  return (
    <div className='relative overflow-hidden rounded-b-xl'>
      <Video
        autoPlay
        muted
        loop
        playsInline
        controls={false}
        src={media.src}
        className=' h-[34rem] w-full object-cover'
      />
    </div>
  );
};
export default VideoComponent;
