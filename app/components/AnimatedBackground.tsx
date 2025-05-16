'use client';

import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

const NUM_DOTS = 10;
const DARK_GREY = '#7a7a8c';
const GLOW_COLOR = '#e0e7ef';
const CIRCUIT_COLOR = '#b3c6e0';
const DOT_COLOR = '#b3e0ff';
const DATA_LINE_GRADIENT = 'url(#dataLineGradient)';

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
    <motion.div
      className="absolute inset-0 w-full h-full z-0"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1.2, delay: 2.8, ease: 'easeInOut' }}
      style={{ background: 'none', perspective: '1200px' }}
    >
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
      {/* Premium Digital Rubik's Cube SVG - now on the left and 3x bigger */}
      <PremiumRubiksCube x={-80} y={520} size={510} delay={3.2} />
      <PremiumRubiksCube x={-310} y={670} size={330} delay={3.5} />
    </motion.div>
  );
}

// Premium Digital Rubik's Cube SVG
function PremiumRubiksCube({ x, y, size, delay }: { x: number; y: number; size: number; delay: number }) {
  return (
    <motion.svg
      width={size}
      height={size}
      viewBox="0 0 200 200"
      style={{ position: 'absolute', right: x, top: y, zIndex: 2, filter: 'drop-shadow(0 8px 32px #b3e0ff)' }}
      initial={{ opacity: 0, scale: 0.7, rotate: 18 }}
      animate={{ opacity: 1, scale: 1, rotate: 0 }}
      transition={{ delay, duration: 1.2, ease: 'easeOut' }}
    >
      <defs>
        {/* Chrome/iridescent gradients */}
        <linearGradient id="chrome1" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#e0e7ef" />
          <stop offset="40%" stopColor="#b3e0ff" />
          <stop offset="70%" stopColor="#a1a1c6" />
          <stop offset="100%" stopColor="#fff" />
        </linearGradient>
        <linearGradient id="chrome2" x1="0" y1="1" x2="1" y2="0">
          <stop offset="0%" stopColor="#b3c6e0" />
          <stop offset="50%" stopColor="#fff" />
          <stop offset="100%" stopColor="#b3e0ff" />
        </linearGradient>
        <linearGradient id="chrome3" x1="1" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#b3e0ff" />
          <stop offset="60%" stopColor="#fff" />
          <stop offset="100%" stopColor="#b3c6e0" />
        </linearGradient>
        <radialGradient id="cubeHighlight" cx="50%" cy="40%" r="60%">
          <stop offset="0%" stopColor="#fff" stopOpacity="0.7" />
          <stop offset="100%" stopColor="#b3e0ff" stopOpacity="0.1" />
        </radialGradient>
        <filter id="cubeGlow" x="-50%" y="-50%" width="200%" height="200%">
          <feGaussianBlur stdDeviation="8" result="coloredBlur" />
          <feMerge>
            <feMergeNode in="coloredBlur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>
      {/* Top face with chrome/iridescent effect */}
      <polygon points="100,20 180,60 100,100 20,60" fill="url(#chrome1)" filter="url(#cubeGlow)" opacity="0.98" />
      {/* Right face with chrome/iridescent effect */}
      <polygon points="180,60 180,140 100,180 100,100" fill="url(#chrome2)" filter="url(#cubeGlow)" opacity="0.96" />
      {/* Left face with chrome/iridescent effect */}
      <polygon points="20,60 20,140 100,180 100,100" fill="url(#chrome3)" filter="url(#cubeGlow)" opacity="0.96" />
      {/* Facet highlights for Rubik's cube look */}
      <polygon points="100,60 140,80 100,100 60,80" fill="url(#cubeHighlight)" opacity="0.7" />
      <polygon points="140,80 160,100 120,120 100,100" fill="url(#cubeHighlight)" opacity="0.5" />
      <polygon points="60,80 100,100 80,120 40,100" fill="url(#cubeHighlight)" opacity="0.5" />
      {/* Edges for 3D effect */}
      <polyline points="100,20 180,60 180,140 100,180 20,140 20,60 100,20" fill="none" stroke="#fff" strokeWidth="2.5" opacity="0.5" />
      <polyline points="100,20 100,100 100,180" fill="none" stroke="#b3e0ff" strokeWidth="2.5" opacity="0.4" />
    </motion.svg>
  );
} 