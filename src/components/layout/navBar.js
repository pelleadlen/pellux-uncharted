"use client";
import Image from "next/image";
import Smiley from "../../../public/svg/SmileyYELLOW.svg";
import Link from "next/link";
import { motion } from "framer-motion";
import { useState } from "react";



const navLinks = [
  {
    title: "Information",
    href: "/information",
  },
  { title: "Work", href: "/" },

];



const NavBar = () => {

  const [isHovered, setIsHovered] = useState(false);

  return (
    <>
      <header className="absolute  top-0  w-full cursor-pointer px-4 py-4 ">
        <nav className=" flex w-full items-center justify-between">
          <Link
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            title="Home"
            className="pointer-cursor "
            href="/"
          >
            <motion.div animate={{ rotate: isHovered ? 180 : 0 }}>
              <Image src={Smiley} alt="smiley face" />
            </motion.div>
          
          </Link>

          {navLinks.map((link, index) => (
    <Link
        title={link.title}
        key={index}
        href={link.href}
    >
        {link.title}  
    </Link>
))}

        </nav>
      </header>
   
    </>
  );
};

export default NavBar;
