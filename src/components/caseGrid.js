import Image from "next/image";
import designsystem from "../../public/images/designsys.png";
import me from "../../public/images/pelluxblank.png";
import Charlie from "../../public/images/CharlieThumbnail.png";
import Fourtrack from "../../public/images/fourtrak.png";
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
    tag: "USER RESEARCH",
    title: "MEMORISELY",
  },
  {
    key: "two",
    colSpan: "col-span-2",
    image: Charlie,
    description: "description",
    path: "/charlie",
    tag: "PRODUCT DESIGN",
    title: "CHARLIE",
  },
  {
    key: "three",
    colSpan: "col-span-2",
    image: Fourtrack,
    description: "description",
    path: "/charlie",
    tag: "PRODUCT DESIGN",
    title: "FOURTRACK",
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
  console.log(hoveredKey)

  return (
    <section className='py-4 mt-16  mx-auto h-full grid grid-cols-1 md:grid-cols-3 gap-4  '>
      {selectedWork.map(
        ({ key, colSpan, image, description, path, title, tag }) => (
          <Link
          onClick={() => console.log("hej")}
          key={key}
            onMouseEnter={() => setHoveredKey(key)}
            onMouseLeave={() => setHoveredKey(null)}
            className={`  rounded-2xl ${colSpan} overflow-hidden relative`}
            href={`${path}`}>

            <div
              className='absolute z-10 text-sm text-gray-500 top-4 left-4 flex gap-2'>
                
              <p className='py-1 tracking-tighter px-2 bg-white rounded-full'>
                {title}
              </p>
              <p className=' py-1 tracking-tighter px-2 bg-white rounded-full'>
                {tag}
              </p>
                
            </div>

<motion.div animate={{scale: hoveredKey === key ? 1.02 : 1}} transition={{duration: 0.6}} >
            <Image

              alt={description}
              className={`object-cover md:${colSpan} aspect-square md:aspect-auto `}
              style={{ maxWidth: "100%", height: "100%" }}
              src={image}
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
