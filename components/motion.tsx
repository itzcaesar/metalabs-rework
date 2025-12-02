"use client";

import { motion, Variants, useReducedMotion } from "framer-motion";
import { ReactNode, memo } from "react";

// Animation Variants - Optimized with will-change hints
export const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" }
  }
};

export const fadeInDown: Variants = {
  hidden: { opacity: 0, y: -30 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" }
  }
};

export const fadeInLeft: Variants = {
  hidden: { opacity: 0, x: -40 },
  visible: { 
    opacity: 1, 
    x: 0,
    transition: { duration: 0.5, ease: "easeOut" }
  }
};

export const fadeInRight: Variants = {
  hidden: { opacity: 0, x: 40 },
  visible: { 
    opacity: 1, 
    x: 0,
    transition: { duration: 0.5, ease: "easeOut" }
  }
};

export const scaleIn: Variants = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: { 
    opacity: 1, 
    scale: 1,
    transition: { duration: 0.4, ease: "easeOut" }
  }
};

export const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.05,
    }
  }
};

export const staggerItem: Variants = {
  hidden: { opacity: 0, y: 15 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.4, ease: "easeOut" }
  }
};

// Reusable Motion Components - Memoized for performance
interface MotionProps {
  children: ReactNode;
  className?: string;
  delay?: number;
}

export const FadeInUp = memo(function FadeInUp({ children, className = "", delay = 0 }: MotionProps) {
  const shouldReduceMotion = useReducedMotion();
  
  if (shouldReduceMotion) {
    return <div className={className}>{children}</div>;
  }
  
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-80px" }}
      variants={{
        hidden: { opacity: 0, y: 25 },
        visible: { 
          opacity: 1, 
          y: 0,
          transition: { duration: 0.5, ease: "easeOut", delay }
        }
      }}
      className={`will-change-transform ${className}`}
    >
      {children}
    </motion.div>
  );
});

export const FadeInDown = memo(function FadeInDown({ children, className = "", delay = 0 }: MotionProps) {
  const shouldReduceMotion = useReducedMotion();
  
  if (shouldReduceMotion) {
    return <div className={className}>{children}</div>;
  }
  
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-80px" }}
      variants={{
        hidden: { opacity: 0, y: -25 },
        visible: { 
          opacity: 1, 
          y: 0,
          transition: { duration: 0.5, ease: "easeOut", delay }
        }
      }}
      className={`will-change-transform ${className}`}
    >
      {children}
    </motion.div>
  );
});

export const FadeInLeft = memo(function FadeInLeft({ children, className = "", delay = 0 }: MotionProps) {
  const shouldReduceMotion = useReducedMotion();
  
  if (shouldReduceMotion) {
    return <div className={className}>{children}</div>;
  }
  
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-80px" }}
      variants={{
        hidden: { opacity: 0, x: -40 },
        visible: { 
          opacity: 1, 
          x: 0,
          transition: { duration: 0.5, ease: "easeOut", delay }
        }
      }}
      className={`will-change-transform ${className}`}
    >
      {children}
    </motion.div>
  );
});

export const FadeInRight = memo(function FadeInRight({ children, className = "", delay = 0 }: MotionProps) {
  const shouldReduceMotion = useReducedMotion();
  
  if (shouldReduceMotion) {
    return <div className={className}>{children}</div>;
  }
  
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-80px" }}
      variants={{
        hidden: { opacity: 0, x: 40 },
        visible: { 
          opacity: 1, 
          x: 0,
          transition: { duration: 0.5, ease: "easeOut", delay }
        }
      }}
      className={`will-change-transform ${className}`}
    >
      {children}
    </motion.div>
  );
});

export const ScaleIn = memo(function ScaleIn({ children, className = "", delay = 0 }: MotionProps) {
  const shouldReduceMotion = useReducedMotion();
  
  if (shouldReduceMotion) {
    return <div className={className}>{children}</div>;
  }
  
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-80px" }}
      variants={{
        hidden: { opacity: 0, scale: 0.9 },
        visible: { 
          opacity: 1, 
          scale: 1,
          transition: { duration: 0.4, ease: "easeOut", delay }
        }
      }}
      className={`will-change-transform ${className}`}
    >
      {children}
    </motion.div>
  );
});

interface StaggerProps {
  children: ReactNode;
  className?: string;
  staggerDelay?: number;
}

