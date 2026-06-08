// components/AutoPlayVideo.tsx
'use client'; // Necesario si usas App Router (app directory)

import React from 'react';

interface AutoPlayVideoProps {
  src: string;
  className?: string;
  poster?: string; // Imagen de portada mientras carga
}

export default function AutoPlayVideo({ src, className = '', poster }: AutoPlayVideoProps) {
  return (
    <video
      src={src}
      autoPlay
      muted
      loop
      playsInline
      poster={poster}
      className={className}
      preload="none" // o "none" para ahorrar datos

    />
  );
}