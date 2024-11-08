"use client";
import Image from "next/image";
import Smiley from "../../../public/svg/SmileyYELLOW.svg";
import Link from "next/link";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";

const navLinks = [
  {
    title: "Information",
    href: "/information",
  },
  { title: "Play", href: "/play" },
];

const NavBar = () => {
  const [isHovered, setIsHovered] = useState(false);
  const [shouldShowActions, setShouldShowActions] = useState(false);
  const [lastYPos, setLastYPos] = useState(0);
  useEffect(() => {
    function handleScroll() {
      const yPos = window.scrollY;
      const isScrollingUp = yPos < lastYPos;
      setShouldShowActions(isScrollingUp);
      setLastYPos(yPos);
    }
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll, false);
    };
  }, [lastYPos]);

  return (
    <>
      <motion.header
        initial={{ opacity: 0 }}
        animate={{ opacity: shouldShowActions || window.scrollY === 0 ? 1 : 0 }}
        transition={{ opacity: { duration: 0.2 } }}
        className="fixed top-0 z-20  w-full cursor-pointer  px-4 py-4 dark:bg-[#101010] dark:text-[#fefefe] "
      >
        <nav className=" flex w-full items-center justify-between">
          <Link
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            title="Home"
            className="pointer-cursor "
            href="/"
          >
            <motion.div
              animate={{
                rotate: isHovered ? 180 : 0,
              }}
            >
              <Image src={Smiley} alt="smiley face" />
            </motion.div>
          </Link>

          {navLinks.map((link, index) => (
            <Link title={link.title} key={index} href={link.href}>
              {link.title}
            </Link>
          ))}
        </nav>
      </motion.header>
    </>
  );
};

export default NavBar;
