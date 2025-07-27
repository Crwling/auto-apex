import React, { useEffect, useState, ReactNode, useRef } from "react";
import { useResizeDetector } from "react-resize-detector";
import styles from './slider.module.scss';

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
      className={styles.container}
    >
      <div
        ref={containerRef}
        className={styles.sliderTrack}
        style={{
          opacity: !!width ? 1 : 0,
          transform: `translateX(-${(width || 0) * currentIndex + 1}px)`,
          width: `${totalSlides * (width || 0)}px`,
        }}
      >
        {children.map((child, index) => (
          <div
            key={index}
            className={styles.slideMobile}
            style={{
              width: width,
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
