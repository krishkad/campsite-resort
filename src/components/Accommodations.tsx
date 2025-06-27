
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

const Accommodations = () => {
  const accommodations = [
    {
      id: 1,
      name: "Luxury Glamping Dome",
      price: "$299",
      capacity: "2-4 guests",
      image: "https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      amenities: ["King Bed", "Private Bathroom", "AC/Heat", "Deck", "Fire Pit"],
      description: "Experience luxury in our geodesic domes with panoramic forest views."
    },
    {
      id: 2,
      name: "Cozy Forest Cottage",
      price: "$199",
      capacity: "2-6 guests",
      image: "https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      amenities: ["2 Bedrooms", "Full Kitchen", "Fireplace", "Porch", "BBQ Grill"],
      description: "Rustic charm meets modern comfort in our secluded cottages."
    },
    {
      id: 3,
      name: "Premium Safari Tent",
      price: "$149",
      capacity: "2-3 guests",
      image: "https://images.unsplash.com/photo-1482938289607-e9573fc25ebb?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      amenities: ["Queen Bed", "Shared Bathhouse", "Electricity", "Seating Area"],
      description: "Classic camping elevated with comfortable furnishings and amenities."
    }
  ];

  return (
    <section id="accommodations" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            Choose Your Adventure
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            From luxury glamping to cozy cottages, find the perfect accommodation for your getaway
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {accommodations.map((accommodation) => (
            <Card key={accommodation.id} className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
              <div className="relative overflow-hidden rounded-t-lg">
                <img 
                  src={accommodation.image} 
                  alt={accommodation.name}
                  className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute top-4 right-4">
                  <Badge className="bg-orange-500 text-white">
                    {accommodation.price}/night
                  </Badge>
                </div>
              </div>
              
              <CardHeader>
                <CardTitle className="text-xl text-gray-800">{accommodation.name}</CardTitle>
                <CardDescription className="text-gray-600">
                  {accommodation.capacity} • {accommodation.description}
                </CardDescription>
              </CardHeader>
              
              <CardContent>
                <div className="mb-4">
                  <h4 className="font-semibold text-gray-700 mb-2">Amenities:</h4>
                  <div className="flex flex-wrap gap-2">
                    {accommodation.amenities.map((amenity, index) => (
                      <Badge key={index} variant="outline" className="text-xs">
                        {amenity}
                      </Badge>
                    ))}
                  </div>
                </div>
                
                <Button className="w-full bg-green-600 hover:bg-green-700 text-white">
                  View Details
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Accommodations;