// components/Mission.tsx
import React from 'react';
import Image from 'next/image'; // Optional, in case you want to add an image later

const Mission: React.FC = () => {
  return (
    <div className="w-[80vw] mx-auto flex flex-col md:flex-row space-y-8 md:space-y-0 md:space-x-8 justify-between"> {/* Match width and layout */}
      {/* Left Side: Text Content */}
      <div className="flex-1">
        <h3 className="text-2xl text-Primary font-semibold mb-4">Our Mission</h3>
        <p className="text-lg leading-relaxed">
          To provide comprehensive health services and support to individuals, empowering them to make informed health choices.
        </p>
      </div>

      {/* Right Side: Optional Image Placeholder */}
      <div className="flex-none w-full md:w-1/2">
        <Image 
          src="/supportgroup.jpg" // Provide the image source if needed
          alt="Mission Image" // Provide a descriptive alt text
          className="rounded-lg" // Add any styling you want
          width={700} // Set a larger width, if necessary
          height={450} // Set a larger height, if necessary
        />
      </div>
    </div>
  );
};

export default Mission;
