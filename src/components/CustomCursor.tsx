"use client";
// components/CustomCursor.tsx

import { useState, useEffect } from "react";
import styles from "./CustomCursor.module.css"; // Import your CSS module
interface Position {
  x: number;
  y: number;
}

const CustomCursor = () => {
  const [position, setPosition] = useState<Position>({ x: 0, y: 0 });

  useEffect(() => {
    const onMouseMove = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    document.addEventListener('mousemove', onMouseMove);

    return () => {
      document.removeEventListener('mousemove', onMouseMove);
    };
  }, []);

  const throttle = (func: Function, limit: number) => {
    let lastFunc: NodeJS.Timeout;
    let lastRan: number;
    return function (this: any, ...args: any[]) {
      const context = this;
      if (!lastRan) {
        func.apply(context, args);
        lastRan = Date.now();
      } else {
        clearTimeout(lastFunc);
        lastFunc = setTimeout(function () {
          if (Date.now() - lastRan >= limit) {
            func.apply(context, args);
            lastRan = Date.now();
          }
        }, limit - (Date.now() - lastRan));
      }
    };
  };



  return (
    <div className={styles.cursorDiv}>
      <div
        className={styles.cursor}
        style={{
          transform: `translate3d(${position.x}px, ${position.y}px, 0)`,
        }}
      />
      <div
        className={styles.cursorFollower}
        style={{
          transform: `translate3d(${position.x}px, ${position.y}px, 0)`,
        }}
      />
    </div>
  );
};

export default CustomCursor;
