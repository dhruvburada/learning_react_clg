import  { useState, useEffect } from "react";

const CountdownTimer = () => {
  const [timeRemaining, setTimeRemaining] = useState(5 * 60);

  useEffect(() => {
    // Update the timer every second
    const countdownInterval = setInterval(() => {
      setTimeRemaining((prevTime) => {
        if (prevTime <= 1) {
          clearInterval(countdownInterval); 
          alert("Countdown complete!");
          return 0;
        }
        return prevTime - 1; 
      });
    }, 1000);

    // Cleanup the interval when the component unmounts
    return () => clearInterval(countdownInterval);
  }, []);

  // Convert seconds to minutes and seconds format
  const minutes = Math.floor(timeRemaining / 60);
  const seconds = timeRemaining % 60;

  return (
    <div className="countdown-timer-container">
      <h1>
        {String(minutes)}:{String(seconds)}
      </h1>
    </div>
  );
};

export default CountdownTimer;


// import { StrictMode } from 'react'
// import { createRoot } from 'react-dom/client'
// import CountDownTime from './lec1801/countdownTimer'


// createRoot(document.getElementById('root')).render(
//   <StrictMode>
//    <CountDownTime/>
//   </StrictMode>,
// )
