"use client";

import { useState, useEffect, useCallback } from "react";
import { motion } from "framer-motion";

export function PixelRunner() {
  const [position, setPosition] = useState(0);
  const [isJumping, setIsJumping] = useState(false);
  const [frame, setFrame] = useState(0);
  
  // Obstacle positions (fixed positions across the header)
  const obstacles = [25, 50, 75];

  // Check if character is near an obstacle and should jump
  const checkObstacleCollision = useCallback((pos: number) => {
    for (const obstaclePos of obstacles) {
      // If character is approaching an obstacle (within 5% distance)
      if (pos >= obstaclePos - 3 && pos <= obstaclePos - 2  ) {
        return true;
      }
    }
    return false;
  }, []);

  // Walking animation frames
  useEffect(() => {
    const walkInterval = setInterval(() => {
      setFrame((prev) => (prev + 1) % 2);
    }, 200);
    return () => clearInterval(walkInterval);
  }, []);

  // Move across the screen
  useEffect(() => {
    const moveInterval = setInterval(() => {
      setPosition((prev) => {
        const newPos = prev >= 100 ? -10 : prev + 0.5;
        
        // Auto-jump when approaching obstacle
        if (checkObstacleCollision(newPos) && !isJumping) {
          setIsJumping(true);
          setTimeout(() => setIsJumping(false), 400);
        }
        
        return newPos;
      });
    }, 50);
    return () => clearInterval(moveInterval);
  }, [isJumping, checkObstacleCollision]);

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Ground line */}
      <div className="absolute bottom-2 left-0 right-0 h-px bg-foreground/5" />
      
      {/* Obstacles - Cactus style */}
      {obstacles.map((obstaclePos, index) => (
        <div
          key={index}
          className="absolute bottom-2"
          style={{ left: `${obstaclePos}%` }}
        >
          {/* Cactus/obstacle pixel art */}
          <div className="relative w-3 h-4 opacity-15">
            {/* Main stem */}
            <div className="absolute bottom-0 left-1 w-1 h-3 bg-primary" />
            {/* Left arm */}
            <div className="absolute bottom-1.5 left-0 w-1 h-1 bg-primary" />
            <div className="absolute bottom-2 left-0 w-1 h-1 bg-primary" />
            {/* Right arm */}
            <div className="absolute bottom-2 right-0 w-1 h-1 bg-primary" />
            <div className="absolute bottom-2.5 right-0 w-1 h-1 bg-primary" />
          </div>
        </div>
      ))}
      
      {/* Pixel character */}
      <motion.div
        className="absolute bottom-2"
        style={{ left: `${position}%` }}
        animate={{
          y: isJumping ? -12 : 0,
        }}
        transition={{
          type: "spring",
          stiffness: 300,
          damping: 15,
        }}
      >
        {/* Simple pixel art character - 8x8 grid */}
        <div className="relative w-4 h-4 opacity-20">
          {/* Head */}
          <div className="absolute top-0 left-1 w-2 h-2 bg-primary rounded-sm" />
          {/* Body */}
          <div className="absolute top-2 left-1 w-2 h-1.5 bg-primary rounded-sm" />
          {/* Legs - animated */}
          <div className={`absolute top-3.5 w-1 h-1 bg-primary rounded-sm transition-all duration-100 ${frame === 0 ? 'left-0.5' : 'left-1'}`} />
          <div className={`absolute top-3.5 w-1 h-1 bg-primary rounded-sm transition-all duration-100 ${frame === 0 ? 'left-2.5' : 'left-2'}`} />
        </div>
      </motion.div>

      {/* Occasional floating pixels/stars */}
      {[...Array(3)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-1 h-1 bg-primary/10 rounded-full"
          initial={{ 
            x: `${20 + i * 30}%`, 
            y: "30%",
            opacity: 0 
          }}
          animate={{
            y: ["30%", "70%", "30%"],
            opacity: [0, 0.3, 0],
          }}
          transition={{
            duration: 4,
            delay: i * 1.5,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}
    </div>
  );
}
