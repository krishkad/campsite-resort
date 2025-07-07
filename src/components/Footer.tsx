import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { MapPin, Phone, Mail, Calendar } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-br from-gray-900 via-gray-800 to-emerald-900 text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-emerald-500 rounded-full filter blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-teal-500 rounded-full filter blur-3xl"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Newsletter Section */}
        <div className="py-16 border-b border-white/10">
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="mb-4 bg-emerald-600 text-white hover:bg-emerald-700 px-4 py-2 rounded-full">
              Stay Connected
            </Badge>
            <h3 className="text-3xl md:text-4xl font-light mb-4">
              Join Our Wilderness Community
            </h3>
            <p className="text-xl text-gray-300 mb-8 font-light">
              Receive exclusive offers, seasonal updates, and insider guides to
              wilderness adventures
            </p>

            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <Input
                type="email"
                placeholder="Enter your email"
                className="flex-1 bg-white/10 border-white/20 text-white placeholder:text-gray-400 rounded-xl h-12 focus:border-emerald-400"
              />
              <Button className="h-max bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-600 hover:to-teal-700 text-white rounded-xl px-8 whitespace-nowrap">
                Subscribe
              </Button>
            </div>
          </div>
        </div>

        {/* Main Footer Content */}
        <div className="py-16">
          <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-12">
            {/* Brand Column */}
            <div className="lg:col-span-2">
              <div className="mb-6">
                <h3 className="text-3xl font-light mb-2">
                  <span className="font-extralight">Pine Valley</span>
                  <span className="font-medium ml-2 bg-gradient-to-r from-emerald-400 to-teal-400 bg-clip-text text-transparent">
                    Resort
                  </span>
                </h3>
                <p className="text-gray-300 font-light leading-relaxed max-w-md">
                  Where wilderness meets luxury. We create extraordinary
                  experiences that reconnect you with nature&apos;s beauty while
                  providing unparalleled comfort and service.
                </p>
              </div>

              {/* Social Links */}
              <div className="flex space-x-4">
                <Button
                  variant="outline"
                  size="icon"
                  className="rounded-full border-white/20 text-white hover:bg-white/10 hover:border-emerald-400"
                >
                  <span className="text-lg">📘</span>
                </Button>
                <Button
                  variant="outline"
                  size="icon"
                  className="rounded-full border-white/20 text-white hover:bg-white/10 hover:border-emerald-400"
                >
                  <span className="text-lg">📷</span>
                </Button>
                <Button
                  variant="outline"
                  size="icon"
                  className="rounded-full border-white/20 text-white hover:bg-white/10 hover:border-emerald-400"
                >
                  <span className="text-lg">🐦</span>
                </Button>
                <Button
                  variant="outline"
                  size="icon"
                  className="rounded-full border-white/20 text-white hover:bg-white/10 hover:border-emerald-400"
                >
                  <span className="text-lg">🎥</span>
                </Button>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-xl font-medium mb-6 text-emerald-400">
                Experience
              </h4>
              <ul className="space-y-3">
                {[
                  "Accommodations",
                  "Day Adventures",
                  "Gallery",
                  "Guest Stories",
                  "Booking",
                  "Gift Cards",
                ].map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-gray-300 hover:text-emerald-400 transition-colors duration-200 font-light"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h4 className="text-xl font-medium mb-6 text-emerald-400">
                Contact
              </h4>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <MapPin className="w-5 h-5 text-emerald-400 mt-1 flex-shrink-0" />
                  <div>
                    <p className="text-gray-300 font-light">
                      123 Pine Valley Road
                    </p>
                    <p className="text-gray-300 font-light">
                      Mountain View, CA 94041
                    </p>
                  </div>
                </div>

                <div className="flex items-center space-x-3">
                  <Phone className="w-5 h-5 text-emerald-400 flex-shrink-0" />
                  <p className="text-gray-300 font-light">+1 (555) 123-4567</p>
                </div>

                <div className="flex items-center space-x-3">
                  <Mail className="w-5 h-5 text-emerald-400 flex-shrink-0" />
                  <p className="text-gray-300 font-light">
                    hello@pinevalleyresort.com
                  </p>
                </div>

                <div className="flex items-start space-x-3">
                  <Calendar className="w-5 h-5 text-emerald-400 mt-1 flex-shrink-0" />
                  <div>
                    <p className="text-gray-300 font-light">Reception Hours:</p>
                    <p className="text-gray-300 font-light">
                      8:00 AM - 8:00 PM Daily
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 py-8">
          <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
            <div className="flex flex-col md:flex-row items-center space-y-2 md:space-y-0 md:space-x-6 text-gray-400 text-sm">
              <p>&copy; 2024 Pine Valley Resort. All rights reserved.</p>
              <div className="flex space-x-4">
                <a
                  href="#"
                  className="hover:text-emerald-400 transition-colors duration-200"
                >
                  Privacy Policy
                </a>
                <a
                  href="#"
                  className="hover:text-emerald-400 transition-colors duration-200"
                >
                  Terms of Service
                </a>
                <a
                  href="#"
                  className="hover:text-emerald-400 transition-colors duration-200"
                >
                  Sustainability
                </a>
              </div>
            </div>

            <div className="flex items-center space-x-2 text-gray-400 text-sm">
              <span>Developed by</span>
              <span className="text-emerald-400 text-lg">Krrish</span>
              <span>for nature lovers</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
