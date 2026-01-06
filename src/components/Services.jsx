import React from 'react';
import { FaChartLine, FaDatabase, FaFileAlt } from 'react-icons/fa';

const Services = () => {
  const services = [
    {
      icon: <FaChartLine className="w-12 h-12" />,
      title: "Emission Tracking",
      description: "Comprehensive tracking of Scope 3 emissions across your entire supply chain with real-time monitoring."
    },
    {
      icon: <FaDatabase className="w-12 h-12" />,
      title: "Data Analytics",
      description: "Advanced analytics to identify emission hotspots and optimization opportunities in your supply chain."
    },
    {
      icon: (
        <div className="relative">
          <FaFileAlt className="w-12 h-12 text-primary-blue" />
          <FaChartLine className="w-7 h-7 absolute bottom-0 right-0 text-primary-blue" />
        </div>
      ),
      title: "Reporting Tools",
      description: "Automated report generation for compliance, sustainability disclosures, and stakeholder communication."
    }
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 bg-header-bg py-4 rounded-lg">
          Our Services
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div 
              key={index} 
              className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <div className="text-primary-blue mb-6">
                {service.icon}
              </div>
              <h3 className="text-2xl font-bold mb-4 text-gray-800">{service.title}</h3>
              <p className="text-gray-600">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;