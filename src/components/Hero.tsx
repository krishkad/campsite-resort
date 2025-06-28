"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { ChevronDown } from "lucide-react";

const Hero = () => {
  const [currentImage, setCurrentImage] = useState(0);

  const heroImages = [
    "https://images.unsplash.com/photo-1472396961693-142e6e269027?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80",
    "https://images.unsplash.com/photo-1482938289607-e9573fc25ebb?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80",
    "https://images.unsplash.com/photo-1500673922987-e212871fec22?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80",
    "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80",
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % heroImages.length);
    }, 6000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative h-dvh flex items-center justify-center overflow-hidden">
      {/* Background Image Slider */}
      <div className="absolute inset-0 z-0">
        {heroImages.map((image, index) => (
          <div
            key={index}
            className={`absolute inset-0 bg-cover bg-center transition-all duration-2000 ease-in-out ${
              index === currentImage
                ? "opacity-100 scale-100"
                : "opacity-0 scale-110"
            }`}
            style={{ backgroundImage: `url(${image})` }}
          />
        ))}
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/20 to-black/40"></div>
      </div>

      {/* Floating Elements */}
      <div className="absolute inset-0 z-10">
        <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-white/20 rounded-full animate-pulse"></div>
        <div className="absolute top-1/3 right-1/3 w-1 h-1 bg-white/30 rounded-full animate-ping"></div>
        <div className="absolute bottom-1/3 left-1/3 w-3 h-3 bg-white/10 rounded-full animate-bounce"></div>
      </div>

      {/* Content */}
      <div className="relative z-20 text-center text-white px-4 max-w-5xl mx-auto">
        <div className="animate-fade-in-up">
          <h1 className="text-6xl md:text-8xl font-light mb-6 tracking-wide">
            Reconnect with
            <span className="block font-extralight bg-gradient-to-r from-emerald-400 to-teal-300 bg-clip-text text-transparent">
              Nature in Luxury
            </span>
          </h1>
          <p className="text-xl md:text-2xl mb-12 font-light opacity-90 max-w-3xl mx-auto leading-relaxed">
            Escape to our premium wilderness retreat where sophisticated comfort
            meets untamed beauty. Create memories that transcend the ordinary.
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <Button
              size="lg"
              className="bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-600 hover:to-teal-700 text-white px-12 py-4 text-lg font-medium rounded-full shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105 border-0"
            >
              Book Your Escape
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-2 border-white/30 text-white bg-white/10 backdrop-blur-sm hover:bg-white/20 px-12 py-4 text-lg font-medium rounded-full transition-all duration-300 transform hover:scale-105"
            >
              Explore Experiences
            </Button>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-12 left-1/2 transform -translate-x-1/2 text-white animate-bounce z-20">
        <div className="flex flex-col items-center space-y-2">
          <span className="text-sm font-light tracking-widest">DISCOVER</span>
          <ChevronDown className="w-6 h-6 animate-pulse" />
        </div>
      </div>

      {/* Image Navigation Dots */}
      <div className="absolute bottom-8 right-8 flex space-x-3 z-20">
        {heroImages.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentImage(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === currentImage
                ? "bg-white scale-125"
                : "bg-white/40 hover:bg-white/60"
            }`}
          />
        ))}
      </div>
    </section>
  );
};

export default Hero;