export const StaggerContainer = memo(function StaggerContainer({ children, className = "", staggerDelay = 0.08 }: StaggerProps) {
  const shouldReduceMotion = useReducedMotion();
  
  if (shouldReduceMotion) {
    return <div className={className}>{children}</div>;
  }
  
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-80px" }}
      variants={{
        hidden: { opacity: 0 },
        visible: {
          opacity: 1,
          transition: {
            staggerChildren: staggerDelay,
            delayChildren: 0.05,
          }
        }
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
});

export const StaggerItem = memo(function StaggerItem({ children, className = "" }: Omit<MotionProps, 'delay'>) {
  return (
    <motion.div
      variants={{
        hidden: { opacity: 0, y: 15 },
        visible: { 
          opacity: 1, 
          y: 0,
          transition: { duration: 0.4, ease: "easeOut" }
        }
      }}
      className={`will-change-transform ${className}`}
    >
      {children}
    </motion.div>
  );
});

// Hover animations for cards
export const HoverScale = memo(function HoverScale({ children, className = "", scale = 1.02 }: MotionProps & { scale?: number }) {
  return (
    <motion.div
      whileHover={{ scale }}
      whileTap={{ scale: 0.98 }}
      transition={{ type: "spring", stiffness: 400, damping: 20 }}
      className={className}
    >
      {children}
    </motion.div>
  );
});

// Floating animation - Simplified for performance
export const Float = memo(function Float({ children, className = "", duration = 3 }: MotionProps & { duration?: number }) {
  const shouldReduceMotion = useReducedMotion();
  
  if (shouldReduceMotion) {
    return <div className={className}>{children}</div>;
  }
  
  return (
    <motion.div
      animate={{ y: [0, -8, 0] }}
      transition={{
        duration,
        repeat: Infinity,
        ease: "easeInOut",
      }}
      className={`will-change-transform ${className}`}
    >
      {children}
    </motion.div>
  );
});

// Pulse animation
export const Pulse = memo(function Pulse({ children, className = "" }: MotionProps) {
  const shouldReduceMotion = useReducedMotion();
  
  if (shouldReduceMotion) {
    return <div className={className}>{children}</div>;
  }
  
  return (
    <motion.div
      animate={{
        scale: [1, 1.03, 1],
        opacity: [1, 0.85, 1],
      }}
      transition={{
        duration: 2,
        repeat: Infinity,
        ease: "easeInOut",
      }}
      className={`will-change-transform ${className}`}
    >
      {children}
    </motion.div>
  );
});


// Reveal animation (text/content reveal)
export const Reveal = memo(function Reveal({ children, className = "", delay = 0 }: MotionProps) {
  const shouldReduceMotion = useReducedMotion();
  
  if (shouldReduceMotion) {
    return <div className={className}>{children}</div>;
  }
  
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      className={`overflow-hidden ${className}`}
    >
      <motion.div
        variants={{
          hidden: { y: "100%" },
          visible: { 
            y: 0,
            transition: { 
              duration: 0.5, 
              ease: [0.33, 1, 0.68, 1],
              delay 
            }
          }
        }}
        className="will-change-transform"
      >
        {children}
      </motion.div>
    </motion.div>
  );
});

// Blur in animation
export const BlurIn = memo(function BlurIn({ children, className = "", delay = 0 }: MotionProps) {
  const shouldReduceMotion = useReducedMotion();
  
  if (shouldReduceMotion) {
    return <div className={className}>{children}</div>;
  }
  
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-50px" }}
      variants={{
        hidden: { opacity: 0, filter: "blur(10px)" },
        visible: { 
          opacity: 1, 
          filter: "blur(0px)",
          transition: { duration: 0.8, ease: "easeOut", delay }
        }
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
});

// Counter animation for numbers
interface CounterProps {
  from?: number;
  to: number;
  duration?: number;
  className?: string;
  suffix?: string;
}

export const Counter = memo(function Counter({ from = 0, to, duration = 2, className = "", suffix = "" }: CounterProps) {
  const shouldReduceMotion = useReducedMotion();
  
  if (shouldReduceMotion) {
    return <span className={className}>{to}{suffix}</span>;
  }
  
  return (
    <motion.span
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      className={className}
    >
      <motion.span
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
      >
        {to}{suffix}
      </motion.span>
    </motion.span>
  );
});

// Parallax effect
interface ParallaxProps extends MotionProps {
  speed?: number;
}

export const Parallax = memo(function Parallax({ children, className = "", speed = 0.5 }: ParallaxProps) {
  const shouldReduceMotion = useReducedMotion();
  
  if (shouldReduceMotion) {
    return <div className={className}>{children}</div>;
  }
  
  return (
    <motion.div
      initial={{ y: 0 }}
      whileInView={{ y: 0 }}
      viewport={{ once: false }}
      style={{ willChange: "transform" }}
      className={className}
    >
      {children}
    </motion.div>
  );
});

// Animated gradient border
export const GradientBorder = memo(function GradientBorder({ children, className = "" }: MotionProps) {
  const shouldReduceMotion = useReducedMotion();
  
  if (shouldReduceMotion) {
    return (
      <div className={`relative ${className}`}>
        <div className="relative bg-card rounded-3xl">
          {children}
        </div>
      </div>
    );
  }
  
  return (
    <motion.div
      className={`relative ${className}`}
      whileHover="hover"
    >
      <motion.div
        className="absolute -inset-[1px] rounded-3xl bg-gradient-to-r from-primary via-accent to-primary opacity-0"
        variants={{
          hover: { opacity: 1 }
        }}
        style={{ backgroundSize: "200% 100%", willChange: "opacity" }}
        animate={{
          backgroundPosition: ["0% 0%", "100% 0%", "0% 0%"],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: "linear",
        }}
      />
      <div className="relative bg-card rounded-3xl">
        {children}
      </div>
    </motion.div>
  );
});
