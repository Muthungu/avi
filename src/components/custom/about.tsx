"use client";
import React, { useState } from 'react';
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
    <section id="about" className="flex flex-col h-screen w-full bg-white overflow-hidden">
      {/* Centered Heading and Tabs */}
      <div className="flex flex-col items-center pt-40">
        <h2 className="text-4xl font-bold mb-4 text-Primary">About Us</h2> {/* Primary color for heading */}
        {/* Tab Links */}
        <div className="flex space-x-8 mb-6">
          <span
            className={`cursor-pointer py-2 transition-all ${
              activeTab === 'vision' 
                ? 'text-Secondary border-b-2 border-Secondary' // Secondary color for active tab
                : 'text-Primary'
            }`}
            onClick={() => setActiveTab('vision')}
          >
            Vision
          </span>
          <span
            className={`cursor-pointer py-2 transition-all ${
              activeTab === 'mission' 
                ? 'text-Secondary border-b-2 border-Secondary' // Secondary color for active tab
                : 'text-Primary'
            }`}
            onClick={() => setActiveTab('mission')}
          >
            Mission
          </span>
        </div>
      </div>

      {/* Content Section */}
      <div className="flex-1 flex justify-center items-start p-10 overflow-hidden">
        <div className="w-full"> {/* Set max width for content area */}
          {renderContent()}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
