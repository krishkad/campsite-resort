"use client";

import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const DayExperience = () => {
  const [activeStep, setActiveStep] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const daySchedule = [
    {
      time: "7:00 AM",
      title: "Sunrise Yoga",
      description:
        "Begin your day with gentle yoga as the sun rises over the mountains, connecting body and spirit with nature's awakening.",
      icon: "🧘‍♀️",
      image:
        "https://images.unsplash.com/photo-1472396961693-142e6e269027?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      color: "from-orange-400 to-pink-400",
    },
    {
      time: "8:30 AM",
      title: "Gourmet Breakfast",
      description:
        "Savor locally-sourced delicacies and artisanal coffee on your private deck while birds serenade the morning.",
      icon: "🥐",
      image:
        "https://images.unsplash.com/photo-1482938289607-e9573fc25ebb?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      color: "from-yellow-400 to-orange-400",
    },
    {
      time: "10:00 AM",
      title: "Forest Discovery",
      description:
        "Explore hidden trails with our naturalist guides, discovering rare wildlife and pristine wilderness landscapes.",
      icon: "🌲",
      image:
        "https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      color: "from-green-400 to-emerald-400",
    },
    {
      time: "2:00 PM",
      title: "Lake Adventures",
      description:
        "Kayak across crystal-clear waters or try your hand at catch-and-release fishing in our pristine alpine lake.",
      icon: "🛶",
      image:
        "https://images.unsplash.com/photo-1500673922987-e212871fec22?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      color: "from-blue-400 to-cyan-400",
    },
    {
      time: "6:30 PM",
      title: "Campfire Feast",
      description:
        "Gather around the fire for a chef-prepared meal featuring local ingredients and s'mores under the evening sky.",
      icon: "🔥",
      image:
        "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      color: "from-red-400 to-orange-400",
    },
    {
      time: "9:00 PM",
      title: "Stargazing",
      description:
        "Marvel at the Milky Way through our telescope while learning constellations from astronomy experts.",
      icon: "⭐",
      image:
        "https://images.unsplash.com/photo-1472396961693-142e6e269027?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      color: "from-purple-400 to-indigo-400",
    },
  ];

  useEffect(() => {
    if (isAutoPlaying) {
      const interval = setInterval(() => {
        setActiveStep((prev) => (prev + 1) % daySchedule.length);
      }, 4000);
      return () => clearInterval(interval);
    }
  }, [isAutoPlaying, daySchedule.length]);

  const nextStep = () => {
    setActiveStep((prev) => (prev + 1) % daySchedule.length);
    setIsAutoPlaying(false);
  };

  const prevStep = () => {
    setActiveStep(
      (prev) => (prev - 1 + daySchedule.length) % daySchedule.length
    );
    setIsAutoPlaying(false);
  };

  return (
    <section className="py-24 bg-gradient-to-br from-emerald-50 to-teal-50 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-emerald-300 rounded-full filter blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-teal-300 rounded-full filter blur-3xl"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-20">
          <h2 className="text-5xl md:text-6xl font-light text-gray-800 mb-6 tracking-tight">
            What Your Day
            <span className="block font-extralight bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent">
              Looks Like
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto font-light leading-relaxed">
            Every moment is carefully crafted to blend adventure with
            tranquility, creating memories that last a lifetime
          </p>
        </div>

        {/* Main Experience Display */}
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
            {/* Image Side */}
            <div className="relative">
              <div className="aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl">
                <img
                  src={daySchedule[activeStep].image}
                  alt={daySchedule[activeStep].title}
                  className="w-full h-full object-cover transition-all duration-700"
                />
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${daySchedule[activeStep].color} opacity-20`}
                ></div>
              </div>

              {/* Floating Time Badge */}
              <div className="absolute -top-4 -right-4 bg-white rounded-2xl px-6 py-3 shadow-xl">
                <span className="text-2xl font-light text-gray-800">
                  {daySchedule[activeStep].time}
                </span>
              </div>
            </div>

            {/* Content Side */}
            <div className="space-y-6">
              <div className="text-6xl mb-4">
                {daySchedule[activeStep].icon}
              </div>
              <h3 className="text-4xl font-light text-gray-800 mb-4">
                {daySchedule[activeStep].title}
              </h3>
              <p className="text-lg text-gray-600 leading-relaxed font-light">
                {daySchedule[activeStep].description}
              </p>

              {/* Navigation Controls */}
              <div className="flex items-center space-x-4 pt-6">
                <Button
                  onClick={prevStep}
                  variant="outline"
                  size="icon"
                  className="rounded-full w-12 h-12 border-2 hover:bg-emerald-50"
                >
                  <ChevronLeft className="w-5 h-5" />
                </Button>

                <div className="flex space-x-2">
                  {daySchedule.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => {
                        setActiveStep(index);
                        setIsAutoPlaying(false);
                      }}
                      className={`w-3 h-3 rounded-full transition-all duration-300 ${
                        index === activeStep
                          ? "bg-emerald-500 scale-125"
                          : "bg-gray-300 hover:bg-gray-400"
                      }`}
                    />
                  ))}
                </div>

                <Button
                  onClick={nextStep}
                  variant="outline"
                  size="icon"
                  className="rounded-full w-12 h-12 border-2 hover:bg-emerald-50"
                >
                  <ChevronRight className="w-5 h-5" />
                </Button>
              </div>
            </div>
          </div>

          {/* Timeline Overview */}
          <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-8 shadow-xl">
            <h4 className="text-2xl font-light text-gray-800 mb-6 text-center">
              Complete Day Timeline
            </h4>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
              {daySchedule.map((step, index) => (
                <button
                  key={index}
                  onClick={() => {
                    setActiveStep(index);
                    setIsAutoPlaying(false);
                  }}
                  className={`p-4 rounded-xl text-center transition-all duration-300 ${
                    index === activeStep
                      ? "bg-gradient-to-br from-emerald-500 to-teal-600 text-white shadow-lg scale-105"
                      : "bg-white/80 text-gray-700 hover:bg-white hover:shadow-md"
                  }`}
                >
                  <div className="text-2xl mb-2">{step.icon}</div>
                  <div className="text-sm font-medium">{step.time}</div>
                  <div className="text-xs mt-1 opacity-80">{step.title}</div>
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DayExperience;
