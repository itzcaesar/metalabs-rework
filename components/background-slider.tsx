"use client";

import { useState, useEffect } from "react";

const slides = [
  "https://metalabs.id/wp-content/uploads/2025/01/metalabs2.jpg",
  "https://metalabs.id/wp-content/uploads/2025/01/Korea1.jpg",
  "https://metalabs.id/wp-content/uploads/2025/01/metalabs1.jpg",
];

export function BackgroundSlider() {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="absolute inset-0 overflow-hidden">
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 bg-cover bg-center bg-no-repeat transition-opacity duration-1000 ${
            index === currentSlide ? "opacity-100" : "opacity-0"
          }`}
          style={{ backgroundImage: `url('${slide}')` }}
        />
      ))}
      {/* Overlay for readability */}
      <div className="absolute inset-0 bg-background/70 dark:bg-background/80" />
    </div>
  );
}
