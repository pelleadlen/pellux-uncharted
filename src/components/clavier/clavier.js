'use client'
import {motion} from "framer-motion";
import { useState } from "react";
import "../clavier/clavier.css";
const tones = [
  {
    tone: "G", 
    bgColor: "bg-[#FF7F00]", 
    stroke: false, 
    strokeColor: ""
  },
  {
    tone: "D", 
    bgColor: "bg-[#FFFF00]", 
    stroke: false, 
    strokeColor: ""
  },
  {
    tone: "A", 
    bgColor: "bg-[#33CC33]", 
    stroke: false, 
    strokeColor: ""
  },
  {
    tone: "E", 
    bgColor: "bg-[#C3F2FF]", 
    stroke: false, 
    strokeColor: ""
  },
  {
    tone: "B", 
    bgColor: "", 
    stroke: true, 
    strokeColor: "border-white"
  },
  {
    tone: "F#/Gb", 
    bgColor: "bg-[#7F8BFD]", 
    stroke: false, 
    strokeColor: ""
  },  {
    tone: "Db", 
    bgColor: "bg-[#9000FF]", 
    stroke: false, 
    strokeColor: ""
  }, {
    tone: "Ab", 
    bgColor: "bg-[#BB75FC]", 
    stroke: false, 
    strokeColor: ""
  },{
    tone: "Eb", 
    bgColor: "bg-[#B7468B]", 
    stroke: false, 
    strokeColor: ""
  },
  {
    tone: "Bb", 
    bgColor: "bg-[#A9677C]", 
    stroke: false, 
    strokeColor: ""
  },
  {
    tone: "F", 
    bgColor: "bg-[#AB0034]", 
    stroke: false, 
    strokeColor: ""
  },
  {
    tone: "C", 
    bgColor: "bg-[#FF0000]", 
    stroke: false, 
    strokeColor: ""
  }]

  const Clavier = () => {
     const [pressedTone, setPressedTone] = useState('');
  
    return (
<div className="flex flex-col justify-center items-center gap-24">
        <div className="note-wrapper">
          {tones.map((tone, index) => {
            return (
              <div
                key={index}
                className="note"
                style={{
                  "--i": index + 1,
                }}
              >
               <motion.p whileTap={{height: "54px", width:"54px"}} whileHover={{height: "60px", width: "60px"}} onClick={() => setPressedTone(tone.tone)} className={` ${tone.bgColor} origin-center    ${tone.stroke ? `border-2 ${tone.strokeColor}` : ''}`}>
                {tone.tone}
                </motion.p>
              </div>
            );
          })}
          <Pulse /> 
          
        </div>
        <p>Press character to hear color: {pressedTone}</p>
        </div>
    );
  }

  export default Clavier;




const Pulse = () => {

const sequence = {
    animate: {
        scale: 1.3,
        opacity: 0.2,
        transition: {
            repeat: Infinity,
            repeatType: "reverse",
            duration: 2
        
        },

    },
 
}

const sequenceDelayed = {

        animate: {
            scale: 1.3,
            opacity: 0.1,
            transition: {
                repeat: Infinity,
                repeatType: "reverse",
                duration: 2,
                delay: 0.2
            
            },
    
        },
}

    return (
         <div className="relative flex items-center justify-center ">
             <div className="w-12 h-12 absolute bg-white rounded-full"></div>
             <motion.div variants={sequence} animate="animate" initial="init" 
                className="w-24 h-24 absolute bg-white opacity-10  rounded-full"
                
             />
               <motion.div variants={sequenceDelayed} animate="animate" initial="init"
                className=" w-40 h-40 absolute bg-white opacity-10 rounded-full"
                
              />  
        </div>
     );
}

