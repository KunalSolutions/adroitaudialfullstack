import { useEffect, useState } from "react";

export default function CustomCursor() {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [ringPosition, setRingPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const moveCursor = (e) => {
      setPosition({
        x: e.clientX,
        y: e.clientY,
      });
    };

    window.addEventListener("mousemove", moveCursor);

    return () => {
      window.removeEventListener("mousemove", moveCursor);
    };
  }, []);

  useEffect(() => {
    const followMouse = () => {
      setRingPosition((prev) => ({
        x: prev.x + (position.x - prev.x) * 0.15,
        y: prev.y + (position.y - prev.y) * 0.15,
      }));

      requestAnimationFrame(followMouse);
    };

    followMouse();
  }, [position]);

  return (
    <>
      <div
        className="cursor-dot"
        style={{
          left: position.x,
          top: position.y,
        }}
      />

      <div
        className="cursor-ring"
        style={{
          left: ringPosition.x,
          top: ringPosition.y,
        }}
      />
    </>
  );
}