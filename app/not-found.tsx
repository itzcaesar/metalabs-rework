"use client";

import { useState, useEffect, useCallback, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { Home, RotateCcw, Play } from "lucide-react";

export default function NotFoundPage() {
  const [gameStarted, setGameStarted] = useState(false);
  const [gameOver, setGameOver] = useState(false);
  const [score, setScore] = useState(0);
  const [highScore, setHighScore] = useState(0);
  const [playerY, setPlayerY] = useState(0);
  const [isJumping, setIsJumping] = useState(false);
  const [obstacles, setObstacles] = useState<{ id: number; x: number; type: 'cactus' | 'bird' }[]>([]);
  const [frame, setFrame] = useState(0);
  const [gameSpeed, setGameSpeed] = useState(4);
  const gameLoopRef = useRef<NodeJS.Timeout | null>(null);
  const obstacleIdRef = useRef(0);
  const gameContainerRef = useRef<HTMLDivElement>(null);
  const [containerWidth, setContainerWidth] = useState(500);

  // Get container width for responsive obstacles
  useEffect(() => {
    const updateWidth = () => {
      if (gameContainerRef.current) {
        setContainerWidth(gameContainerRef.current.offsetWidth);
      }
    };
    updateWidth();
    window.addEventListener('resize', updateWidth);
    return () => window.removeEventListener('resize', updateWidth);
  }, []);

  // Load high score from localStorage
  useEffect(() => {
    const saved = localStorage.getItem('metalabs-404-highscore');
    if (saved) setHighScore(parseInt(saved));
  }, []);

  // Save high score
  useEffect(() => {
    if (highScore > 0) {
      localStorage.setItem('metalabs-404-highscore', highScore.toString());
    }
  }, [highScore]);

  // Jump handler
  const jump = useCallback(() => {
    if (!isJumping && gameStarted && !gameOver) {
      setIsJumping(true);
      setPlayerY(70);
      setTimeout(() => setPlayerY(35), 150);
      setTimeout(() => setPlayerY(0), 300);
      setTimeout(() => setIsJumping(false), 320);
    }
  }, [isJumping, gameStarted, gameOver]);

  // Start game
  const startGame = useCallback(() => {
    setGameStarted(true);
    setGameOver(false);
    setScore(0);
    setObstacles([]);
    setPlayerY(0);
    setIsJumping(false);
    setGameSpeed(4);
    obstacleIdRef.current = 0;
  }, []);

  // Reset game
  const resetGame = useCallback(() => {
    if (score > highScore) {
      setHighScore(score);
    }
    startGame();
  }, [score, highScore, startGame]);

  // Keyboard controls
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.code === "Space" || e.code === "ArrowUp") {
        e.preventDefault();
        if (!gameStarted || gameOver) {
          startGame();
        } else {
          jump();
        }
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [jump, gameStarted, gameOver, startGame]);

  // Game loop
  useEffect(() => {
    if (!gameStarted || gameOver) return;

    gameLoopRef.current = setInterval(() => {
      setScore((prev) => {
        const newScore = prev + 1;
        if (newScore % 500 === 0) {
          setGameSpeed((s) => Math.min(s + 0.5, 10));
        }
        return newScore;
      });

      setFrame((prev) => (prev + 1) % 2);

      setObstacles((prev) => {
        const updated = prev
          .map((obs) => ({ ...obs, x: obs.x - gameSpeed }))
          .filter((obs) => obs.x > -60);

        const minGap = containerWidth * 0.4;
        const lastObstacle = updated[updated.length - 1];
        if (Math.random() < 0.025 && (!lastObstacle || lastObstacle.x < containerWidth - minGap)) {
          obstacleIdRef.current += 1;
          updated.push({
            id: obstacleIdRef.current,
            x: containerWidth + 20,
            type: Math.random() > 0.75 ? 'bird' : 'cactus',
          });
        }

        return updated;
      });
    }, 40);

    return () => {
      if (gameLoopRef.current) {
        clearInterval(gameLoopRef.current);
      }
    };
  }, [gameStarted, gameOver, gameSpeed, containerWidth]);

  // Collision detection
  useEffect(() => {
    if (!gameStarted || gameOver) return;

    const playerLeft = 40;
    const playerRight = 70;
    const playerBottom = playerY;
    const playerTop = playerY + 36;

    for (const obs of obstacles) {
      const obsLeft = obs.x + 5;
      const obsRight = obs.x + 25;
      const obsBottom = obs.type === 'bird' ? 35 : 0;
      const obsTop = obs.type === 'bird' ? 60 : 45;

      if (
        playerRight > obsLeft &&
        playerLeft < obsRight &&
        playerTop > obsBottom &&
        playerBottom < obsTop
      ) {
        setGameOver(true);
        if (score > highScore) {
          setHighScore(score);
        }
        if (gameLoopRef.current) {
          clearInterval(gameLoopRef.current);
        }
        break;
      }
    }
  }, [obstacles, playerY, gameStarted, gameOver, score, highScore]);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-4 py-8 relative overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(221,47,55,0.2),transparent_60%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_right,rgba(216,111,117,0.1),transparent_50%)]" />
      
      {/* Floating pixels decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-primary/20 rounded-sm"
            initial={{ 
              x: `${15 + i * 15}%`, 
              y: "100%",
              rotate: 0,
            }}
            animate={{
              y: "-10%",
              rotate: 360,
            }}
            transition={{
              duration: 8 + i * 2,
              delay: i * 1.5,
              repeat: Infinity,
              ease: "linear",
            }}
          />
        ))}
      </div>

      <div className="relative z-10 text-center w-full max-w-2xl mx-auto">
        {/* 404 Title with glitch effect */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-7xl sm:text-9xl font-bold font-pixel text-primary mb-2 relative">
            <span className="relative inline-block">
              4
              <span className="absolute inset-0 text-primary/30 -translate-x-1 translate-y-0.5 blur-[1px]">4</span>
            </span>
            <span className="relative inline-block mx-1 sm:mx-2">
              0
              <span className="absolute inset-0 text-accent/30 translate-x-1 -translate-y-0.5 blur-[1px]">0</span>
            </span>
            <span className="relative inline-block">
              4
              <span className="absolute inset-0 text-primary/30 -translate-x-1 translate-y-0.5 blur-[1px]">4</span>
            </span>
          </h1>
          <p className="text-base sm:text-xl font-pixel text-muted-foreground mb-6 sm:mb-8">
            Oops! Page Not Found
          </p>
        </motion.div>

        {/* Game Container */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="w-full mb-6 sm:mb-8"
        >
          <div 
            ref={gameContainerRef}
            className="relative w-full aspect-[2.5/1] sm:aspect-[3/1] bg-gradient-to-b from-card to-muted/50 border-4 border-primary/40 rounded-2xl overflow-hidden cursor-pointer shadow-2xl shadow-primary/10"
            onClick={() => {
              if (!gameStarted || gameOver) {
                startGame();
              } else {
                jump();
              }
            }}
          >
            {/* Sky gradient */}
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-muted/30" />
            
            {/* Clouds */}
            <div className="absolute top-4 sm:top-6 left-[10%] w-8 sm:w-12 h-3 sm:h-4 bg-foreground/5 rounded-full" />
            <div className="absolute top-8 sm:top-10 left-[30%] w-6 sm:w-10 h-2 sm:h-3 bg-foreground/5 rounded-full" />
            <div className="absolute top-3 sm:top-5 right-[20%] w-10 sm:w-14 h-3 sm:h-4 bg-foreground/5 rounded-full" />

            {/* Ground */}
            <div className="absolute bottom-0 left-0 right-0 h-8 sm:h-10 bg-gradient-to-t from-muted to-muted/80 border-t-2 border-primary/20">
              <div className="absolute inset-0 flex items-center px-2 gap-3 sm:gap-4 overflow-hidden">
                {[...Array(30)].map((_, i) => (
                  <div 
                    key={i} 
                    className="w-1 h-1 bg-primary/20 rounded-full flex-shrink-0" 
                    style={{ marginTop: i % 2 === 0 ? '4px' : '-4px' }}
                  />
                ))}
              </div>
            </div>

            {/* Player Dino */}
            <motion.div
              className="absolute left-8 sm:left-12 w-8 sm:w-10 h-8 sm:h-10"
              animate={{ y: -playerY }}
              transition={{ type: "spring", stiffness: 400, damping: 20 }}
              style={{ bottom: 32 }}
            >
              <div className="relative w-full h-full">
                <div className="absolute bottom-0 left-1 sm:left-1.5 w-5 sm:w-6 h-5 sm:h-6 bg-primary rounded-sm shadow-lg" />
                <div className="absolute bottom-3 sm:bottom-4 left-2.5 sm:left-3 w-4 sm:w-5 h-4 sm:h-5 bg-primary rounded-sm" />
                <div className="absolute bottom-4 sm:bottom-5 left-4 sm:left-5 w-1 sm:w-1.5 h-1 sm:h-1.5 bg-background rounded-full" />
                <div className="absolute bottom-3 sm:bottom-4 left-5 sm:left-6 w-2 h-0.5 sm:h-1 bg-background/50 rounded-full" />
                <div className="absolute bottom-1.5 sm:bottom-2 left-0 w-1.5 sm:w-2 h-2.5 sm:h-3 bg-primary rounded-sm" />
                <div className="absolute bottom-2 sm:bottom-3 left-4 sm:left-5 w-1 sm:w-1.5 h-1 sm:h-1.5 bg-primary rounded-sm" />
                <div className={`absolute bottom-0 w-1.5 sm:w-2 h-2 sm:h-3 bg-primary rounded-sm transition-all duration-75 ${frame === 0 ? 'left-1.5 sm:left-2' : 'left-1 sm:left-1'}`} />
                <div className={`absolute bottom-0 w-1.5 sm:w-2 h-2 sm:h-3 bg-primary rounded-sm transition-all duration-75 ${frame === 0 ? 'left-4 sm:left-5' : 'left-4.5 sm:left-6'}`} />
              </div>
            </motion.div>

            {/* Obstacles */}
            <AnimatePresence>
              {obstacles.map((obs) => (
                <motion.div
                  key={obs.id}
                  className="absolute"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  style={{ 
                    left: obs.x, 
                    bottom: obs.type === 'bird' ? 65 : 32 
                  }}
                >
                  {obs.type === 'cactus' ? (
                    <div className="relative w-5 sm:w-6 h-10 sm:h-12">
                      <div className="absolute bottom-0 left-1.5 sm:left-2 w-2 h-8 sm:h-10 bg-green-600 dark:bg-green-500 rounded-sm shadow-md" />
                      <div className="absolute bottom-3 sm:bottom-4 left-0 w-1.5 sm:w-2 h-3 sm:h-4 bg-green-600 dark:bg-green-500 rounded-sm" />
                      <div className="absolute bottom-5 sm:bottom-6 left-3.5 sm:left-4 w-1.5 sm:w-2 h-3 sm:h-4 bg-green-600 dark:bg-green-500 rounded-sm" />
                      <div className="absolute bottom-6 sm:bottom-8 left-2 sm:left-2.5 w-0.5 h-1 bg-green-700 dark:bg-green-400" />
                    </div>
                  ) : (
                    <div className="relative w-6 sm:w-8 h-4 sm:h-6">
                      <div className="absolute bottom-0 left-1.5 sm:left-2 w-3 sm:w-4 h-2 sm:h-3 bg-primary rounded-sm shadow-md" />
                      <motion.div 
                        className="absolute w-2 sm:w-3 h-1.5 sm:h-2 bg-primary rounded-sm left-1.5 sm:left-2"
                        animate={{ bottom: frame === 0 ? 8 : 4 }}
                        transition={{ duration: 0.1 }}
                      />
                      <div className="absolute bottom-0.5 sm:bottom-1 left-4 sm:left-5 w-2 sm:w-3 h-0.5 sm:h-1 bg-primary rounded-sm" />
                      <div className="absolute bottom-1 sm:bottom-1.5 left-3 sm:left-4 w-0.5 sm:w-1 h-0.5 sm:h-1 bg-background rounded-full" />
                    </div>
                  )}
                </motion.div>
              ))}
            </AnimatePresence>

            {/* Score Display */}
            <div className="absolute top-2 sm:top-3 right-2 sm:right-4 font-pixel text-[8px] sm:text-xs text-foreground/60 text-right">
              <div className="flex items-center gap-1 sm:gap-2 justify-end mb-0.5 sm:mb-1">
                <span className="text-primary/60">HI</span>
                <span>{String(highScore).padStart(5, '0')}</span>
              </div>
              <div className="text-foreground/80 text-[10px] sm:text-sm">
                {String(score).padStart(5, '0')}
              </div>
            </div>

            {/* Speed indicator */}
            {gameStarted && !gameOver && (
              <div className="absolute top-2 sm:top-3 left-2 sm:left-4 font-pixel text-[8px] sm:text-xs text-foreground/40">
                SPD {gameSpeed.toFixed(1)}x
              </div>
            )}

            {/* Start/Game Over Overlay */}
            <AnimatePresence>
              {(!gameStarted || gameOver) && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="absolute inset-0 bg-background/85 backdrop-blur-sm flex flex-col items-center justify-center p-4"
                >
                  {gameOver ? (
                    <motion.div
                      initial={{ scale: 0.8, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                      className="text-center"
                    >
                      <p className="font-pixel text-lg sm:text-2xl text-primary mb-2">GAME OVER</p>
                      <p className="font-pixel text-xs sm:text-sm text-muted-foreground mb-1">
                        Score: <span className="text-foreground">{score}</span>
                      </p>
                      {score >= highScore && score > 0 && (
                        <p className="font-pixel text-[10px] sm:text-xs text-accent mb-3 sm:mb-4">
                          ★ NEW HIGH SCORE! ★
                        </p>
                      )}
                    </motion.div>
                  ) : (
                    <motion.div
                      initial={{ y: 10, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      className="text-center"
                    >
                      <p className="font-pixel text-sm sm:text-lg text-foreground/80 mb-1 sm:mb-2">
                        While you&apos;re here...
                      </p>
                      <p className="font-pixel text-[10px] sm:text-xs text-muted-foreground mb-3 sm:mb-4">
                        Press SPACE or tap to play!
                      </p>
                    </motion.div>
                  )}
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      resetGame();
                    }}
                    className="flex items-center gap-2 px-4 sm:px-6 py-2 sm:py-3 bg-primary text-primary-foreground rounded-xl font-pixel text-[10px] sm:text-xs hover:bg-primary/90 transition-all transform hover:scale-105 shadow-lg shadow-primary/20"
                  >
                    {gameOver ? (
                      <>
                        <RotateCcw className="w-3 h-3 sm:w-4 sm:h-4" />
                        Try Again
                      </>
                    ) : (
                      <>
                        <Play className="w-3 h-3 sm:w-4 sm:h-4" />
                        Start Game
                      </>
                    )}
                  </button>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Game instructions */}
          <p className="text-[10px] sm:text-xs text-muted-foreground mt-3 font-pixel">
            SPACE / ↑ / TAP to jump • Avoid obstacles • Speed increases!
          </p>
        </motion.div>

        {/* Back Home Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <Link
            href="/"
            className="inline-flex items-center gap-2 px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-primary to-accent text-primary-foreground rounded-full font-semibold hover:opacity-90 transition-all transform hover:scale-105 shadow-lg shadow-primary/20"
          >
            <Home className="w-4 h-4 sm:w-5 sm:h-5" />
            <span className="font-pixel text-xs sm:text-sm">Back to Home</span>
          </Link>
        </motion.div>
      </div>
    </div>
  );
}
