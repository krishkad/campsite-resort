"use client";


import { useState, useEffect } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Star, Quote, ChevronLeft, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Testimonials = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const testimonials = [
    {
      name: "Sarah Chen",
      location: "San Francisco, CA",
      rating: 5,
      comment: "An absolute sanctuary for the soul. The geodesic dome offered breathtaking views while maintaining the utmost luxury. Every detail was thoughtfully curated, from the organic breakfast to the stargazing experience. This retreat exceeded all expectations.",
      avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b47c?ixlib=rb-4.0.3&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
      stay: "Luxury Geodesic Dome",
      date: "October 2024"
    },
    {
      name: "Michael Rodriguez",
      location: "Portland, OR",
      rating: 5,
      comment: "Pine Valley Resort redefined my understanding of luxury camping. The forest cottage was impeccably designed, blending seamlessly with nature. The personalized service and attention to detail made our anniversary celebration truly unforgettable.",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
      stay: "Forest Sanctuary Suite",
      date: "September 2024"
    },
    {
      name: "Emily Watson",
      location: "Los Angeles, CA",
      rating: 5,
      comment: "Our family of four had the most magical experience. The children were enchanted by the nature activities while we adults found the perfect balance of adventure and relaxation. The staff's expertise in creating memorable moments is unparalleled.",
      avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
      stay: "Riverside Glamping Tent",
      date: "August 2024"
    },
    {
      name: "David Kim",
      location: "Seattle, WA",
      rating: 5,
      comment: "As a frequent traveler, I rarely encounter places that truly transform you. Pine Valley Resort is one such place. The harmony between luxury and nature, combined with exceptional hospitality, creates an experience that lingers long after departure.",
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
      stay: "Luxury Geodesic Dome",
      date: "July 2024"
    }
  ];

  useEffect(() => {
    if (isAutoPlaying) {
      const interval = setInterval(() => {
        setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
      }, 5000);
      return () => clearInterval(interval);
    }
  }, [isAutoPlaying, testimonials.length]);

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    setIsAutoPlaying(false);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
    setIsAutoPlaying(false);
  };

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star 
        key={i} 
        className={`w-5 h-5 ${i < rating ? 'text-yellow-400 fill-yellow-400' : 'text-gray-300'}`}
      />
    ));
  };

  return (
    <section className="py-24 bg-gradient-to-br from-gray-50 to-emerald-50/50 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-1/3 left-1/5 w-64 h-64 bg-emerald-300 rounded-full filter blur-3xl"></div>
        <div className="absolute bottom-1/3 right-1/5 w-72 h-72 bg-teal-300 rounded-full filter blur-3xl"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-light text-gray-800 mb-6 tracking-tight">
            Guest
            <span className="block font-extralight bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent">
              Experiences
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto font-light leading-relaxed">
            Discover why discerning travelers choose Pine Valley Resort for their most cherished escapes
          </p>
        </div>

        {/* Main Testimonial Display */}
        <div className="max-w-4xl mx-auto">
          <Card className="relative bg-white/80 backdrop-blur-sm border-0 shadow-2xl rounded-3xl overflow-hidden p-0">
            <CardContent className="p-12 md:p-16">
              {/* Quote Icon */}
              <div className="absolute top-8 left-8 text-emerald-200">
                <Quote className="w-16 h-16" />
              </div>

              {/* Testimonial Content */}
              <div className="relative z-10">
                <div className="flex justify-center mb-6">
                  <div className="flex space-x-1">
                    {renderStars(testimonials[currentTestimonial].rating)}
                  </div>
                </div>

                <blockquote className="text-xl md:text-2xl font-light text-gray-800 leading-relaxed text-center mb-8 italic">
                  &quot;{testimonials[currentTestimonial].comment}&quot;
                </blockquote>

                <div className="flex items-center justify-center space-x-6">
                  <Avatar className="w-16 h-16 ring-4 ring-emerald-100">
                    <AvatarImage 
                      src={testimonials[currentTestimonial].avatar} 
                      alt={testimonials[currentTestimonial].name} 
                    />
                    <AvatarFallback className="bg-emerald-500 text-white text-lg">
                      {testimonials[currentTestimonial].name.split(' ').map(n => n[0]).join('')}
                    </AvatarFallback>
                  </Avatar>
                  
                  <div className="text-center">
                    <h4 className="text-xl font-medium text-gray-800">
                      {testimonials[currentTestimonial].name}
                    </h4>
                    <p className="text-gray-600 mb-1">{testimonials[currentTestimonial].location}</p>
                    <p className="text-sm text-emerald-600 font-medium">
                      {testimonials[currentTestimonial].stay}
                    </p>
                    <p className="text-xs text-gray-500 mt-1">
                      {testimonials[currentTestimonial].date}
                    </p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Navigation Controls */}
          <div className="flex items-center justify-center space-x-6 mt-8">
            <Button
              onClick={prevTestimonial}
              variant="outline"
              size="icon"
              className="rounded-full w-12 h-12 border-2 border-emerald-200 hover:border-emerald-300 hover:bg-emerald-50"
            >
              <ChevronLeft className="w-5 h-5 text-emerald-600" />
            </Button>

            <div className="flex space-x-3">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => {
                    setCurrentTestimonial(index);
                    setIsAutoPlaying(false);
                  }}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === currentTestimonial 
                      ? 'bg-emerald-500 scale-125' 
                      : 'bg-gray-300 hover:bg-gray-400'
                  }`}
                />
              ))}
            </div>

            <Button
              onClick={nextTestimonial}
              variant="outline"
              size="icon"
              className="rounded-full w-12 h-12 border-2 border-emerald-200 hover:border-emerald-300 hover:bg-emerald-50"
            >
              <ChevronRight className="w-5 h-5 text-emerald-600" />
            </Button>
          </div>
        </div>

        {/* Additional Testimonials Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-16 max-w-6xl mx-auto">
          {testimonials.filter((_, index) => index !== currentTestimonial).slice(0, 3).map((testimonial, index) => (
            <Card 
              key={index} 
              className="bg-white/60 backdrop-blur-sm border-0 shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer hover:scale-105 p-0"
              onClick={() => {
                setCurrentTestimonial(testimonials.indexOf(testimonial));
                setIsAutoPlaying(false);
              }}
            >
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <Avatar className="w-12 h-12 mr-4">
                    <AvatarImage src={testimonial.avatar} alt={testimonial.name} />
                    <AvatarFallback className="bg-emerald-500 text-white">
                      {testimonial.name.split(' ').map(n => n[0]).join('')}
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <h4 className="font-medium text-gray-800">{testimonial.name}</h4>
                    <p className="text-sm text-gray-600">{testimonial.location}</p>
                  </div>
                </div>
                
                <div className="flex mb-3">
                  {renderStars(testimonial.rating)}
                </div>
                
                <p className="text-gray-700 text-sm italic line-clamp-3">
                  &quot;{testimonial.comment}&quot;
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;