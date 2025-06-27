"use client";



import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Calendar, Users, MapPin, Phone, Mail, MessageSquare } from 'lucide-react';

const BookingSection = () => {
  const [currentStep, setCurrentStep] = useState(1);
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

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Booking submitted:', formData);
    // Handle form submission with success animation
  };

  const nextStep = () => {
    if (currentStep < 3) setCurrentStep(currentStep + 1);
  };

  const prevStep = () => {
    if (currentStep > 1) setCurrentStep(currentStep - 1);
  };

  return (
    <section className="py-24 bg-gradient-to-br from-emerald-50 to-teal-50 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-1/3 left-1/4 w-72 h-72 bg-emerald-400 rounded-full filter blur-3xl"></div>
        <div className="absolute bottom-1/3 right-1/4 w-80 h-80 bg-teal-400 rounded-full filter blur-3xl"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-light text-gray-800 mb-6 tracking-tight">
            Reserve Your
            <span className="block font-extralight bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent">
              Perfect Escape
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto font-light leading-relaxed">
            Begin your journey to tranquility with our seamless booking experience
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          {/* Progress Steps */}
          <div className="flex justify-center mb-12">
            <div className="flex items-center space-x-8">
              {[1, 2, 3].map((step) => (
                <div key={step} className="flex items-center">
                  <div className={`w-12 h-12 rounded-full flex items-center justify-center text-sm font-medium transition-all duration-300 ${
                    step === currentStep 
                      ? 'bg-gradient-to-r from-emerald-500 to-teal-600 text-white shadow-lg scale-110' 
                      : step < currentStep
                      ? 'bg-emerald-500 text-white'
                      : 'bg-white text-gray-400 border-2 border-gray-200'
                  }`}>
                    {step < currentStep ? '✓' : step}
                  </div>
                  {step < 3 && (
                    <div className={`w-16 h-0.5 ml-4 transition-colors duration-300 ${
                      step < currentStep ? 'bg-emerald-500' : 'bg-gray-200'
                    }`}></div>
                  )}
                </div>
              ))}
            </div>
          </div>

          <Card className="shadow-2xl border-0 bg-white/80 backdrop-blur-sm p-0">
            <CardContent className="p-8 md:p-12">
              <form onSubmit={handleSubmit} className="space-y-8">
                
                {/* Step 1: Personal Information */}
                {currentStep === 1 && (
                  <div className="space-y-6 animate-fade-in">
                    <div className="text-center mb-8">
                      <Badge className="mb-4 bg-emerald-100 text-emerald-700 hover:bg-emerald-200 px-4 py-2 rounded-full">
                        Step 1 of 3
                      </Badge>
                      <h3 className="text-2xl font-light text-gray-800">Personal Information</h3>
                      <p className="text-gray-600 mt-2">Let us know who we&apos;ll be hosting</p>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <Label htmlFor="name" className="text-gray-700 font-medium flex items-center">
                          <Users className="w-4 h-4 mr-2 text-emerald-600" />
                          Full Name
                        </Label>
                        <Input
                          id="name"
                          type="text"
                          value={formData.name}
                          onChange={(e) => handleInputChange('name', e.target.value)}
                          className="rounded-xl border-gray-200 focus:border-emerald-500 focus:ring-emerald-500 h-12"
                          placeholder="Enter your full name"
                          required
                        />
                      </div>
                      
                      <div className="space-y-2">
                        <Label htmlFor="email" className="text-gray-700 font-medium flex items-center">
                          <Mail className="w-4 h-4 mr-2 text-emerald-600" />
                          Email Address
                        </Label>
                        <Input
                          id="email"
                          type="email"
                          value={formData.email}
                          onChange={(e) => handleInputChange('email', e.target.value)}
                          className="rounded-xl border-gray-200 focus:border-emerald-500 focus:ring-emerald-500 h-12"
                          placeholder="your.email@example.com"
                          required
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="phone" className="text-gray-700 font-medium flex items-center">
                        <Phone className="w-4 h-4 mr-2 text-emerald-600" />
                        Phone Number
                      </Label>
                      <Input
                        id="phone"
                        type="tel"
                        value={formData.phone}
                        onChange={(e) => handleInputChange('phone', e.target.value)}
                        className="rounded-xl border-gray-200 focus:border-emerald-500 focus:ring-emerald-500 h-12"
                        placeholder="+1 (555) 123-4567"
                      />
                    </div>
                  </div>
                )}

                {/* Step 2: Booking Details */}
                {currentStep === 2 && (
                  <div className="space-y-6 animate-fade-in">
                    <div className="text-center mb-8">
                      <Badge className="mb-4 bg-emerald-100 text-emerald-700 hover:bg-emerald-200 px-4 py-2 rounded-full">
                        Step 2 of 3
                      </Badge>
                      <h3 className="text-2xl font-light text-gray-800">Booking Details</h3>
                      <p className="text-gray-600 mt-2">Choose your perfect accommodation and dates</p>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <Label htmlFor="guests" className="text-gray-700 font-medium flex items-center">
                          <Users className="w-4 h-4 mr-2 text-emerald-600" />
                          Number of Guests
                        </Label>
                        <Select onValueChange={(value) => handleInputChange('guests', value)}>
                          <SelectTrigger className="rounded-xl border-gray-200 focus:border-emerald-500 h-12">
                            <SelectValue placeholder="Select number of guests" />
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
                      
                      <div className="space-y-2">
                        <Label htmlFor="accommodation" className="text-gray-700 font-medium flex items-center">
                          <MapPin className="w-4 h-4 mr-2 text-emerald-600" />
                          Accommodation Type
                        </Label>
                        <Select onValueChange={(value) => handleInputChange('accommodation', value)}>
                          <SelectTrigger className="rounded-xl border-gray-200 focus:border-emerald-500 h-12">
                            <SelectValue placeholder="Choose accommodation" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="dome">Luxury Geodesic Dome</SelectItem>
                            <SelectItem value="cottage">Forest Sanctuary Suite</SelectItem>
                            <SelectItem value="tent">Riverside Glamping Tent</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <Label htmlFor="checkin" className="text-gray-700 font-medium flex items-center">
                          <Calendar className="w-4 h-4 mr-2 text-emerald-600" />
                          Check-in Date
                        </Label>
                        <Input
                          id="checkin"
                          type="date"
                          value={formData.checkin}
                          onChange={(e) => handleInputChange('checkin', e.target.value)}
                          className="rounded-xl border-gray-200 focus:border-emerald-500 focus:ring-emerald-500 h-12"
                          required
                        />
                      </div>
                      
                      <div className="space-y-2">
                        <Label htmlFor="checkout" className="text-gray-700 font-medium flex items-center">
                          <Calendar className="w-4 h-4 mr-2 text-emerald-600" />
                          Check-out Date
                        </Label>
                        <Input
                          id="checkout"
                          type="date"
                          value={formData.checkout}
                          onChange={(e) => handleInputChange('checkout', e.target.value)}
                          className="rounded-xl border-gray-200 focus:border-emerald-500 focus:ring-emerald-500 h-12"
                          required
                        />
                      </div>
                    </div>
                  </div>
                )}

                {/* Step 3: Special Requests */}
                {currentStep === 3 && (
                  <div className="space-y-6 animate-fade-in">
                    <div className="text-center mb-8">
                      <Badge className="mb-4 bg-emerald-100 text-emerald-700 hover:bg-emerald-200 px-4 py-2 rounded-full">
                        Step 3 of 3
                      </Badge>
                      <h3 className="text-2xl font-light text-gray-800">Special Requests</h3>
                      <p className="text-gray-600 mt-2">Tell us how we can make your stay perfect</p>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="requests" className="text-gray-700 font-medium flex items-center">
                        <MessageSquare className="w-4 h-4 mr-2 text-emerald-600" />
                        Additional Requests
                      </Label>
                      <Textarea
                        id="requests"
                        value={formData.requests}
                        onChange={(e) => handleInputChange('requests', e.target.value)}
                        className="rounded-xl border-gray-200 focus:border-emerald-500 focus:ring-emerald-500 min-h-32"
                        rows={6}
                        placeholder="Anniversary celebration, dietary restrictions, accessibility needs, or any special requests..."
                      />
                    </div>

                    {/* Booking Summary */}
                    <div className="bg-emerald-50 rounded-2xl p-6 mt-8">
                      <h4 className="text-lg font-medium text-gray-800 mb-4">Booking Summary</h4>
                      <div className="space-y-2 text-sm text-gray-600">
                        <div className="flex justify-between">
                          <span>Name:</span>
                          <span className="font-medium">{formData.name || 'Not specified'}</span>
                        </div>
                        <div className="flex justify-between">
                          <span>Guests:</span>
                          <span className="font-medium">{formData.guests || 'Not specified'}</span>
                        </div>
                        <div className="flex justify-between">
                          <span>Accommodation:</span>
                          <span className="font-medium">{formData.accommodation || 'Not specified'}</span>
                        </div>
                        <div className="flex justify-between">
                          <span>Dates:</span>
                          <span className="font-medium">
                            {formData.checkin && formData.checkout 
                              ? `${formData.checkin} to ${formData.checkout}`
                              : 'Not specified'
                            }
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                )}

                {/* Navigation Buttons */}
                <div className="flex justify-between pt-8">
                  <Button
                    type="button"
                    onClick={prevStep}
                    variant="outline"
                    className={`rounded-full px-8 py-3 ${
                      currentStep === 1 ? 'invisible' : ''
                    }`}
                  >
                    Previous
                  </Button>
                  
                  {currentStep < 3 ? (
                    <Button
                      type="button"
                      onClick={nextStep}
                      className="bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-600 hover:to-teal-700 text-white rounded-full px-8 py-3 shadow-lg hover:shadow-xl transition-all duration-300"
                    >
                      Continue
                    </Button>
                  ) : (
                    <Button
                      type="submit"
                      className="bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-600 hover:to-teal-700 text-white rounded-full px-12 py-3 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
                    >
                      Complete Booking
                    </Button>
                  )}
                </div>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default BookingSection;