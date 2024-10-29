// components/Vision.tsx
import React from 'react';
import Image from 'next/image'; // Use Next.js Image for optimized loading

const Vision: React.FC = () => {
  return (
    <div className="w-[80vw] mx-auto flex flex-col md:flex-row space-y-8 md:space-y-0 md:space-x-8 justify-between"> {/* Set width to 80vw */}
      {/* Left Side: Text Content */}
      <div className="flex-1">
        <h3 className="text-2xl text-Primary font-semibold mb-4">Our Vision</h3>
        <p className="text-lg leading-relaxed">
        To deliver holistic health services and support that empower individuals to make informed decisions about their health and well-being..
        </p>
      </div>

      {/* Right Side: Larger Image */}
      <div className="flex-none w-full md:w-1/2">
        <Image 
          src="/ladies support.jpg" // Your image source
          alt="Vision Image" // Provide a descriptive alt text
          className="rounded-[20px]" // Add any styling you want
          width={700} // Set a larger width
          height={450} // Set a larger height
        />
      </div>
    </div>
  );
};

export default Vision;
