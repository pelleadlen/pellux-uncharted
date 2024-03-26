import { MdLightMode } from "react-icons/md";
import { MdDarkMode } from "react-icons/md";
import {motion} from "framer-motion";
import { useState } from "react";


{/* <MdLightMode className=" mix-blend-exclusion absolute left-3 text-white"/>
<MdDarkMode className=" mix-blend-exclusion absolute right-3 text-white"/> */}
const DarkModeToggle = () => {
    const [toggle, setToggle] = useState(false);
  return (
    <div className="">
    <div onClick={() => setToggle(!toggle)} className="flex gap-2 relative items-center border border-black justify-end bg-white w-14 p-1 rounded-full  ">
        
 <motion.div layoutId="toggle" className="h-6 w-6 bg-black rounded-full  "/> 

    </div>
    </div>
  )
}

export default DarkModeToggle