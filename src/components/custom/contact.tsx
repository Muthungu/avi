import React from 'react';
import {
  Card,
  CardHeader,
  CardContent,
} from '@/components/ui/card'; // Update path if needed

const ContactSection: React.FC = () => {
  return (
    <section id="contact" className="w-[90vw] mx-auto py-28 text-center bg-white"> {/* Retain original background */}
      {/* Section Header */}
      <h2 className="text-Primary text-4xl font-bold mb-4">Get in Touch</h2> {/* Primary color for heading */}
      <p className="text-lg mb-8">Have any questions or want to get started? Reach out to us!</p>

      {/* Contact Card */}
      <Card className="flex flex-col md:flex-row max-w-4xl mx-auto rounded-lg overflow-hidden shadow-md">
        {/* Left Side: Contact Form with Accent Background */}
        <CardContent className="p-8 md:w-1/2 t"> {/* Accent background */}
          <h3 className="text-left text-2xl font-semibold mb-4">Send Us a Message</h3>
          <form className="space-y-4">
            <input
              type="text"
              placeholder="Your Name"
              className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-Accent"
              required
            />
            <input
              type="email"
              placeholder="Your Email"
              className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-Accent"
              required
            />
            <textarea
              placeholder="Your Message"
              className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-Accent"
              rows={4}
              required
            />
            <button
              type="submit"
              className="w-full bg-Primary text-white py-3 rounded-lg font-semibold hover:bg-Secondary transition duration-200" /* Primary color for button */
            >
              Send Message
            </button>
          </form>
        </CardContent>

        {/* Right Side: Contact Information */}
        <CardHeader className="p-8 md:w-1/2 bg-Accent text-primary text-left flex flex-col">
          <h3 className="text-2xl font-semibold mb-2">Contact Information</h3>
          <p className="text-lg mb-1">Email: info@iva.com</p>
          <p className="text-lg">Phone: +254 700 000 000</p>
        </CardHeader>
      </Card>
    </section>
  );
};

export default ContactSection;
