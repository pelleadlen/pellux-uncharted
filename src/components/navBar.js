"use client"
import Image from "next/image";
import Smiley from "../../public/svg/Smiley.svg";
import {motion, useScroll, useTransform} from "framer-motion";

const Link = ({ name }) => {
  return (
    <a className=' p-2 text-lg md:text-2xl tracking-tight hover:text-gray-500 cursor-pointer  '>
      {name}
    </a>
  );
};

const NavBar = () => {
  const { scrollY } = useScroll();
  const slowerRotation = useTransform(scrollY,[0,1000],[0,360],{ clamp: false });
  return (
    <header className=" py-4 fixed w-full px-4 lg:px-8">
      <nav class className='flex justify-between items-center  '>
        <motion.div style={{ rotate: slowerRotation }}>

        <Image className="cursor-pointer w-5 h-5 md:w-8 md:h-8" src={Smiley} alt="smiley face" />
        </motion.div>
        <div className='flex  md:gap-4'>
          <Link name='Information' />
          <Link name='Work' />
          <Link name='Get in touch' />
        </div>
      </nav>
    </header>
  );
};

export default NavBar;
