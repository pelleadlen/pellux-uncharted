"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import img from "../../../public/images/charwood.png";

export default function Charlie() {
  return (
    <>
      <div className='flex min-h-screen justify-center items-center flex-col mx-4 md:mx-8'>
        <motion.h1
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className='font-display text-9xl tracking-tighter'>
          Charlie
        </motion.h1>
        <motion.div layoutId='image'>
          <Image src={img} alt='charwood' />
        </motion.div>
        <Link href='/'>
          <p className='mt-8 py-2 px-4 rounded-md hover:bg-slate-500 bg-slate-200'>
            Return
          </p>
        </Link>
      </div>
    </>
  );
}
