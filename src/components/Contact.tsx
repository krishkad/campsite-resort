"use client";
import { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Badge } from '@/components/ui/badge';
import { MapPin, Phone, Mail, Clock, MessageSquare } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Contact form submitted:', formData);
    // Handle form submission with success animation
  };

  const contactInfo = [
    {
      icon: Phone,
      title: "Call Us",
      primary: "+1 (555) 123-4567",
      secondary: "Available 24/7 for reservations",
      color: "text-emerald-600"
    },
    {
      icon: Mail,
      title: "Email Us",
      primary: "hello@pinevalleyresort.com",
      secondary: "We reply within 2 hours",
      color: "text-teal-600"
    },
    {
      icon: MapPin,
      title: "Visit Us",
      primary: "123 Pine Valley Road",
      secondary: "Mountain View, CA 94041",
      color: "text-green-600"
    },
    {
      icon: Clock,
      title: "Office Hours",
      primary: "Mon-Sun: 8:00 AM - 8:00 PM",
      secondary: "Emergency contact available 24/7",
      color: "text-emerald-700"
    }
  ];

  return (
    <section className="py-24 w-full bg-white relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-1/4 right-1/4 w-80 h-80 bg-emerald-300 rounded-full filter blur-3xl"></div>
        <div className="absolute bottom-1/4 left-1/4 w-72 h-72 bg-teal-300 rounded-full filter blur-3xl"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-light text-gray-800 mb-6 tracking-tight">
            Get in
            <span className="block font-extralight bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent">
              Touch
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto font-light leading-relaxed">
            Ready to embark on your wilderness adventure? We&apos;re here to help plan your perfect escape
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 max-w-7xl mx-auto">
          {/* Contact Information */}
          <div className="space-y-8">
            <div className="mb-12">
              <Badge className="mb-4 bg-emerald-100 text-emerald-700 hover:bg-emerald-200 px-4 py-2 rounded-full">
                Contact Information
              </Badge>
              <h3 className="text-3xl font-light text-gray-800 mb-4">
                Let&apos;s Start Planning Your Adventure
              </h3>
              <p className="text-gray-600 font-light leading-relaxed">
                Our concierge team is ready to help you create the perfect wilderness getaway. 
                From accommodation selection to activity planning, we&apos;re here every step of the way.
              </p>
            </div>

            {/* Contact Cards */}
            <div className="grid md:grid-cols-2 gap-6">
              {contactInfo.map((info, index) => (
                <Card key={index} className="group hover:shadow-xl transition-all duration-300 border-0 bg-gradient-to-br from-gray-50 to-emerald-50/30 p-0">
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <div className={`w-12 h-12 rounded-xl bg-white shadow-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                        <info.icon className={`w-6 h-6 ${info.color}`} />
                      </div>
                      <div className="flex-1">
                        <h4 className="font-medium text-gray-800 mb-1">{info.title}</h4>
                        <p className="text-gray-900 font-medium text-sm mb-1">{info.primary}</p>
                        <p className="text-sm text-gray-600">{info.secondary}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Map Placeholder */}
            <Card className="shadow-xl border-0 overflow-hidden p-0">
              <CardContent className="p-0">
                <div className="h-64 bg-gradient-to-br from-emerald-100 to-teal-100 flex items-center justify-center relative">
                  <div className="text-center">
                    <MapPin className="w-12 h-12 text-emerald-600 mx-auto mb-4" />
                    <h4 className="text-xl font-medium text-gray-800 mb-2">Interactive Map</h4>
                    <p className="text-gray-600">Pine Valley Resort Location</p>
                    <p className="text-sm text-gray-500 mt-2">
                      Nestled in the heart of California&apos;s pristine wilderness
                    </p>
                  </div>
                  
                  {/* Decorative Elements */}
                  <div className="absolute top-4 left-4 w-3 h-3 bg-emerald-400 rounded-full animate-pulse"></div>
                  <div className="absolute bottom-4 right-4 w-2 h-2 bg-teal-400 rounded-full animate-bounce"></div>
                  <div className="absolute top-1/3 right-1/4 w-4 h-4 bg-green-300 rounded-full animate-ping"></div>
                </div>
              </CardContent>
            </Card>

            {/* WhatsApp Button */}
            <Card className="border-0 bg-gradient-to-r from-green-500 to-green-600 text-white hover:from-green-600 hover:to-green-700 transition-all duration-300 cursor-pointer group p-0">
              <CardContent className="p-6">
                <div className="flex items-center justify-center space-x-4">
                  <div className="text-3xl">📱</div>
                  <div className="text-center">
                    <h4 className="font-medium text-lg">WhatsApp Us</h4>
                    <p className="text-green-100">Quick responses & instant booking</p>
                  </div>
                  <div className="text-2xl group-hover:scale-110 transition-transform duration-300">💬</div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Contact Form */}
          <Card className="shadow-2xl h-max border-0 bg-white/80 backdrop-blur-sm">
            <CardContent className="p-8 md:p-10">
              <div className="mb-8">
                <Badge className="mb-4 bg-teal-100 text-teal-700 hover:bg-teal-200 px-4 py-2 rounded-full">
                  Send Message
                </Badge>
                <h3 className="text-2xl font-light text-gray-800 mb-2">
                  Tell Us About Your Dream Getaway
                </h3>
                <p className="text-gray-600">
                  Share your vision and we&apos;ll help make it reality
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="contact-name" className="text-gray-700 font-medium">Full Name</Label>
                    <Input
                      id="contact-name"
                      type="text"
                      value={formData.name}
                      onChange={(e) => handleInputChange('name', e.target.value)}
                      className="rounded-xl border-gray-200 focus:border-emerald-500 focus:ring-emerald-500 h-12"
                      placeholder="Your full name"
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="contact-email" className="text-gray-700 font-medium">Email Address</Label>
                    <Input
                      id="contact-email"
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
                  <Label htmlFor="contact-subject" className="text-gray-700 font-medium">Subject</Label>
                  <Input
                    id="contact-subject"
                    type="text"
                    value={formData.subject}
                    onChange={(e) => handleInputChange('subject', e.target.value)}
                    className="rounded-xl border-gray-200 focus:border-emerald-500 focus:ring-emerald-500 h-12"
                    placeholder="What can we help you with?"
                    required
                  />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="contact-message" className="text-gray-700 font-medium flex items-center">
                    <MessageSquare className="w-4 h-4 mr-2 text-emerald-600" />
                    Message
                  </Label>
                  <Textarea
                    id="contact-message"
                    value={formData.message}
                    onChange={(e) => handleInputChange('message', e.target.value)}
                    className="rounded-xl border-gray-200 focus:border-emerald-500 focus:ring-emerald-500 min-h-32"
                    rows={6}
                    placeholder="Tell us about your ideal getaway, preferred dates, special occasions, or any questions you might have..."
                    required
                  />
                </div>
                
                <Button 
                  type="submit"
                  className="w-full bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-600 hover:to-teal-700 text-white rounded-xl py-4 text-lg font-medium shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
                >
                  Send Message
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Contact;