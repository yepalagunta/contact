import { useState, useEffect } from "react";
import ReactDOM from "react-dom/client";

export default function Timer() {
  const [count, setCount] = useState(0);

  useEffect(() => {setTimeout(() => {
      setCount((count) => count + 1);
    }, 1000);
  });

  return <h1>I have rendered {count} times!</h1>;
}
