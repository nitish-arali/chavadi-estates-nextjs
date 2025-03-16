import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight, Quote, Star } from "lucide-react";

interface Testimonial {
  id: number;
  name: string;
  role: string;
  image?: string;
  quote: string;
  rating?: number;
}

interface TestimonialSliderProps {
  testimonials: Testimonial[];
}

const TestimonialSlider = ({ testimonials }: TestimonialSliderProps) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [animating, setAnimating] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  const totalTestimonials = testimonials.length;

  const startAutoplay = () => {
    intervalRef.current = setInterval(() => {
      if (!isHovered) {
        goToNextSlide();
      }
    }, 8000);
  };

  const stopAutoplay = () => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }
  };

  useEffect(() => {
    startAutoplay();
    return () => stopAutoplay();
  }, [activeIndex, isHovered]);

  const goToNextSlide = () => {
    if (animating) return;

    setAnimating(true);
    setActiveIndex((prev) => (prev === totalTestimonials - 1 ? 0 : prev + 1));

    setTimeout(() => {
      setAnimating(false);
    }, 500);
  };

  const goToPrevSlide = () => {
    if (animating) return;

    setAnimating(true);
    setActiveIndex((prev) => (prev === 0 ? totalTestimonials - 1 : prev - 1));

    setTimeout(() => {
      setAnimating(false);
    }, 500);
  };

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  // Generate stars for rating
  const renderRating = (rating: number = 5) => {
    return (
      <div className="flex items-center space-x-1 mb-3">
        {[...Array(5)].map((_, i) => (
          <Star
            key={i}
            size={16}
            className={
              i < rating ? "text-amber-400 fill-amber-400" : "text-gray-300"
            }
          />
        ))}
      </div>
    );
  };

  return (
    <section
      className="py-16 md:py-24 relative overflow-hidden bg-gradient-to-r from-emerald-50 via-white to-emerald-50"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-12">
          <span className="text-emerald-600 uppercase tracking-wider text-sm font-medium">
            Client Testimonials
          </span>
          <h2 className="mt-2 text-3xl md:text-4xl font-serif font-bold title-with-line-center after:bg-emerald-500">
            What Our Clients Say
          </h2>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="relative">
            <div
              className="bg-white rounded-lg p-6 md:p-10 shadow-md transition-opacity duration-300"
              style={{ opacity: animating ? 0.5 : 1 }}
            >
              <div className="absolute -top-5 left-6 text-emerald-200">
                <Quote size={60} />
              </div>

              <div className="relative z-10">
                {renderRating(testimonials[activeIndex].rating)}

                <p className="text-lg md:text-xl font-light italic mb-8 text-gray-700">
                  "{testimonials[activeIndex].quote}"
                </p>

                <div className="flex items-center border-t border-gray-100 pt-6">
                  <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-emerald-100">
                    <Image
                      src={
                        testimonials[activeIndex].image ||
                        `https://ui-avatars.com/api/?name=${testimonials[activeIndex].name}&background=10B981&color=fff`
                      }
                      alt={testimonials[activeIndex].name}
                      width={48}
                      height={48}
                      className="w-full h-full object-cover"
                      loading="lazy"
                    />
                  </div>

                  <div className="ml-4">
                    <h4 className="font-semibold text-gray-900">
                      {testimonials[activeIndex].name}
                    </h4>

                    <p className="text-sm text-emerald-600">
                      {testimonials[activeIndex].role}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Navigation */}
            <div className="flex justify-center mt-8">
              <div className="flex items-center space-x-4">
                <button
                  onClick={goToPrevSlide}
                  disabled={animating}
                  className="p-2 rounded-full border border-emerald-200 hover:border-emerald-600 hover:bg-emerald-50 transition-colors text-emerald-700"
                  aria-label="Previous testimonial"
                >
                  <ChevronLeft className="h-5 w-5" />
                </button>

                <div className="flex space-x-2">
                  {testimonials.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => {
                        if (animating || index === activeIndex) return;
                        setAnimating(true);
                        setActiveIndex(index);
                        setTimeout(() => {
                          setAnimating(false);
                        }, 500);
                      }}
                      className={`w-2 h-2 rounded-full transition-all duration-300 ${
                        index === activeIndex
                          ? "bg-emerald-600 w-5"
                          : "bg-emerald-200 hover:bg-emerald-300"
                      }`}
                      aria-label={`Go to testimonial ${index + 1}`}
                    />
                  ))}
                </div>

                <button
                  onClick={goToNextSlide}
                  disabled={animating}
                  className="p-2 rounded-full border border-emerald-200 hover:border-emerald-600 hover:bg-emerald-50 transition-colors text-emerald-700"
                  aria-label="Next testimonial"
                >
                  <ChevronRight className="h-5 w-5" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialSlider;
