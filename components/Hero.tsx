"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface HeroProps {
  slides: {
    id: number;
    image: string;
    title: string;
    subtitle: string;
    buttonText?: string;
    buttonLink?: string;
  }[];
}

const Hero = ({ slides }: HeroProps) => {
  const [activeSlide, setActiveSlide] = useState(0);
  const [slideDirection, setSlideDirection] = useState<"left" | "right">(
    "right"
  );
  const [loadedImages, setLoadedImages] = useState<number[]>([0]); // Preload first image

  const totalSlides = slides?.length;

  useEffect(() => {
    const interval = setInterval(() => {
      goToNextSlide();
    }, 6000);

    return () => clearInterval(interval);
  }, [activeSlide]);

  // Preload the next image when active slide changes
  useEffect(() => {
    const nextSlide = activeSlide === totalSlides - 1 ? 0 : activeSlide + 1;
    if (!loadedImages.includes(nextSlide)) {
      setLoadedImages((prev) => [...prev, nextSlide]);
    }
  }, [activeSlide, totalSlides, loadedImages]);

  const goToNextSlide = () => {
    setSlideDirection("right");
    setActiveSlide((prev) => (prev === totalSlides - 1 ? 0 : prev + 1));
  };

  const goToPrevSlide = () => {
    setSlideDirection("left");
    setActiveSlide((prev) => (prev === 0 ? totalSlides - 1 : prev - 1));
  };

  return (
    <section className="relative h-[75vh] sm:h-screen overflow-hidden">
      {/* Slides */}
      {slides.map((slide, index) => (
        <div
          key={slide.id}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === activeSlide ? "opacity-100 z-10" : "opacity-0 z-0"
          }`}
          style={
            loadedImages.includes(index)
              ? {
                  backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)), url(${slide.image})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }
              : undefined
          }
        >
          {!loadedImages.includes(index) && (
            <div className="absolute inset-0 bg-gray-200 animate-pulse" />
          )}
          <div className="container-custom h-full flex flex-col justify-center px-4 sm:px-6">
            <div className="max-w-xs sm:max-w-md md:max-w-lg lg:max-w-3xl">
              <span
                className={`inline-block text-xs sm:text-sm md:text-base uppercase tracking-widest text-white font-light mb-2 sm:mb-4 opacity-0 ${
                  index === activeSlide ? "animate-slide-up" : ""
                }`}
                style={{ animationDelay: "0.2s" }}
              >
                {slide.subtitle}
              </span>
              <h1
                className={`text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl text-white font-serif font-bold leading-tight mb-4 sm:mb-6 opacity-0 ${
                  index === activeSlide ? "animate-slide-up" : ""
                }`}
                style={{ animationDelay: "0.4s" }}
              >
                {slide.title}
              </h1>
              {slide.buttonText && slide.buttonLink && (
                <div
                  className={`opacity-0 ${
                    index === activeSlide ? "animate-slide-up" : ""
                  }`}
                  style={{ animationDelay: "0.6s" }}
                >
                  <Link
                    href={slide.buttonLink}
                    className="btn-gold text-sm sm:text-base"
                  >
                    {slide.buttonText}
                  </Link>
                </div>
              )}
            </div>
          </div>
        </div>
      ))}

      {/* Navigation Arrows */}
      <div className="absolute bottom-1/2 left-2 sm:left-4 md:left-8 z-20 transform translate-y-1/2">
        <button
          onClick={goToPrevSlide}
          className="bg-white/10 backdrop-blur-sm text-white p-1 sm:p-2 rounded-full hover:bg-white/20 transition-colors"
          aria-label="Previous slide"
        >
          <ChevronLeft className="h-4 w-4 sm:h-6 sm:w-6" />
        </button>
      </div>
      <div className="absolute bottom-1/2 right-2 sm:right-4 md:right-8 z-20 transform translate-y-1/2">
        <button
          onClick={goToNextSlide}
          className="bg-white/10 backdrop-blur-sm text-white p-1 sm:p-2 rounded-full hover:bg-white/20 transition-colors"
          aria-label="Next slide"
        >
          <ChevronRight className="h-4 w-4 sm:h-6 sm:w-6" />
        </button>
      </div>

      {/* Dots */}
      <div className="absolute bottom-4 sm:bottom-6 md:bottom-8 left-0 right-0 z-20 flex justify-center">
        <div className="flex space-x-2">
          {slides?.map((_, index) => (
            <button
              key={index}
              onClick={() => {
                setSlideDirection(index > activeSlide ? "right" : "left");
                setActiveSlide(index);
              }}
              className={`w-2 h-2 sm:w-3 sm:h-3 rounded-full transition-colors ${
                index === activeSlide ? "bg-white" : "bg-white/40"
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;
