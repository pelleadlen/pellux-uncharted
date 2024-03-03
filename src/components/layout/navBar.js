"use client";
import Image from "next/image";
import Smiley from "../../../public/svg/SmileyYELLOW.svg";
import FramerMagnetic from "../framerMagnetic";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import ContactForm from "../contactForm";

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
  const [openContact, setOpenContact] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  return (
    <>
      <header className="absolute  top-0  w-full cursor-pointer px-4 py-4 font-display text-base lg:px-8">
        <nav className=" flex w-full items-center justify-between">
          <Link
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            title="Home"
            className="pointer-cursor  flex items-center gap-2"
            href="/"
          >
            <motion.div animate={{ rotate: isHovered ? 180 : 0 }}>
              <Image src={Smiley} alt="smiley face" />
            </motion.div>
            <div className="font-display tracking-tight">
              <p>Pelle Adlén</p>
            </div>
          </Link>
          {navLinks.map((link, index) => {
            return (
              <DesktopLink title={link.title} key={index} href={link.href} />
            );
          })}
          <motion.button
            whileTap={{ scale: 0.9 }}
            onClick={() => setOpenContact(!openContact)}
            className="flex cursor-pointer items-center gap-2 rounded-full bg-surface px-3 py-2 font-display text-secondary hover:bg-[#F8F7F7]"
          >
            Get in Touch
          </motion.button>
        </nav>
      </header>
      <AnimatePresence>
        {openContact && (
          <>
            <ContactForm setOpenContact={setOpenContact} />
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default NavBar;
