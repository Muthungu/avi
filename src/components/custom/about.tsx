"use client";
import React, { useState } from 'react';
import Image from 'next/image'; // Use Next.js Image for optimized loading
import Vision from './vision';
import Mission from './mission';

const AboutSection: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'vision' | 'mission'>('vision');

  const renderContent = () => {
    switch (activeTab) {
      case 'vision':
        return <Vision />;
      case 'mission':
        return <Mission />;
      default:
        return null;
    }
  };

  return (
    <section id="about" className="flex flex-col md:flex-row h-screen w-full bg-white">
      {/* Left Side: Image */}
      <div className="flex-1 flex justify-center items-center p-4">
        <div className="relative w-3/4 h-3/4 rounded-lg overflow-hidden shadow-lg">
          <Image
            src="/blacksupport.jpg" // Update the image path
            alt="About Us"
            layout="fill"
            objectFit="cover"
            className="rounded-lg"
          />
        </div>
      </div>

      {/* Right Side: Vision and Mission Tabs */}
      <div className="flex-1 flex flex-col justify-center items-start p-10 space-y-4">
        <h2 className="text-4xl font-bold mb-4">About Us</h2>

        {/* Tab Links */}
        <div className="flex space-x-8 mb-4">
          <span
            className={`cursor-pointer py-2 transition-all ${
              activeTab === 'vision' 
                ? 'text-yellow-500 border-b-2 border-yellow-500'
                : 'text-gray-800'
            }`}
            onClick={() => setActiveTab('vision')}
          >
            Vision
          </span>
          <span
            className={`cursor-pointer py-2 transition-all ${
              activeTab === 'mission' 
                ? 'text-yellow-500 border-b-2 border-yellow-500'
                : 'text-gray-800'
            }`}
            onClick={() => setActiveTab('mission')}
          >
            Mission
          </span>
        </div>

        {/* Render Content Based on Active Tab */}
        <div className="w-full">
          {renderContent()}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
