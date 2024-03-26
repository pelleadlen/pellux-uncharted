import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import ContactForm from "./contact/contactForm";
import { Toaster, toast } from "react-hot-toast";
import Image from "next/image";
import reach from "../../public/svg/reach.svg";
import { FiArrowUp } from "react-icons/fi";
import DarkModeToggle from "./darkmode/darkModeToggle";

const HeroText = () => {
    const [openContact, setOpenContact] = useState(false);
  return (
    <>
    <div className="w-full h-[40vh] relative grid grid-cols-12 text-2xl gap-2 p-4 ">
        <h1 className="col-span-2">Pelle Adlén</h1>
        <div className="col-span-4 text-balance">
        <h2 className="">A Product Designer from Sweden, committed to creating meaningful products and user-friendly experiences that speak to both mind and heart.</h2>
<button className="py-2 cursor-pointer"  onClick={() => setOpenContact(!openContact)}>→Get in Touch</button>  
        </div>
   <DarkModeToggle />
    </div>
    <AnimatePresence>
        {openContact && (
          <>
            <ContactForm toast={toast} setOpenContact={setOpenContact} />
          </>
        )}
      </AnimatePresence>
      <Toaster position="top-center" />
      <div className="flex gap-1 absolute right-1/4 ">
      <Image  src={reach} alt="reach out symbol"/>
      <motion.button onClick={() => setOpenContact(!openContact)} whileHover={{scale:1.01}} whileTap={{scale: 0.95}} className="h-fit flex shadow-[4px_4px_4px_rgba(0,0,0,0,16)] items-center gap-3 bg-[#373734] text-white py-3 px-4 rounded-md leading-none ">Leave a message...<span><FiArrowUp /></span></motion.button>
      </div>
    </>
  )
}

export default HeroText