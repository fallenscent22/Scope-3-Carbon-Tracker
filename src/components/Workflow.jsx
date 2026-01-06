import React from 'react';
import { FaUpload, FaChartBar, FaFileDownload } from 'react-icons/fa';

const Workflow = () => {
  const steps = [
    {
      icon: <FaUpload className="w-10 h-10" />,
      title: "Upload Data",
      description: "Upload your supply chain data securely through our platform"
    },
    {
      icon: <FaChartBar className="w-10 h-10" />,
      title: "Analyze",
      description: "Our AI algorithms analyze emissions data in real-time"
    },
    {
      icon: <FaFileDownload className="w-10 h-10" />,
      title: "Generate Reports",
      description: "Download comprehensive reports and insights"
    }
  ];

  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <div className="bg-header-bg rounded-2xl p-8 md:p-12">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">
            Our 3-Step Workflow
          </h2>
          
          <div className="flex flex-col md:flex-row justify-between items-center">
            {steps.map((step, index) => (
              <div key={index} className="flex flex-col items-center text-center mb-8 md:mb-0">
                <div className="bg-white p-6 rounded-full shadow-lg mb-6">
                  <div className="text-primary-blue">
                    {step.icon}
                  </div>
                </div>
                <h3 className="text-xl font-bold mb-2 text-gray-800">{step.title}</h3>
                <p className="text-gray-600 max-w-xs">{step.description}</p>
                {index < steps.length - 1 && (
                  <div className="hidden md:block text-3xl text-gray-400 mx-8">→</div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Workflow;