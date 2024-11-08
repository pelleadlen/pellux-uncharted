import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import ContactForm from "../contact/contactForm";
import { Toaster, toast } from "react-hot-toast";
import Image from "next/image";
import reach from "../../../public/svg/reach.svg";
import { FiArrowUp } from "react-icons/fi";

const HeroText = () => {
  const [openContact, setOpenContact] = useState(false);
  return (
    <>
      <div className="relative grid h-[60dvh]  w-full grid-cols-1 content-center gap-2  p-4  text-2xl md:h-[40vh] lg:grid-cols-12 ">
        <h1 className="col-span-1 md:col-span-2">Pelle Adlén</h1>
        <div className="col-span-1 text-balance md:col-span-4">
          <h2 className="">
            A Product Designer & Design Engineer from Sweden, committed to
            creating meaningful products and user-friendly experiences that
            speak to both mind and heart.
          </h2>
          <button
            className="cursor-pointer py-2"
            onClick={() => setOpenContact(!openContact)}
          >
            →Get in Touch
          </button>
        </div>
        <div className="  col-start-12 hidden justify-end  md:flex"></div>
      </div>

      <AnimatePresence>
        {openContact && (
          <>
            <ContactForm toast={toast} setOpenContact={setOpenContact} />
          </>
        )}
      </AnimatePresence>
      <Toaster position="top-center" />
      <div
        onClick={() => setOpenContact(!openContact)}
        className="absolute right-1/4 flex gap-1 "
      >
        <Image src={reach} alt="reach out symbol" />
        <motion.button
          whileHover={{ scale: 1.01 }}
          whileTap={{ scale: 0.95 }}
          className="flex h-fit items-center gap-3 rounded-md bg-[#373734] px-4 py-3 leading-none text-white shadow-[4px_4px_4px_rgba(0,0,0,0,16)] "
        >
          Leave a message...
          <span>
            <FiArrowUp />
          </span>
        </motion.button>
      </div>
    </>
  );
};

export default HeroText;
