"use client";
import Image from "next/image";
import Smiley from "../../../public/svg/SmileyYELLOW.svg";
import Link from "next/link";
import { motion } from "framer-motion";
import { useState } from "react";

const LinkWrapper = ({ name, href, setMenuOpen }) => {
  return (
    <Link
      onClick={() => setMenuOpen(false)}
      href={href}
      className=' py-4 font-display text-5xl  cursor-pointer  '>
      {name}
    </Link>
  );
};

const NavBarMobile = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <header className=' block md:hidden py-4 fixed top-0 z-50 w-full px-4 lg:px-8 '>
      <div className='flex w-full justify-between'>
        <Link href='/'>
          <div className='flex gap-2 items-center pointer-cursor'>
            <motion.div whileHover={{ rotate: 180 }}>
              <Image src={Smiley} alt='smiley face' />
            </motion.div>
            <div className='font-display  tracking-tight'>
              <p>Pelle Adlén</p>
            </div>
          </div>
        </Link>

        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className=' py-2 px-3 rounded-full hover:bg-[#F8F7F7] leading-none text-base bg-surface text-secondary font-display   cursor-pointer  '>
          {!menuOpen ? "Menu" : "Close"}
        </button>
      </div>
      {menuOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: menuOpen ? 1 : 0 }}
          className='bg-white bg-opacity-50 backdrop-blur-md  flex gap-12 items-center justify-start fixed inset-0 -z-10 '>
          <nav class className=' flex flex-col   w-full px-4    '>
            <LinkWrapper href='/' name='Work' />
            <LinkWrapper href='/information' name='Information' />
            <LinkWrapper href='/archive' name='Archive' />
            <LinkWrapper href='/' name='Get in touch' />
          </nav>
        </motion.div>
      )}
    </header>
  );
};

export default NavBarMobile;
