"use client";

import { useRef, useState } from "react";

const Play = () => {
  const [shuffle, setShuffle] = useState(0);
  const boundingRef = useRef(null);

  const handleMouseLeave = () => {
    boundingRef.current = null;
  };

  const handleMouseEnter = (e) => {
    boundingRef.current = e.currentTarget.getBoundingClientRect();
  };

  const handleMouseMove = (e) => {
    if (!boundingRef.current) return;
    const rect = boundingRef.current;
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const xPercentage = x / rect.width;
    const yPercentage = y / rect.height;
    const xRotation = (0.5 - xPercentage) * 20;
    const yRotation = (0.5 - yPercentage) * 20;

    const target = e.currentTarget;
    target.style.setProperty("--x-rotation", `${yRotation}deg`);
    target.style.setProperty("--y-rotation", `${xRotation}deg`);
    target.style.setProperty("--x", `${xPercentage * 100}%`);
    target.style.setProperty("--y", `${yPercentage * 100}%`);
  };

  const toggleRotation = () => {
    setShuffle((prevShuffle) => prevShuffle + 180);
  };
  return (
    <div className="flex min-h-screen flex-col items-center justify-center gap-4">
      <div className=" flex flex-col [perspective:800px]">
        <div
          onMouseLeave={handleMouseLeave}
          onMouseEnter={handleMouseEnter}
          onMouseMove={handleMouseMove}
          className=" group relative flex h-[420px] w-[320px] items-center justify-center rounded-2xl bg-primary   transition-all ease-out hover:shadow-2xl hover:[transform:rotateX(var(--x-rotation))_rotateY(var(--y-rotation))_scale(1.05)]"
        >
          <button
            onClick={toggleRotation}
            className=" absolute right-4 top-4 rounded-full bg-secondary px-4 py-2 leading-tight"
          >
            Shuffle
          </button>
          <svg
            className={`transition-transform duration-700 ease-out`}
            style={{ transform: `rotate(${shuffle}deg)` }}
            width="200"
            height="134"
            viewBox="0 0 200 134"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M66.6667 0H133.333V67H200V134H133.333H66.6667H0V67H66.6667V0Z"
              fill="#F1C4D3"
            />
          </svg>
          <div className="pointer-events-none absolute inset-0 transition-colors  group-hover:bg-[radial-gradient(at_var(--x)_var(--y),rgba(255,255,255,0.1)_1%,transparent_99%)]" />
        </div>
      </div>
    </div>
  );
};

export default Play;
