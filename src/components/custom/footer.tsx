import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="w-full bg-yellow-950 text-white py-8">
      <div className="container mx-auto text-center">
        <p className="text-sm">
          &copy; {new Date().getFullYear()} ITER VITAE AFRICA. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
