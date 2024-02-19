"use client";
import CaseGrid from "@/components/caseGrid";
import img from "../../public/images/charwood.png";
import ContactSection from "@/components/contactSection";
import Shortcuts from "@/components/shortcuts";
import Image from "next/image";
import Test from "@/components/test";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <>
      <motion.main
        exit={{ opacity: 0 }}
        transition={{ duration: 3 }}
        className='flex  min-h-screen flex-col mx-4 md:mx-8 '>
        <div className=' pt-96 pb-12  gap-4    '>
          <h1 className=' max-w-4xl text-2xl  md:text-4xl font-normal tracking-[-0.055em]    '>
            A Product Designer from Sweden, committed to creating meaningful
            products and user-friendly experiences that speak to both heart and
            mind.
          </h1>
        </div>
        <div className='grid grid-cols-1 lg:grid-cols-3 gap-6 mt-6'>
          <Shortcuts />

          <Test className='col-span-2' />
        </div>
        {/* <CaseGrid /> */}
        <ContactSection />
      </motion.main>
    </>
  );
}
