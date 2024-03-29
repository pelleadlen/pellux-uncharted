'use client';


import { Switch } from "react-aria-components";
import { FiSun } from "react-icons/fi";
import { FiMoon } from "react-icons/fi";
import {useState, useEffect} from "react";




const DarkModeToggle = () => {

    const [darkMode, setDarkMode] = useState(false);

    useEffect(() => {
        if (darkMode) {
          document.body.classList.add('dark');
        } else {
          document.body.classList.remove('dark');
        }
      }, [darkMode]);
    

      const handleToggle = () => {
        setDarkMode(!darkMode);
      };

  return (

<Switch isSelected={darkMode}  onChange={handleToggle} className="group">
    <div className=" w-14 p-1 bg-white group-data-[selected]:bg-[#373734] rounded-full relative  flex   items-center border  border-[#373734]">
        <div className="w-6 h-6 bg-[#373734] group-data-[pressed]:w-7 group-data-[selected]:bg-white transition-all group-data-[selected]:ml-6 shadow  rounded-full duration-500"></div>
        <FiSun className="absolute w-4 h-4 left-2 text-white " fill="white" />
        <FiMoon className="absolute w-4 h-4 right-[6px] text-[#373734]" fill="#373734" />
    </div>

    </Switch>

  )
}

export default DarkModeToggle