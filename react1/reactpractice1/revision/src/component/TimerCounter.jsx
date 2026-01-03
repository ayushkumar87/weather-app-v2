import React, { useState, useEffect } from 'react';

const TimerCounter = () => {
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setSeconds(prevSeconds => prevSeconds + 1);
    }, 1000);

    // Cleanup when component unmounts
    return () => clearInterval(intervalId);
  }, []);

  return <h1>Seconds: {seconds}</h1>;
};

export default TimerCounter;