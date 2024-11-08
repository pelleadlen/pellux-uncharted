"use client";

import { Switch } from "react-aria-components";
import { FiSun } from "react-icons/fi";
import { FiMoon } from "react-icons/fi";
import { useState, useEffect } from "react";

const DarkModeToggle = () => {
  // const [darkMode, setDarkMode] = useState(false);

  // useEffect(() => {
  //     if (darkMode) {
  //       document.body.classList.add('dark');
  //     } else {
  //       document.body.classList.remove('dark');
  //     }
  //   }, [darkMode]);

  //   const handleToggle = () => {
  //     setDarkMode(!darkMode);
  //   };

  return (
    <Switch isSelected={darkMode} onChange={handleToggle} className="group">
      <div className=" relative flex w-14 items-center rounded-full border  border-[#373734]   bg-white p-1  group-data-[selected]:bg-[#373734]">
        <div className="h-6 w-6 rounded-full bg-[#373734] shadow transition-all duration-500 group-data-[selected]:ml-6  group-data-[pressed]:w-7 group-data-[selected]:bg-white"></div>
        <FiSun className="absolute left-2 h-4 w-4 text-white " fill="white" />
        <FiMoon
          className="absolute right-[6px] h-4 w-4 text-[#373734]"
          fill="#373734"
        />
      </div>
    </Switch>
  );
};

export default DarkModeToggle;
