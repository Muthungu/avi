"use client";
import React, { useState, useEffect } from 'react';
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from '@/components/ui/navigation-menu';
import Link from 'next/link';
import { HiMenu, HiX } from 'react-icons/hi'; // Hamburger and close icons

const TopNavigation: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Close the menu on scroll
  useEffect(() => {
    const handleScroll = () => {
      setIsMenuOpen(false);
    };

    // Attach the scroll event listener
    window.addEventListener('scroll', handleScroll);

    // Clean up the event listener on component unmount
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header className="w-full bg-white/70 backdrop-blur-md sticky top-0 z-50">
      <nav className="container mx-auto flex justify-between items-center py-4">
        {/* Left Side: Desktop Navigation Items */}
        <div className="hidden md:flex items-center space-x-6 flex-grow justify-center">
          <NavigationMenu>
            <NavigationMenuList className="flex space-x-16">
              <NavigationMenuItem>
                <NavigationMenuLink asChild>
                  <Link
                    href="#about"
                    className="text-Primary hover:text-Secondary transition-colors"
                  >
                    About Us
                  </Link>
                </NavigationMenuLink>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuLink asChild>
                  <Link
                    href="#services"
                    className="text-Primary hover:text-Secondary transition-colors"
                  >
                    Our Services
                  </Link>
                </NavigationMenuLink>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
        </div>

        {/* Center Logo */}
        <div className="text-2xl font-bold mx-4">
          <Link href="/" aria-label="Home">
            <img src="/avi.svg" alt="Iter Vitae Africa Logo" className="h-16 w-16" />
          </Link>
        </div>

        {/* Right Side: Desktop Navigation Item */}
        <div className="hidden md:flex items-center space-x-6 flex-grow justify-center">
          <NavigationMenu>
            <NavigationMenuList>
              <NavigationMenuItem>
                <NavigationMenuLink asChild>
                  <Link
                    href="#contact"
                    className="text-Primary hover:text-Secondary px-9 py-2 transition-colors"
                  >
                    Contact Us
                  </Link>
                </NavigationMenuLink>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
        </div>

        {/* Mobile Menu Button (visible on smaller screens) */}
        <button
          className="md:hidden text-3xl"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? <HiX /> : <HiMenu />}
        </button>
      </nav>

      {/* Mobile Menu (only visible when isMenuOpen is true) */}
      {isMenuOpen && (
        <div className="md:hidden absolute top-24 left-0 w-full bg-white shadow-md"> {/* Adjusted top to 24 for spacing */}
          <div className="flex flex-col items-center py-4 space-y-4">
            <Link
              href="#about"
              className="text-Primary hover:text-Secondary transition-colors"
              onClick={() => setIsMenuOpen(false)} // Close menu on item click
            >
              About Us
            </Link>
            <Link
              href="#services"
              className="text-Primary hover:text-Secondary transition-colors"
              onClick={() => setIsMenuOpen(false)} // Close menu on item click
            >
              Our Services
            </Link>
            <Link
              href="#contact"
              className="text-Primary hover:text-Secondary transition-colors"
              onClick={() => setIsMenuOpen(false)} // Close menu on item click
            >
              Contact Us
            </Link>
          </div>
        </div>
      )}
    </header>
  );
};

export default TopNavigation;
