"use client";

import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

const products = [
  { 
    name: "Metaspeak", 
    image: "Metaspeak.png",
    description: "AI-powered language learning app with speech recognition technology.",
    link: "/product#metaspeak"
  },
  { 
    name: "ARMazing", 
    image: "Screenshot_20241213_154131.png",
    description: "Augmented reality tourism app for exploring Indonesian destinations.",
    link: "/product#armazing"
  },
  { 
    name: "Kidtective Adventure", 
    image: "KidtectiveAdventure.png",
    description: "Educational detective game teaching problem-solving skills to children.",
    link: "/product#kidtective"
  },
  { 
    name: "Personal Finance", 
    image: "PersonalFinance.png",
    description: "Interactive simulation game for learning financial management.",
    link: "/product#personal-finance"
  },
  { 
    name: "Ojek Rescuer", 
    image: "OjekRescuer.png",
    description: "Action game promoting road safety awareness and emergency response.",
    link: "/product#ojek-rescuer"
  },
  { 
    name: "Wonosobo", 
    image: "Wonosobo.png",
    description: "Virtual tourism experience showcasing Wonosobo's cultural heritage.",
    link: "/product#wonosobo"
  },
  { 
    name: "Itara", 
    image: "Itara.jpg",
    description: "Virtual assistant with AI-driven conversational capabilities.",
    link: "/product#itara"
  },
  { 
    name: "Grimmater", 
    image: "Grimmater.png",
    description: "Interactive storytelling platform with immersive narratives.",
    link: "/product#grimmater"
  },
];

export function ProductCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const navigate = (direction: "left" | "right") => {
    if (direction === "right") {
      setCurrentIndex((prev) => (prev + 1) % products.length);
    } else {
      setCurrentIndex((prev) => (prev - 1 + products.length) % products.length);
    }
  };

  const getCardStyle = (index: number) => {
    const totalProducts = products.length;
    let diff = index - currentIndex;
    
    // Handle wrapping for infinite carousel
    if (diff > totalProducts / 2) diff -= totalProducts;
    if (diff < -totalProducts / 2) diff += totalProducts;

    const absPos = Math.abs(diff);
    
    // On mobile, only show 1 card at a time
    if (isMobile) {
      if (absPos > 1) {
        return {
          opacity: 0,
          transform: `translateX(${diff * 100}%) scale(0.6)`,
          zIndex: 0,
          pointerEvents: "none" as const,
        };
      }
      const translateX = diff * 120;
      const scale = 1 - absPos * 0.15;
      const zIndex = 10 - absPos;
      const opacity = 1 - absPos * 0.5;

      return {
        transform: `translateX(${translateX}px) scale(${scale})`,
        zIndex,
        opacity,
      };
    }
    
    // Desktop: show 5 cards at a time (-2, -1, 0, 1, 2)
    if (absPos > 2) {
      return {
        opacity: 0,
        transform: `translateX(${diff * 100}%) scale(0.6)`,
        zIndex: 0,
        pointerEvents: "none" as const,
      };
    }

    const translateX = diff * 280;
    const scale = 1 - absPos * 0.12;
    const zIndex = 10 - absPos;
    const opacity = 1 - absPos * 0.25;
    const rotateY = diff * -5;

    return {
      transform: `translateX(${translateX}px) scale(${scale}) rotateY(${rotateY}deg)`,
      zIndex,
      opacity,
    };
  };

  return (
    <div className="relative py-4">
      {/* Navigation Buttons */}
      <Button
        variant="ghost"
        size="icon"
        className="absolute left-2 md:left-8 top-1/2 -translate-y-1/2 z-20 h-10 w-10 md:h-16 md:w-16 rounded-full bg-background/20 backdrop-blur-sm hover:bg-background/40 text-foreground"
        onClick={() => navigate("left")}
      >
        <ChevronLeft className="h-6 w-6 md:h-10 md:w-10" />
      </Button>

      <Button
        variant="ghost"
        size="icon"
        className="absolute right-2 md:right-8 top-1/2 -translate-y-1/2 z-20 h-10 w-10 md:h-16 md:w-16 rounded-full bg-background/20 backdrop-blur-sm hover:bg-background/40 text-foreground"
        onClick={() => navigate("right")}
      >
        <ChevronRight className="h-6 w-6 md:h-10 md:w-10" />
      </Button>

      {/* Carousel Container */}
      <div className="relative h-[250px] md:h-[380px] flex items-center justify-center perspective-1000">
        {products.map((product, idx) => {
          const isSelected = idx === currentIndex;
          return (
            <div
              key={idx}
              className="absolute transition-all duration-500 ease-out cursor-pointer"
              style={getCardStyle(idx)}
              onClick={() => setCurrentIndex(idx)}
            >
              {isSelected ? (
                <Link href={product.link} className="block group">
                  <div className="relative w-[280px] md:w-[550px] aspect-video rounded-xl md:rounded-2xl overflow-hidden shadow-2xl border border-border/50 bg-card">
                    <Image
                      src={`/images/${product.image}`}
                      alt={product.name}
                      fill
                      className="object-contain bg-black transition-transform duration-500 group-hover:scale-105"
                    />
                    {/* Default gradient overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent transition-opacity duration-300 md:group-hover:opacity-0" />
                    
                    {/* Hover overlay with description - Hidden on mobile */}
                    <div className="hidden md:flex absolute inset-0 bg-black/80 opacity-0 group-hover:opacity-100 transition-all duration-300 flex-col justify-center items-center p-8 text-center">
                      <h3 className="text-white text-2xl font-bold mb-4">
                        {product.name}
                      </h3>
                      <p className="text-white/80 text-lg leading-relaxed mb-6 max-w-md">
                        {product.description}
                      </p>
                      <div className="flex items-center gap-2 text-primary font-semibold">
                        <span>View Details</span>
                        <ExternalLink className="w-5 h-5" />
                      </div>
                    </div>
                    
                    {/* Bottom title */}
                    <div className="absolute bottom-0 left-0 right-0 p-3 md:p-6 transition-opacity duration-300 md:group-hover:opacity-0">
                      <h3 className="text-white text-base md:text-xl font-semibold drop-shadow-lg">
                        {product.name}
                      </h3>
                    </div>
                  </div>
                </Link>
              ) : (
                <div className="relative w-[280px] md:w-[550px] aspect-video rounded-xl md:rounded-2xl overflow-hidden shadow-2xl border border-border/50 bg-card">
                  <Image
                    src={`/images/${product.image}`}
                    alt={product.name}
                    fill
                    className="object-contain bg-black"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-3 md:p-6">
                    <h3 className="text-white text-base md:text-xl font-semibold drop-shadow-lg">
                      {product.name}
                    </h3>
                  </div>
                </div>
              )}
            </div>
          );
        })}
      </div>

      {/* Progress Indicator */}
      <div className="flex justify-center mt-4">
        <div className="flex items-center justify-center w-10 h-10 rounded-full border-2 border-muted-foreground/30 bg-background/80 backdrop-blur-sm">
          <span className="text-xs font-medium text-muted-foreground">
            {currentIndex + 1}/{products.length}
          </span>
        </div>
      </div>

      {/* Curved Line - Hidden on mobile */}
      <div className="hidden md:block absolute bottom-4 left-1/2 -translate-x-1/2 w-[700px] h-12 pointer-events-none">
        <svg viewBox="0 0 700 40" className="w-full h-full">
          <path
            d="M 0 0 Q 350 40 700 0"
            fill="none"
            stroke="currentColor"
            strokeWidth="1"
            className="text-muted-foreground/30"
          />
        </svg>
      </div>
    </div>
  );
}
