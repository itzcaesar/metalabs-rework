"use client";

import { useState, useEffect, useCallback, memo, useMemo } from "react";
import { motion } from "framer-motion";

// Memoized obstacle positions
const OBSTACLES = [25, 50, 75] as const;

// Memoized floating pixel animation
const FloatingPixel = memo(function FloatingPixel({ index }: { index: number }) {
  return (
    <motion.div
      className="absolute w-1 h-1 bg-primary/10 rounded-full will-change-transform"
      initial={{ 
        x: `${20 + index * 30}%`, 
        y: "30%",
        opacity: 0 
      }}
      animate={{
        y: ["30%", "70%", "30%"],
        opacity: [0, 0.3, 0],
      }}
      transition={{
        duration: 4,
        delay: index * 1.5,
        repeat: Infinity,
        ease: "easeInOut",
      }}
    />
  );
});

// Memoized cactus obstacle
const Cactus = memo(function Cactus({ position }: { position: number }) {
  return (
    <div
      className="absolute bottom-2"
      style={{ left: `${position}%` }}
    >
      <div className="relative w-3 h-4 opacity-15">
        <div className="absolute bottom-0 left-1 w-1 h-3 bg-primary" />
        <div className="absolute bottom-1.5 left-0 w-1 h-1 bg-primary" />
        <div className="absolute bottom-2 left-0 w-1 h-1 bg-primary" />
        <div className="absolute bottom-2 right-0 w-1 h-1 bg-primary" />
        <div className="absolute bottom-2.5 right-0 w-1 h-1 bg-primary" />
      </div>
    </div>
  );
});

export const PixelRunner = memo(function PixelRunner() {
  const [position, setPosition] = useState(0);
  const [isJumping, setIsJumping] = useState(false);
  const [frame, setFrame] = useState(0);

  // Check if character is near an obstacle and should jump
  const checkObstacleCollision = useCallback((pos: number) => {
    for (const obstaclePos of OBSTACLES) {
      if (pos >= obstaclePos - 3 && pos <= obstaclePos - 2) {
        return true;
      }
    }
    return false;
  }, []);

  // Walking animation frames - slower interval
  useEffect(() => {
    const walkInterval = setInterval(() => {
      setFrame((prev) => (prev + 1) % 2);
    }, 250);
    return () => clearInterval(walkInterval);
  }, []);

  // Move across the screen - use requestAnimationFrame for smoother animation
  useEffect(() => {
    let animationId: number;
    let lastTime = 0;
    const speed = 0.4; // pixels per frame
    
    const animate = (currentTime: number) => {
      if (currentTime - lastTime >= 50) { // ~20fps for performance
        lastTime = currentTime;
        setPosition((prev) => {
          const newPos = prev >= 100 ? -10 : prev + speed;
          
          if (checkObstacleCollision(newPos) && !isJumping) {
            setIsJumping(true);
            setTimeout(() => setIsJumping(false), 400);
          }
          
          return newPos;
        });
      }
      animationId = requestAnimationFrame(animate);
    };
    
    animationId = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animationId);
  }, [isJumping, checkObstacleCollision]);

  // Memoize character style
  const characterStyle = useMemo(() => ({
    left: `${position}%`,
  }), [position]);

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Ground line */}
      <div className="absolute bottom-2 left-0 right-0 h-px bg-foreground/5" />
      
      {/* Obstacles - Cactus style */}
      {OBSTACLES.map((obstaclePos, index) => (
        <Cactus key={index} position={obstaclePos} />
      ))}
      
      {/* Pixel character */}
      <motion.div
        className="absolute bottom-2 will-change-transform"
        style={characterStyle}
        animate={{ y: isJumping ? -12 : 0 }}
        transition={{
          type: "spring",
          stiffness: 300,
          damping: 15,
        }}
      >
        <div className="relative w-4 h-4 opacity-20">
          <div className="absolute top-0 left-1 w-2 h-2 bg-primary rounded-sm" />
          <div className="absolute top-2 left-1 w-2 h-1.5 bg-primary rounded-sm" />
          <div className={`absolute top-3.5 w-1 h-1 bg-primary rounded-sm transition-all duration-100 ${frame === 0 ? 'left-0.5' : 'left-1'}`} />
          <div className={`absolute top-3.5 w-1 h-1 bg-primary rounded-sm transition-all duration-100 ${frame === 0 ? 'left-2.5' : 'left-2'}`} />
        </div>
      </motion.div>

      {/* Occasional floating pixels/stars */}
      {[0, 1, 2].map((i) => (
        <FloatingPixel key={i} index={i} />
      ))}
    </div>
  );
});
