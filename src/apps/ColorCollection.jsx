import ColorBox from "./ColorBox";
import "../styles/ColorCollection.css";

export default function ColorCollection({ x, colors }) {
  const boxes = [];
  for (let i = 0; i < x; i++) {
    boxes.push(<ColorBox x={x} colors={colors} />);
  }

  return <div className="ColorCollection">{boxes}</div>;
}
