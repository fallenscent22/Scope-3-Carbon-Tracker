import React from 'react';
import { FaCheckCircle } from 'react-icons/fa';

const FeaturesBar = () => {
  const features = [
    "Supply Chain Analysis",
    "Real-time Tracking", 
    "Data Visualization"
  ];

  return (
    <div className="bg-white shadow-md py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          {features.map((feature, index) => (
            <div key={index} className="flex items-center space-x-3">
              <FaCheckCircle className="text-cta-green text-2xl" />
              <span className="text-lg font-medium text-gray-800">{feature}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FeaturesBar;