import React from 'react';
import { FaCheck } from 'react-icons/fa';

const Pricing = () => {
  const plans = [
    {
      name: "Basic",
      price: "₹999",
      period: "/month",
      features: [
        "Scope 1 & 2 tracking only",
        "Basic dashboard",
        "Monthly reports",
        "Email support",
        "Up to 5 users"
      ],
      buttonText: "Get Started",
      popular: false
    },
    {
      name: "Pro",
      price: "₹2999",
      period: "/month",
      features: [
        "Full Scope 3 tracking",
        "Advanced analytics",
        "API access",
        "Priority support",
        "Up to 25 users",
        "Real-time monitoring",
        "Custom reports"
      ],
      buttonText: "Try Pro Free",
      popular: true
    },
    {
      name: "Enterprise",
      price: "₹3999",
      period: "/month",
      features: [
        "Unlimited data tracking",
        "Custom integration",
        "Dedicated account manager",
        "24/7 phone support",
        "Unlimited users",
        "White-label reporting",
        "Advanced security",
        "Custom SLA"
      ],
      buttonText: "Contact Sales",
      popular: false
    }
  ];

  return (
    <section id="pricing" className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          Pricing Plans
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <div 
              key={index} 
              className={`bg-white rounded-xl shadow-lg overflow-hidden ${
                plan.popular ? 'ring-2 ring-primary-blue transform md:-translate-y-4' : ''
              }`}
            >
              {plan.popular && (
                <div className="bg-primary-blue text-white text-center py-2">
                  Most Popular
                </div>
              )}
              
              <div className="p-8">
                <div className="mb-6">
                  <h3 className="text-2xl font-bold text-gray-800 mb-2">{plan.name}</h3>
                  <div className="flex items-baseline">
                    <span className="text-4xl font-bold text-gray-900">{plan.price}</span>
                    <span className="text-gray-600 ml-2">{plan.period}</span>
                  </div>
                </div>
                
                <ul className="mb-8 space-y-4">
                  {plan.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start">
                      <FaCheck className="text-cta-green mr-3 mt-1 flex-shrink-0" />
                      <span className="text-gray-600">{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <button className={`w-full py-3 px-6 rounded-lg font-bold ${
                  plan.popular 
                    ? 'bg-primary-blue text-white hover:bg-blue-700' 
                    : 'bg-cta-green text-black hover:bg-green-400'
                } transition-colors`}>
                  {plan.buttonText}
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;