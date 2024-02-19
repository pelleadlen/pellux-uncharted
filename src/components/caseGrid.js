"use client";
import Image from "next/image";
import designsystem from "../../public/images/designsys.png";
import me from "../../public/images/pelluxblank.png";
import Charlie from "../../public/images/charwood.png";
import Fourtrack from "../../public/images/130.png";
import Link from "next/link";
import { motion } from "framer-motion";
import { useState } from "react";

const selectedWork = [
  {
    key: "one",
    colSpan: "col-span-1",
    image: me,
    description: "description",
    path: "/charlie",
    tag: "User Research",
    title: "Memorisely",
  },
  {
    key: "two",
    colSpan: "col-span-2",
    image: Charlie,
    description: "description",
    path: "/charlie",
    tag: "Product Design",
    title: "Charlie",
  },
  {
    key: "three",
    colSpan: "col-span-2",
    image: Fourtrack,
    description: "description",
    path: "/charlie",
    tag: "Product Design",
    title: "Fourtrack",
  },
  {
    key: "four",
    colSpan: "col-span-1",
    image: designsystem,
    description: "description",
    path: "/charlie",
    tag: "DESIGNSYSTEM",
    title: "CHARLIE",
  },
];

const CaseGrid = () => {
  const [hoveredKey, setHoveredKey] = useState(null);

  return (
    <section className='py-4 mx-auto flex flex-col md:grid grid-cols-1 md:grid-cols-3 gap-4  '>
      {selectedWork.map(
        ({ key, colSpan, image, description, path, title, tag }) => (
          <Link
            onClick={() => console.log("hej")}
            key={key}
            onMouseEnter={() => setHoveredKey(key)}
            onMouseLeave={() => setHoveredKey(null)}
            className={`  rounded-2xl ${colSpan} overflow-hidden relative`}
            href={`${path}`}>
            <div className='absolute font-display z-10 text-sm text-white bottom-4 left-4 flex gap-2'>
              <p className='py-1 px-2 bg-[#555555] bg-opacity-25 backdrop-blur-xl   rounded-full'>
                {title}
              </p>
              <p className=' py-1  px-2 bg-[#555555] bg-opacity-25  backdrop-blur-xl   rounded-full'>
                {tag}
              </p>
            </div>

            <motion.div
              animate={{ scale: hoveredKey === key ? 1.02 : 1 }}
              transition={{ duration: 0.6 }}>
              <motion.div
                animate={{ opacity: hoveredKey === key ? 1 : 0.2 }}
                className='absolute inset-0 bg-opacity-20 bg-black '
              />
              <Image
                alt={description}
                className={`object-cover   md:${colSpan} aspect-square md:aspect-auto `}
                src={image}
                width='auto'
                id={key}
              />
            </motion.div>
          </Link>
        )
      )}
    </section>
  );
};

export default CaseGrid;
