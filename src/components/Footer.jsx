import React from 'react';
import { Facebook, Twitter, Instagram } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-yellow-100 py-8">
      <div className="container mx-auto px-4 text-center">
        <div className="flex justify-center space-x-4 mb-4">
          <a href="#" className="text-yellow-800 hover:text-yellow-600">
            <Facebook className="h-6 w-6" />
          </a>
          <a href="#" className="text-yellow-800 hover:text-yellow-600">
            <Twitter className="h-6 w-6" />
          </a>
          <a href="#" className="text-yellow-800 hover:text-yellow-600">
            <Instagram className="h-6 w-6" />
          </a>
        </div>
        <p className="text-yellow-800">&copy; 2023 Dog Lovers Paradise</p>
      </div>
    </footer>
  );
};

export default Footer;