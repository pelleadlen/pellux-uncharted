"use client";
import { motion } from "framer-motion";
import { useRef, useState } from "react";

export default function FramerMagnetic({ children }) {
  const ref = useRef(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const mouseMove = (e) => {
    const { clientX, clientY } = e;

    const { width, height, left, top } = ref.current.getBoundingClientRect();
    let x = clientX - (left + width / 2);
    let y = clientY - (top + height / 2);
    // x = Math.sign(x) * Math.sqrt(Math.abs(x));
    // y = Math.sign(y) * Math.sqrt(Math.abs(y));
    setPosition({ x, y });
  };

  const mouseLeave = () => {
    setPosition({ x: 0, y: 0 });
  };

  const { x, y } = position;
  return (
    <motion.div
      className="pointer-cursor"
      transition={{ type: "spring", stiffness: 300, damping: 10, mass: 0.1 }}
      animate={{ x, y }}
      onMouseMove={mouseMove}
      onMouseLeave={mouseLeave}
      ref={ref}
    >
      {children}
    </motion.div>
  );
}
