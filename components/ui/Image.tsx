"use client";

import React, { useState, useEffect } from "react";
import NextImage, { ImageProps as NextImageProps } from "next/image";

interface ImageProps extends Omit<NextImageProps, "onLoad"> {
  className?: string;
  priority?: boolean;
  onLoad?: () => void;
}

const Image = ({
  src,
  alt,
  width,
  height,
  className = "",
  priority = false,
  onLoad,
  ...props
}: ImageProps) => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    if (priority) {
      const img = new Image();
      img.src = typeof src === "string" ? src : "";
      img.onload = () => {
        setIsLoaded(true);
        if (onLoad) onLoad();
      };
    }
  }, [src, priority, onLoad]);

  const handleLoad = () => {
    setIsLoaded(true);
    if (onLoad) onLoad();
  };

  return (
    <div className={`relative ${className}`}>
      {!isLoaded && !priority && (
        <div className="absolute inset-0 bg-gray-200 animate-pulse" />
      )}
      <NextImage
        src={src}
        alt={alt}
        width={width}
        height={height}
        className={`${className} ${
          isLoaded ? "opacity-100" : "opacity-0"
        } transition-opacity duration-500`}
        priority={priority}
        onLoadingComplete={handleLoad}
        {...props}
      />
    </div>
  );
};

export default Image;
