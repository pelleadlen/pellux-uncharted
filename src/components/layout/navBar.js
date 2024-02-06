"use client";
import Image from "next/image";
import Smiley from "../../../public/svg/SmileyYELLOW.svg";
import FramerMagnetic from "../framerMagnetic";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";

const navLinks = [
  { title: "Information", href: "/information" },
  { title: "Work", href: "/" },
  { title: "Archive", href: "/archive" },
];

const DesktopLink = ({ title, href }) => (
  <FramerMagnetic>
    <Link href={href}>{title}</Link>
  </FramerMagnetic>
);

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  return (
    <header className='text-base  font-display cursor-pointer py-4 absolute top-0 z-50 w-full px-4 lg:px-8'>
      <nav className=' hidden md:flex justify-between w-full items-center'>
        <Link
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          title='Home'
          className='flex gap-2 z-50 items-center pointer-cursor'
          href='/'>
          <motion.div animate={{ rotate: isHovered ? 180 : 0 }}>
            <Image src={Smiley} alt='smiley face' />
          </motion.div>
          <div className='font-display tracking-tight'>
            <p>Pelle Adlén</p>
          </div>
        </Link>
        {navLinks.map((link, index) => {
          return (
            <DesktopLink title={link.title} key={index} href={link.href} />
          );
        })}
        <a
          href='mailto:pelleadlen@gmail.com'
          title='pelleadlen@gmail.com'
          className='py-2 px-3 rounded-full hover:bg-[#F8F7F7] leading-none text-base bg-surface text-secondary font-display cursor-pointer'>
          Get in touch
        </a>
      </nav>
      <nav className=' flex md:hidden justify-between w-full items-center'>
        <Link
          title='Home'
          className='flex gap-2 items-center pointer-cursor'
          href='/'>
          <motion.div animate={{ rotate: isHovered ? 180 : 0 }}>
            <Image src={Smiley} alt='smiley face' />
          </motion.div>
          <div className='font-display tracking-tight'>
            <p>Pelle Adlén</p>
          </div>
        </Link>
        <button
          onClick={() => setIsOpen(!isOpen)}
          className='py-2 px-3 rounded-full  leading-none text-base bg-surface text-secondary font-display cursor-pointer'>
          {isOpen ? "Close" : "Menu"}
        </button>
      </nav>
      <AnimatePresence>
        {isOpen && <DropDown setIsOpen={setIsOpen} />}
      </AnimatePresence>
    </header>
  );
};

export default NavBar;

const DropDown = ({ setIsOpen }) => {
  const menuVars = {
    initial: { opacity: 0 },
    animate: {
      opacity: 1,
      transition: {
        duration: 0.1,
      },
    },
    exit: {
      opacity: 0,
      transition: {
        duration: 0.2,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  };

  const stagger = {
    initial: {
      transition: {
        staggerChildren: 0.09,
      },
    },
    open: {
      transition: {
        staggerChildren: 0.09,
      },
    },
  };

  return (
    <motion.div
      variants={menuVars}
      initial='initial'
      animate='animate'
      exit='exit'
      className='block 
       md:hidden fixed top-0 -z-20 left-0 origin-top w-full h-screen backdrop-blur-lg      bg-opacity-50 bg-white'>
      <motion.nav
        variants={stagger}
        initial='initial'
        animate='open'
        transition='transition'
        className='flex  h-full p-4 justify-center   flex-col gap-8'>
        {navLinks.map((link, index) => {
          return (
            <>
              <div className='overflow-hidden'>
                <MobileLink
                  setIsOpen={setIsOpen}
                  title={link.title}
                  href={link.href}
                  key={index}
                />
              </div>
            </>
          );
        })}
      </motion.nav>
    </motion.div>
  );
};

const MobileLink = ({ title, href, setIsOpen }) => {
  const mobileLinkVars = {
    initial: {
      y: "30vh",
      transition: {
        duration: 0.3,
        ease: [0.37, 0, 0.63, 1],
      },
    },
    open: {
      y: 0,
      transition: {
        duration: 0.7,
        ease: [0, 0.55, 0.45, 1],
      },
    },
  };

  return (
    <motion.div variants={mobileLinkVars} className='text-6xl  font-display'>
      <Link onClick={() => setIsOpen(false)} href={href}>
        {title}
      </Link>
    </motion.div>
  );
};
