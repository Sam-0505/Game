import React from "react";
import Countdown from "react-countdown";
import "./Timer.css";

const TimerComponent = () => {
  return (
    <div className="timer">
      <h1>Custom Font Timer</h1>
      <Countdown
        date={Date.now() + 30000} // 30 seconds from now
        renderer={({ hours, minutes, seconds, completed }) => {
          if (completed) {
            // Timer is completed
            return <p>Time's up!</p>;
          } else {
            return (
              <p>
                {minutes}:{seconds}
              </p>
            );
          }
        }}
      />
    </div>
  );
};

export default TimerComponent;
