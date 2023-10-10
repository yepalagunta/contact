import React, { useEffect, useState } from "react";

const TrackDuration = ({ duration, color, size, lineWeight }) => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    let interval;
    if (duration > 0) {
      const increment = 100 / duration;
      interval = setInterval(() => {
        setProgress((prevProgress) =>
          prevProgress + increment <= 100 ? prevProgress + increment : 100
        );
      }, 1000); // Update progress every second
    }

    return () => clearInterval(interval);
  }, [duration]);

  return (
    <div className="track-duration">
      <div
        className="progress-bar"
        style={{
          width: `${progress}%`,
          backgroundColor: color,
          height: `${lineWeight}px`,
        }}
      ></div>
    </div>
  );
};

export default TrackDuration;
