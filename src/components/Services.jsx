import React from 'react';
import { Dog, Scissors, Stethoscope } from 'lucide-react';

const ServiceCard = ({ icon, title, description }) => (
  <div className="bg-yellow-50 p-6 rounded-lg shadow-md">
    <div className="flex justify-center mb-4">
      {icon}
    </div>
    <h3 className="text-xl font-semibold text-yellow-800 mb-2">{title}</h3>
    <p className="text-gray-700">{description}</p>
  </div>
);

const Services = () => {
  const services = [
    {
      icon: <Dog className="h-12 w-12 text-yellow-600" />,
      title: "Dog Training",
      description: "Professional training services to help your dog become well-behaved and happy."
    },
    {
      icon: <Scissors className="h-12 w-12 text-yellow-600" />,
      title: "Dog Grooming",
      description: "Keep your furry friend looking and feeling their best with our grooming services."
    },
    {
      icon: <Stethoscope className="h-12 w-12 text-yellow-600" />,
      title: "Veterinary Services",
      description: "Comprehensive health care to ensure your dog stays healthy and active."
    }
  ];

  return (
    <section id="services" className="bg-yellow-100 py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-yellow-800 mb-12">Our Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <ServiceCard key={index} {...service} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;