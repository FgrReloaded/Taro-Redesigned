"use client"
import React, { useEffect } from 'react';
import { motion, useSpring, useMotionValue } from 'framer-motion';

const CursorLightEffect = () => {
  const cursorX = useMotionValue(0);
  const cursorY = useMotionValue(0);

  const springConfig = { damping: 35, stiffness: 300 };
  const x = useSpring(cursorX, springConfig);
  const y = useSpring(cursorY, springConfig);

  useEffect(() => {
    const updateMousePosition = (e: any) => {
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
    };

    window.addEventListener('mousemove', updateMousePosition);

    return () => {
      window.removeEventListener('mousemove', updateMousePosition);
    };
  }, [cursorX, cursorY]);

  return (
    <motion.div
      className="fixed pointer-events-none"
      style={{
        x,
        y,
      }}
    >
      <motion.div
        className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
        style={{
          width: '400px',
          height: '400px',
          background: 'radial-gradient(circle, rgba(190,149,255,0.8) 0%, rgba(190,149,255,0.4) 30%, rgba(190,149,255,0.1) 60%, transparent 70%)',
          filter: 'blur(40px)',
        }}
      />
    </motion.div>
  );
};

export default CursorLightEffect;