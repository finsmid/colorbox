import { useState } from "react";
import "../styles/ColorBox.css";

function randomColor(arr) {
  const idx = Math.floor(Math.random() * arr.length);
  return arr[idx];
}

export default function ColorBox({ colors }) {
  const [color, setColor] = useState(randomColor(colors));

  const handleColor = () => {
    setColor(randomColor(colors));
  };

  return (
    <div
      onClick={handleColor}
      className="ColorBox"
      style={{ backgroundColor: color }}
    >
      {color}
    </div>
  );
}
