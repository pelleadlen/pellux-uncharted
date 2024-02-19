"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import img from "../../public/images/charwood.png";

const Test = (props) => {
  return (
    <div className={props.className}>
      <Link href='/charlie'>
        <motion.div layoutId='image'>
          <div className='w-full'>
            <Image src={img} alt='charwood' />
          </div>
        </motion.div>
      </Link>
    </div>
  );
};
export default Test;
