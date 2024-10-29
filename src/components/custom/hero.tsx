import React from 'react';

const HeroSection: React.FC = () => {
  return (
    <section className="relative w-[95vw] mx-auto h-[50vh] md:h-[80vh] lg:h-[90vh] rounded-[20px] overflow-hidden bg-cover bg-center bg-hero-image pt-10">
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-transparent to-black/60"></div>

      {/* Content overlay */}
      <div className="absolute inset-0 flex flex-col justify-end items-center text-center text-white px-4 pb-[10vh] space-y-4">
        {/* Headline */}
        <h1 className="text-[8vw] sm:text-[6vw] md:text-[60px] lg:text-[80px] font-extrabold font-panchang max-w-[80vw] leading-tight drop-shadow-lg">
          Health pathways, as unique as you are
        </h1>

        {/* Optional Subheadline */}
        {/* Uncomment and adjust as needed */}
        {/* <p className="text-sm sm:text-base md:text-lg max-w-2xl leading-relaxed">
          We specialize in cancer diagnosis and patient support, focusing on personalized journeys for each patient.
        </p> */}
      </div>
    </section>
  );
};

export default HeroSection;
