'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const NUM_DOTS = 10;

export default function AnimatedBackground() {
  const [dots, setDots] = useState<any[]>([]);

  useEffect(() => {
    setDots(
      Array.from({ length: NUM_DOTS }, (_, i) => ({
        left: `${Math.random() * 100}%`,
        top: `${Math.random() * 100}%`,
        size: `${Math.random() * 80 + 40}px`,
        blur: `${Math.random() * 16 + 16}px`,
        duration: Math.random() * 10 + 8,
        delay: Math.random() * 2,
      }))
    );
  }, []);

  return (
    <div className="absolute inset-0 w-full h-full pointer-events-none z-0">
      {dots.map((dot, i) => (
        <motion.div
          key={i}
          className="absolute bg-gold/30 rounded-full"
          style={{
            left: dot.left,
            top: dot.top,
            width: dot.size,
            height: dot.size,
            filter: `blur(${dot.blur})`,
          }}
          initial={{ opacity: 0.3, y: 0 }}
          animate={{ opacity: [0.3, 0.6, 0.3], y: [0, -20, 0] }}
          transition={{
            duration: dot.duration,
            delay: dot.delay,
            repeat: Infinity,
            repeatType: 'loop',
            ease: 'easeInOut',
          }}
        />
      ))}
    </div>
  );
} 