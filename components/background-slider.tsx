"use client";

import { useState, useEffect, memo } from "react";
import Image from "next/image";

const slides = [
  "/images/Metalabs-1.jpg",
  "/images/Metalabs-2.jpg",
];

export const BackgroundSlider = memo(function BackgroundSlider() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    // Delay starting the slideshow until first image is loaded
    if (!isLoaded) return;
    
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000); // Slower transition for better UX

    return () => clearInterval(interval);
  }, [isLoaded]);

  return (
    <div className="absolute inset-0 overflow-hidden">
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 will-change-opacity ${
            index === currentSlide ? "opacity-100" : "opacity-0"
          }`}
        >
          <Image
            src={slide}
            alt={`Metalabs background ${index + 1}`}
            fill
            className="object-cover"
            priority={index === 0}
            loading={index === 0 ? "eager" : "lazy"}
            quality={75}
            sizes="100vw"
            onLoad={() => index === 0 && setIsLoaded(true)}
          />
        </div>
      ))}
      {/* Overlay for readability */}
      <div className="absolute inset-0 bg-background/70 dark:bg-background/80" />
    </div>
  );
});
