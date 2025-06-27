"use client";



import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const BookingForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    guests: '',
    accommodation: '',
    checkin: '',
    checkout: '',
    requests: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Booking submitted:', formData);
    // Handle form submission
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  return (
    <section id="booking" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            Book Your Escape
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Ready to disconnect from the world and reconnect with nature?
          </p>
        </div>

        <div className="max-w-2xl mx-auto">
          <Card className="shadow-xl">
            <CardHeader className="bg-green-600 text-white rounded-t-lg">
              <CardTitle className="text-2xl text-center">Reservation Details</CardTitle>
            </CardHeader>
            <CardContent className="p-8">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <Label htmlFor="name" className="text-gray-700 font-semibold">Full Name *</Label>
                    <Input
                      id="name"
                      type="text"
                      value={formData.name}
                      onChange={(e) => handleInputChange('name', e.target.value)}
                      className="mt-2 border-gray-300 focus:border-green-500"
                      required
                    />
                  </div>
                  
                  <div>
                    <Label htmlFor="email" className="text-gray-700 font-semibold">Email *</Label>
                    <Input
                      id="email"
                      type="email"
                      value={formData.email}
                      onChange={(e) => handleInputChange('email', e.target.value)}
                      className="mt-2 border-gray-300 focus:border-green-500"
                      required
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <Label htmlFor="phone" className="text-gray-700 font-semibold">Phone Number</Label>
                    <Input
                      id="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => handleInputChange('phone', e.target.value)}
                      className="mt-2 border-gray-300 focus:border-green-500"
                    />
                  </div>
                  
                  <div>
                    <Label htmlFor="guests" className="text-gray-700 font-semibold">Number of Guests *</Label>
                    <Select onValueChange={(value) => handleInputChange('guests', value)}>
                      <SelectTrigger className="mt-2 border-gray-300 focus:border-green-500">
                        <SelectValue placeholder="Select guests" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="1">1 Guest</SelectItem>
                        <SelectItem value="2">2 Guests</SelectItem>
                        <SelectItem value="3">3 Guests</SelectItem>
                        <SelectItem value="4">4 Guests</SelectItem>
                        <SelectItem value="5">5+ Guests</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div>
                  <Label htmlFor="accommodation" className="text-gray-700 font-semibold">Accommodation Type *</Label>
                  <Select onValueChange={(value) => handleInputChange('accommodation', value)}>
                    <SelectTrigger className="mt-2 border-gray-300 focus:border-green-500">
                      <SelectValue placeholder="Choose accommodation" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="dome">Luxury Glamping Dome</SelectItem>
                      <SelectItem value="cottage">Forest Cottage</SelectItem>
                      <SelectItem value="tent">Premium Safari Tent</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <Label htmlFor="checkin" className="text-gray-700 font-semibold">Check-in Date *</Label>
                    <Input
                      id="checkin"
                      type="date"
                      value={formData.checkin}
                      onChange={(e) => handleInputChange('checkin', e.target.value)}
                      className="mt-2 border-gray-300 focus:border-green-500"
                      required
                    />
                  </div>
                  
                  <div>
                    <Label htmlFor="checkout" className="text-gray-700 font-semibold">Check-out Date *</Label>
                    <Input
                      id="checkout"
                      type="date"
                      value={formData.checkout}
                      onChange={(e) => handleInputChange('checkout', e.target.value)}
                      className="mt-2 border-gray-300 focus:border-green-500"
                      required
                    />
                  </div>
                </div>

                <div>
                  <Label htmlFor="requests" className="text-gray-700 font-semibold">Special Requests</Label>
                  <Textarea
                    id="requests"
                    value={formData.requests}
                    onChange={(e) => handleInputChange('requests', e.target.value)}
                    className="mt-2 border-gray-300 focus:border-green-500"
                    rows={4}
                    placeholder="Any special requirements or requests for your stay..."
                  />
                </div>

                <Button 
                  type="submit" 
                  className="w-full bg-orange-500 hover:bg-orange-600 text-white py-3 text-lg font-semibold"
                >
                  Reserve Your Spot
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default BookingForm;