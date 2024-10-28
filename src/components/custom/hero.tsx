import React from 'react';

const HeroSection: React.FC = () => {
  return (
    <section className="relative w-[95vw] mx-auto h-[43vw] md:h-[70vh] lg:h-[85vh] rounded-[20px] overflow-hidden bg-cover bg-center bg-hero-image pt-10">
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-transparent"></div>
      
      {/* Content overlay */}
      <div className="absolute inset-0 flex flex-col justify-center items-center text-center text-white px-4 space-y-4">
        {/* Headline */}
        <h1 className="text-[40px] md:text-[60px] lg:text-[80px] font-bold">
          Health pathways, as unique as you are
        </h1>

        {/* Subheadline */}
        {/* Uncomment and adjust as needed
        <p className="text-lg md:text-xl max-w-2xl">
          We specialize in cancer diagnosis and patient support, initially focusing on cervical cancer and expanding to other cancers. Your health journey is our priority.
        </p>
        */}
      </div>
    </section>
  );
};

export default HeroSection;
