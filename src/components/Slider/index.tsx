import React, { useEffect, useState, ReactNode, useRef, use } from "react";
import { useResizeDetector } from "react-resize-detector";

interface SliderProps {
  children: ReactNode[];
  interval?: number;
}

const Slider: React.FC<SliderProps> = ({ children, interval = 5000 }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const totalSlides = children.length;
  const containerRef = useRef<HTMLDivElement>(null);
  const { width, height, ref } = useResizeDetector<HTMLDivElement>();

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % totalSlides);
    }, interval);

    return () => clearInterval(timer);
  }, [interval, totalSlides]);

  return (
    <div
      ref={ref}
      style={{
        overflow: "hidden",
        width: "100%",
        height: "100dvh",
        position: "relative",
        background: "var(--black)"
      }}
    >
      <div
        ref={containerRef}
        style={{
          opacity: !!width ? 1 : 0,
          display: "flex",
          transition: "transform 0.5s ease-in-out",
          transform: `translateX(-${(width || 0) * currentIndex + 1}px)`,
          width: `${totalSlides * (width || 0)}px`,
          height: "100%",
        }}
      >
        {children.map((child, index) => (
          <div
            key={index}
            style={{
              width: width,
              height: "100%",
              display: "flex",
              background: "#eee",
              fontSize: "24px",
            }}
          >
            {child}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Slider;
