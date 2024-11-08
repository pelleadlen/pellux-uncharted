"use client";

import { useState, useRef, useCallback } from "react";
import { motion, useAnimationFrame } from "framer-motion";

const Page = () => {
  const [rotation, setRotation] = useState(0);
  const [isRunning, setIsRunning] = useState(false);
  const [elapsedTime, setElapsedTime] = useState(0);
  const previousTimeRef = useRef(0);
  const isDraggingRef = useRef(false);
  const clockRef = useRef(null);
  const lastAngleRef = useRef(0);
  const rotationCountRef = useRef(0);

  useAnimationFrame((t) => {
    if (isRunning && !isDraggingRef.current) {
      if (previousTimeRef.current === 0) {
        previousTimeRef.current = t;
        return;
      }
      const deltaTime = t - previousTimeRef.current;
      const newElapsedTime = elapsedTime + deltaTime;
      setElapsedTime(newElapsedTime);
      setRotation((newElapsedTime / 1000) * 6); // 6 degrees per second
      previousTimeRef.current = t;
    }
  });

  const handleStart = () => {
    setIsRunning(true);
    previousTimeRef.current = 0;
  };

  const handleStop = () => {
    setIsRunning(false);
    previousTimeRef.current = 0;
  };

  const handleReset = () => {
    setIsRunning(false);
    setElapsedTime(0);
    setRotation(0);
    previousTimeRef.current = 0;
    rotationCountRef.current = 0;
    lastAngleRef.current = 0;
  };

  const handleMouseDown = useCallback(() => {
    isDraggingRef.current = true;
  }, []);

  const handleMouseUp = useCallback(() => {
    isDraggingRef.current = false;
    if (isRunning) {
      previousTimeRef.current = 0;
    }
  }, [isRunning]);

  const handleMouseMove = useCallback((e) => {
    if (isDraggingRef.current && clockRef.current) {
      const rect = clockRef.current.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;
      const angle = Math.atan2(e.clientY - centerY, e.clientX - centerX);
      let newAngle = (angle * 180) / Math.PI + 90;
      if (newAngle < 0) newAngle += 360;

      // Detect full rotations
      if (newAngle < 90 && lastAngleRef.current > 270) {
        rotationCountRef.current++;
      } else if (newAngle > 270 && lastAngleRef.current < 90) {
        rotationCountRef.current--;
      }

      lastAngleRef.current = newAngle;

      const totalRotation = newAngle + rotationCountRef.current * 360;
      setRotation(totalRotation);
      setElapsedTime((totalRotation / 6) * 1000);
    }
  }, []);

  return (
    <div className="flex h-screen flex-col items-center justify-center">
      <motion.div
        ref={clockRef}
        className="relative h-52 w-52 cursor-move rounded-full bg-slate-600"
        style={{ rotate: `${rotation}deg` }}
        onMouseDown={handleMouseDown}
        onMouseUp={handleMouseUp}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseUp}
      >
        <span className="absolute left-1/2 top-0 h-40 w-2 -translate-x-1/2 -translate-y-1/2 bg-white" />
      </motion.div>
      <Timer
        elapsedTime={elapsedTime}
        isRunning={isRunning}
        onStart={handleStart}
        onStop={handleStop}
        onReset={handleReset}
      />
    </div>
  );
};

export default Page;

const Timer = ({ elapsedTime, isRunning, onStart, onStop, onReset }) => {
  const seconds = Math.floor(elapsedTime / 1000);

  return (
    <div className="flex flex-col items-center space-y-4">
      <div className="text-4xl font-bold">{seconds} seconds</div>
      <div className="flex space-x-2">
        <button
          className="rounded bg-green-500 px-4 py-2 text-white"
          onClick={onStart}
          disabled={isRunning}
        >
          Start
        </button>
        <button
          className="rounded bg-red-500 px-4 py-2 text-white"
          onClick={onStop}
          disabled={!isRunning}
        >
          Stop
        </button>
        <button
          className="rounded bg-blue-500 px-4 py-2 text-white"
          onClick={onReset}
        >
          Reset
        </button>
      </div>
    </div>
  );
};
