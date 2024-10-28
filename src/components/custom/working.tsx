import React from 'react';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card'; // Adjust the import path based on your project structure
import { FaStethoscope, FaUsers, FaAppleAlt } from 'react-icons/fa'; // Import icons

const ServicesSection: React.FC = () => {
  return (
    <section
      id="services"
      className="w-full h-auto flex flex-col items-center justify-center py-28 text-center bg-Accent" // Accent background color
    >
      <h2 className="text-Primary text-4xl font-bold mb-8">Our Services</h2> {/* Primary color for heading */}

      {/* Service Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 w-[80vw] mx-auto pt-10"> {/* Adjust max width as needed */}
        
        {/* Service 1: Cancer Diagnosis */}
        <Card className="shadow-md rounded-lg flex flex-col items-center p-6">
          <div className="text-Secondary text-4xl mb-4"> {/* Secondary color for icons */}
            <FaStethoscope />
          </div>
          <CardHeader>
            <CardTitle className="text-Primary text-2xl font-semibold">Cancer Diagnosis</CardTitle> {/* Primary color for heading */}
          </CardHeader>
          <CardContent>
            <p className="text-lg leading-relaxed">
              We specialize in cancer diagnosis with a focus on cervical, prostate, oesophagus, and breast cancer.
              Our team ensures that patients receive timely and accurate diagnostic services, enabling a clear
              treatment plan.
            </p>
          </CardContent>
        </Card>

        {/* Service 2: Patient Navigation */}
        <Card className="shadow-md rounded-lg flex flex-col items-center p-6">
          <div className="text-Secondary text-4xl mb-4"> {/* Secondary color for icons */}
            <FaUsers />
          </div>
          <CardHeader>
            <CardTitle className="text-Primary text-2xl font-semibold">Patient Navigation</CardTitle> {/* Primary color for heading */}
          </CardHeader>
          <CardContent>
            <p className="text-lg leading-relaxed">
              Our experienced patient navigators guide you through the healthcare journey, providing support
              and resources for everything from treatment options to appointments and medical travel.
            </p>
          </CardContent>
        </Card>

        {/* Service 3: Wellness and Dietary Advice */}
        <Card className="shadow-md rounded-lg flex flex-col items-center p-6">
          <div className="text-Secondary text-4xl mb-4"> {/* Secondary color for icons */}
            <FaAppleAlt />
          </div>
          <CardHeader>
            <CardTitle className="text-Primary text-2xl font-semibold">Wellness & Dietary Advice</CardTitle> {/* Primary color for heading */}
          </CardHeader>
          <CardContent>
            <p className="text-lg leading-relaxed">
              In addition to medical services, we offer personalized dietary advice and wellness programs to 
              support patients&apos; overall health and recovery.
            </p>
          </CardContent>
        </Card>

      </div>
    </section>
  );
};

export default ServicesSection;
