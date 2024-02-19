"use client";
import { useState, useEffect } from "react";

const LocalTime = () => {
  const [date, setDate] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setDate(new Date());
    }, 1000);

    return () => {
      clearInterval(timer);
    };
  }, []);
  return (
    <div className='flex gap-4 items-center font-display py-2 px-4 bg-surface rounded-full '>
      <div className='flex gap-2 items-center'>
        <div className='h-2 w-2 rounded-full bg-secondary' />
        <p>Local Time</p>
      </div>
      <p>
        {new Intl.DateTimeFormat("en-US", {
          hour: "numeric",
          minute: "numeric",
          second: "numeric",
          hour12: true,
          timeZone: "Europe/Stockholm",
        }).format(date)}
      </p>
    </div>
  );
};
export default LocalTime;
