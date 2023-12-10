import { useState } from "react";
import "./App.css";
import ColorCollection from "./apps/ColorCollection";

const colors = [
  "red",
  "green",
  "blue",
  "yellow",
  "magenta",
  "salmon",
  "pink",
  "lime",
];

function App() {
  const [total, setTotal] = useState(25);
  function handleTotal() {
    setTotal(10);
  }
  return (
    <div>
      <ColorCollection x={total} colors={colors} />
      <input type="number"></input>
      <br />
      <button onClick={handleTotal}>go!</button>
    </div>
  );
}

export default App;
