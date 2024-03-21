"use client";
import Image from "next/image";
import Smiley from "../../../public/svg/SmileyYELLOW.svg";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import ContactForm from "../contactForm";
import { Toaster, toast } from "react-hot-toast";

const navLinks = [
  {
    title: "Information",
    href: "/information",
  },
  { title: "Work", href: "/" },

];



const NavBar = () => {
  const [openContact, setOpenContact] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  return (
    <>
      <header className="absolute  top-0  w-full cursor-pointer px-2 py-2 ">
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
            <ContactForm toast={toast} setOpenContact={setOpenContact} />
          </>
        )}
      </AnimatePresence>
      <Toaster position="top-center" />
    </>
  );
};

export default NavBar;
