"use client";
import Image from "next/image";
import Smiley from "../../../public/svg/SmileyYELLOW.svg";
import FramerMagnetic from "../framerMagnetic";
import Link from "next/link";
import { motion } from "framer-motion";
import { useState } from "react";

const LinkWrapper = ({ name, href }) => {
  return (
    <FramerMagnetic>
      <Link href={href} className=' p-2  '>
        {name}
      </Link>
    </FramerMagnetic>
  );
};

const NavBar = () => {
  const [isHovered, setIsHovered] = useState(false);
  return (
    <header className='hidden md:block text-base font-display cursor-pointer  py-4 absolute top-0 z-50 w-full px-4 lg:px-8 '>
      <nav class className='flex justify-between w-full items-center  '>
        <Link href='/'>
          <div
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            title='Home'
            className='flex gap-2 items-center pointer-cursor'>
            <motion.div animate={{ rotate: isHovered ? 180 : 0 }}>
              <Image src={Smiley} alt='smiley face' />
            </motion.div>
            <div className='font-display  tracking-tight'>
              <p>Pelle Adlén</p>
            </div>
          </div>
        </Link>
        <LinkWrapper href='/information' name='Information' />
        <LinkWrapper href='/' name='Work' />
        <LinkWrapper href='/archive' name='Archive' />
        <a
          href='mailto:pelleadlen@gmail.com'
          title='pelleadlen@gmail.com'
          className=' py-2 px-3 rounded-full hover:bg-[#F8F7F7] leading-none text-base bg-surface text-secondary font-display   cursor-pointer  '>
          Get in touch
        </a>
      </nav>
    </header>
  );
};

export default NavBar;
