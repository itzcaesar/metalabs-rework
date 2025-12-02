"use client";

import Image from "next/image";
import { useState } from "react";

interface ProductCardProps {
  name: string;
  image: string;
}

export function ProductCard({ name, image }: ProductCardProps) {
  const [imgSrc, setImgSrc] = useState(`/images/${image}`);

  return (
    <div className="group relative rounded-2xl overflow-hidden border border-border bg-card hover:shadow-2xl hover:shadow-primary/10 transition-all duration-300 hover:-translate-y-1">
      <div className="aspect-square relative overflow-hidden bg-gradient-to-br from-muted/50 to-muted">
        <Image
          src={imgSrc}
          alt={name}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-500"
          onError={() => {
            setImgSrc(`https://metalabs.id/images/${image}`);
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
          <p className="text-white text-sm font-medium">View Details →</p>
        </div>
      </div>
      <div className="p-4 bg-card">
        <h3 className="text-lg font-bold text-center group-hover:text-primary transition-colors">{name}</h3>
      </div>
    </div>
  );
}
