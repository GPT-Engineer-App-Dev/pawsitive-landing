import React from 'react';
import { PawPrint } from 'lucide-react';

const Header = () => {
  return (
    <header className="bg-yellow-100">
      <div className="container mx-auto px-4 py-6">
        <nav className="flex justify-between items-center mb-8">
          <div className="flex items-center">
            <PawPrint className="h-8 w-8 text-yellow-600 mr-2" />
            <span className="text-xl font-bold text-yellow-800">Dog Lovers Paradise</span>
          </div>
          <ul className="flex space-x-4">
            <li><a href="#" className="text-yellow-800 hover:text-yellow-600">Home</a></li>
            <li><a href="#about" className="text-yellow-800 hover:text-yellow-600">About</a></li>
            <li><a href="#services" className="text-yellow-800 hover:text-yellow-600">Services</a></li>
            <li><a href="#contact" className="text-yellow-800 hover:text-yellow-600">Contact</a></li>
          </ul>
        </nav>
        <div className="text-center">
          <img src="/placeholder.svg" alt="Happy dog" className="mx-auto object-cover w-full h-[400px] mb-8 rounded-lg" />
          <h1 className="text-4xl font-bold text-yellow-800 mb-4">Welcome to Dog Lovers Paradise</h1>
          <p className="text-xl text-yellow-700">Everything you need to know about dogs</p>
        </div>
      </div>
    </header>
  );
};

export default Header;