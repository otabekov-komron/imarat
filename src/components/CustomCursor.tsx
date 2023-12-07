'use client'
// components/CustomCursor.tsx

import { useState, useEffect } from 'react';
import styles from './CustomCursor.module.css'; // Import your CSS module

const CustomCursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const onMouseMove = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    document.addEventListener('mousemove', onMouseMove);

    return () => {
      document.removeEventListener('mousemove', onMouseMove);
    };
  }, []);

  return (
    <div className={styles.cursorDiv}>
      <div className={styles.cursor} style={{ transform: `translate3d(${position.x}px, ${position.y}px, 0)` }} />
      <div className={styles.cursorFollower} style={{ transform: `translate3d(${position.x}px, ${position.y}px, 0)` }} />
    </div>
  );
};

export default CustomCursor;
