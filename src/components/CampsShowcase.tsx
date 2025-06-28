"use client";
import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Star } from "lucide-react";

const CampsShowcase = () => {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

  const camps = [
    {
      id: 1,
      name: "Luxury Geodesic Dome",
      type: "Premium Glamping",
      price: 399,
      rating: 4.9,
      capacity: "2-4 guests",
      image:
        "https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      amenities: [
        "360° Views",
        "King Bed",
        "Private Bath",
        "Hot Tub",
        "Fireplace",
        "AC/Heat",
      ],
      description:
        "Immerse yourself in luxury with panoramic forest views through our geodesic dome's floor-to-ceiling windows.",
      available: true,
    },
    {
      id: 2,
      name: "Forest Sanctuary Suite",
      type: "Luxury Cottage",
      price: 299,
      rating: 4.8,
      capacity: "2-6 guests",
      image:
        "https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      amenities: [
        "2 Bedrooms",
        "Full Kitchen",
        "Private Deck",
        "BBQ Grill",
        "Fireplace",
        "Forest Views",
      ],
      description:
        "A secluded haven where rustic charm meets contemporary luxury in perfect harmony.",
      available: true,
    },
    {
      id: 3,
      name: "Riverside Glamping Tent",
      type: "Safari Style",
      price: 199,
      rating: 4.7,
      capacity: "2-3 guests",
      image:
        "https://images.unsplash.com/photo-1482938289607-e9573fc25ebb?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      amenities: [
        "River Views",
        "Queen Bed",
        "Shared Bathhouse",
        "Electricity",
        "Seating Area",
        "Fire Pit",
      ],
      description:
        "Wake up to the gentle sounds of flowing water in our elegantly appointed safari-style accommodations.",
      available: false,
    },
  ];

  return (
    <section className="py-24 bg-gradient-to-br from-slate-50 to-emerald-50/30">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-20">
          <div className="inline-block">
            <Badge className="mb-4 bg-emerald-100 text-emerald-700 hover:bg-emerald-200 px-4 py-2 rounded-full">
              Premium Accommodations
            </Badge>
          </div>
          <h2 className="text-5xl md:text-6xl font-light text-gray-800 mb-6 tracking-tight">
            Choose Your
            <span className="block font-extralight bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent">
              Perfect Escape
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto font-light leading-relaxed">
            From intimate glamping domes to spacious forest cottages, each
            accommodation offers a unique blend of luxury and nature
          </p>
        </div>

        {/* Camps Grid */}
        <div className="grid lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {camps.map((camp, index) => (
            <Card
              key={camp.id}
              className={`group relative overflow-hidden border-0 shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 bg-white/80 backdrop-blur-sm p-0 ${
                hoveredCard === index ? "scale-105" : ""
              }`}
              onMouseEnter={() => setHoveredCard(index)}
              onMouseLeave={() => setHoveredCard(null)}
            >
              {/* Image Container */}
              <div className="relative overflow-hidden h-72">
                <img
                  src={camp.image}
                  alt={camp.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                {/* Price Badge */}
                <div className="absolute top-4 right-4">
                  <Badge className="bg-white/90 text-gray-800 hover:bg-white px-3 py-1 rounded-full font-medium">
                    ${camp.price}/night
                  </Badge>
                </div>

                {/* Availability Badge */}
                <div className="absolute top-4 left-4">
                  <Badge
                    className={`px-3 py-1 rounded-full font-medium ${
                      camp.available
                        ? "bg-emerald-500 text-white"
                        : "bg-red-500 text-white"
                    }`}
                  >
                    {camp.available ? "Available" : "Booked"}
                  </Badge>
                </div>

                {/* Overlay Content */}
                <div className="absolute bottom-4 left-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="flex items-center space-x-2">
                    <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                    <span className="font-medium">{camp.rating}</span>
                    <span className="text-sm opacity-75">
                      • {camp.capacity}
                    </span>
                  </div>
                </div>
              </div>

              <CardContent className="p-8">
                <div className="mb-4">
                  <Badge
                    variant="outline"
                    className="mb-3 text-emerald-600 border-emerald-200"
                  >
                    {camp.type}
                  </Badge>
                  <h3 className="text-2xl font-light text-gray-800 mb-2">
                    {camp.name}
                  </h3>
                  <p className="text-gray-600 font-light leading-relaxed">
                    {camp.description}
                  </p>
                </div>

                {/* Amenities */}
                <div className="mb-6">
                  <h4 className="text-sm font-medium text-gray-700 mb-3 tracking-wide">
                    AMENITIES
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {camp.amenities.map((amenity, idx) => (
                      <Badge
                        key={idx}
                        variant="outline"
                        className="text-xs py-1 px-2 border-gray-200 text-gray-600"
                      >
                        {amenity}
                      </Badge>
                    ))}
                  </div>
                </div>

                <Button
                  className={`w-full rounded-full py-3 font-medium transition-all duration-300 ${
                    camp.available
                      ? "bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-600 hover:to-teal-700 text-white transform hover:scale-105"
                      : "bg-gray-200 text-gray-400 cursor-not-allowed"
                  }`}
                  disabled={!camp.available}
                >
                  {camp.available ? "Reserve Now" : "Currently Unavailable"}
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CampsShowcase;
