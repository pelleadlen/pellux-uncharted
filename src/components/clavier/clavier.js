'use client'
import {motion} from "framer-motion";
import { useState } from "react";
import "../clavier/clavier.css";
import * as Tone from "tone";
const tones = [

  {
    tone: "F", 
    freq: "F3",
    bgColor: "bg-[#AB0034]", 
    stroke: false, 
    strokeColor: ""
  },
  
  {
    tone: "C", 
    freq: "C3",
    bgColor: "bg-[#FF0000]", 
    stroke: false, 
    strokeColor: ""
  },
  {
    tone: "G", 
    freq: "G3",
    bgColor: "bg-[#FF7F00]", 
    stroke: false, 
    strokeColor: ""
  },
  {
    tone: "D", 
    freq: "D3",
    bgColor: "bg-[#FFFF00]", 
    stroke: false, 
    strokeColor: ""
  },
  {
    tone: "A", 
    freq: "A3",
    bgColor: "bg-[#33CC33]", 
    stroke: false, 
    strokeColor: ""
  },
  
  {
    tone: "E", 
    freq: "E3",
    bgColor: "bg-[#C3F2FF]", 
    stroke: false, 
    strokeColor: ""
  },
  {
    tone: "B", 
    freq: "B3",
    bgColor: "", 
    stroke: true, 
    strokeColor: "border-white"
  },
  {
    tone: "F#/Gb", 
    freq: "F#3",
    bgColor: "bg-[#7F8BFD]", 
    stroke: false, 
    strokeColor: ""
  },
  {
    tone: "Db", 
    freq: "C#3",
    bgColor: "bg-[#9000FF]", 
    stroke: false, 
    strokeColor: ""
  },
  {
    tone: "Ab", 
    freq: "G#3",
    bgColor: "bg-[#BB75FC]", 
    stroke: false, 
    strokeColor: ""
  },
  {
    tone: "Eb", 
    freq: "D#3",
    bgColor: "bg-[#B7468B]", 
    stroke: false, 
    strokeColor: ""
  },
  {
    tone: "Bb", 
    freq: "A#3",
    bgColor: "bg-[#A9677C]", 
    stroke: false, 
    strokeColor: ""
  },


];
  const Clavier = () => {
     const [pressedTone, setPressedTone] = useState('');


     const synth = new Tone.PolySynth(Tone.Synth).toDestination();
     const playTone = async (tone) => {
      await Tone.start();
      synth.triggerAttack(tone.freq);
      setPressedTone(tone.tone);
      console.log(`Playing frequency: ${tone.freq}`); 
  
      // Add a mouseup listener to the window object when a tone is played
      window.addEventListener('mouseup', () => stopTone(tone), { once: true });
  }
  
  const stopTone = (tone) => {
      synth.triggerRelease(tone.freq);
      console.log(`Stopped frequency: ${tone.freq}`); // console logs the frequency being stopped which is tone.freq
  }
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
               <motion.p onMouseDown={() => playTone(tone)} onMouseUp={() => stopTone(tone)} whileTap={{height: "54px", width:"54px"}} whileHover={{height: "60px", width: "60px"}}  className={` ${tone.bgColor} origin-center    ${tone.stroke ? `border-2 ${tone.strokeColor}` : ''}`}>
                {tone.tone}
                </motion.p>
              </div>
            );
          })}
          <Pulse /> 
          
        </div>
        <p>Press character to hear color</p>
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

