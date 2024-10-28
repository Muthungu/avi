import React from 'react';
import {
  Card,
  CardHeader,
  CardContent,
} from '@/components/ui/card'; // Update path if needed

const ContactSection: React.FC = () => {
  return (
    <section id="contact" className="w-[90vw] mx-auto py-28 text-center bg-white">
      {/* Section Header */}
      <h2 className="text-4xl font-bold mb-4">Get in Touch</h2>
      <p className="text-lg mb-8">Have any questions or want to get started? Reach out to us!</p>

      {/* Contact Card */}
      <Card className="flex flex-col md:flex-row max-w-4xl mx-auto rounded-lg overflow-hidden">
        {/* Left Side: Contact Form */}
        <CardContent className="p-8 md:w-1/2">
          <h3 className="text-left text-2xl font-semibold mb-4">Send Us a Message</h3>
          <form className="space-y-4">
            <input
              type="text"
              placeholder="Your Name"
              className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500"
              required
            />
            <input
              type="email"
              placeholder="Your Email"
              className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500"
              required
            />
            <textarea
              placeholder="Your Message"
              className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500"
              rows={4}
              required
            />
            <button
              type="submit"
              className="w-full bg-yellow-700 text-white py-3 rounded-lg font-semibold hover:bg-yellow-600 transition duration-200"
            >
              Send Message
            </button>
          </form>
        </CardContent>

        {/* Right Side: Contact Information with Colored Background */}
        <CardHeader className="p-8 md:w-1/2 bg-yellow-800 text-white text-left flex flex-col">
          <h3 className="text-2xl font-semibold mb-2">Contact Information</h3>
          <p className="text-lg mb-1">Email: info@iva.com</p>
          <p className="text-lg">Phone: +254 700 000 000</p>
        </CardHeader>
      </Card>
    </section>
  );
};

export default ContactSection;
