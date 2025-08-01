"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { name: "Home", href: "/#hero" },
    { name: "Camps", href: "/#camps" },
    { name: "Experience", href: "/#experience" },
    { name: "Gallery", href: "/#gallery" },
    { name: "Blog", href: "/blog" },
    { name: "Contact", href: "/#contact" },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled || isMobileMenuOpen
          ? "bg-white/95 backdrop-blur-lg shadow-xl border-b border-gray-100"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div
            className={`text-2xl font-light tracking-wide transition-colors duration-300 ${
              isScrolled || isMobileMenuOpen ? "text-gray-800" : "text-white"
            }`}
          >
            <span className="font-extralight">Pine Valley</span>
            <span className="font-medium ml-2 bg-gradient-to-r from-emerald-500 to-teal-600 bg-clip-text text-transparent">
              Resort
            </span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={`font-light tracking-wide transition-all duration-300 hover:scale-110 ${
                  isScrolled
                    ? "text-gray-700 hover:text-emerald-600"
                    : "text-white/90 hover:text-white"
                }`}
              >
                {item.name}
              </Link>
            ))}
          </div>

          {/* CTA Button */}
          <div className="hidden md:block">
            <Button
              className={`${"bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-600 hover:to-teal-700 text-white"} transition-all duration-300 rounded-full px-8 py-2 font-medium backdrop-blur-sm`}
            >
              Book Now
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className={`md:hidden transition-colors duration-300 ease-in-out ${
              isScrolled || isMobileMenuOpen ? "text-gray-800" : "text-white"
            }`}
          >
            <div className="relative w-6 h-6 flex items-center justify-center">
              {/* Top bar */}
              <span
                className={`absolute h-0.5 w-6 bg-current transition-all duration-300 ease-in-out transform origin-center ${
                  isMobileMenuOpen ? "rotate-45" : "-translate-y-2.5"
                }`}
              ></span>

              {/* Middle bar */}
              <span
                className={`absolute h-0.5 w-6 bg-current transition-all duration-300 ease-in-out ${
                  isMobileMenuOpen ? "opacity-0" : "opacity-100"
                }`}
              ></span>

              {/* Bottom bar */}
              <span
                className={`absolute h-0.5 w-6 bg-current transition-all duration-300 ease-in-out transform origin-center ${
                  isMobileMenuOpen ? "-rotate-45" : "translate-y-2.5"
                }`}
              ></span>
            </div>
          </button>
        </div>

        {/* Mobile Menu */}
        <div
          className={`md:hidden overflow-hidden transition-all duration-300 ${
            isMobileMenuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <div className="pt-6 pb-4 space-y-4">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className={`block font-light tracking-wide transition-colors duration-300 ${
                  isScrolled || isMobileMenuOpen
                    ? "text-gray-700 hover:text-emerald-600"
                    : "text-white/90 hover:text-white"
                }`}
              >
                {item.name}
              </Link>
            ))}
            <Button className="w-full mt-4 bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-600 hover:to-teal-700 text-white rounded-full">
              Book Now
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
