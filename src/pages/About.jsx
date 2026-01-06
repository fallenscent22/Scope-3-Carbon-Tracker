import React from 'react';
import { FaCheckCircle, FaLeaf, FaUsers, FaChartPie } from 'react-icons/fa';

const About = () => {
  const teamMembers = [
    {
      name: "Sarah Lee",
      role: "CEO & Founder",
      image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"

    },
    {
      name: "Soundarya",
      role: "Lead Sustainability Analyst",
      image: "https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
    },
    {
      name: "Alia",
      role: "CTO",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
    }
  ];

  const values = [
    {
      icon: <FaLeaf className="w-8 h-8" />,
      title: "Sustainability First",
      description: "We prioritize environmental impact in all our decisions"
    },
    {
      icon: <FaUsers className="w-8 h-8" />,
      title: "Collaboration",
      description: "Working together with businesses for a greener future"
    },
    {
      icon: <FaChartPie className="w-8 h-8" />,
      title: "Data-Driven",
      description: "Making decisions based on accurate, real-time data"
    }
  ];

  const checklistItems = [
    "Accounts for 70-90% of a company's carbon footprint",
    "Essential for comprehensive sustainability reporting",
    "Identifies hidden risks in supply chain",
    "Drives innovation in sustainable practices",
    "Improves brand reputation and stakeholder trust",
    "Future-proofs against regulatory changes"
  ];

  return (
    <div className="py-16">
      <div className="container mx-auto px-4">
        {/* Mission & Values */}
        <section className="mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-center mb-8 text-gray-800">
            Mission & Values
          </h1>
          
          <div className="bg-header-bg rounded-2xl p-8 mb-12">
            <p className="text-lg md:text-xl text-gray-700 leading-relaxed text-center">
              Our mission is to empower businesses with the tools and insights needed to 
              track, analyze, and reduce their Scope 3 emissions, driving meaningful change 
              towards a sustainable future for all.
            </p>
          </div>

          {/* Values Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {values.map((value, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-lg text-center">
                <div className="text-primary-blue mb-4 flex justify-center">
                  {value.icon}
                </div>
                <h3 className="text-xl font-bold mb-3 text-gray-800">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Our Team */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">Our Team</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <div key={index} className="text-center">
                <div className="w-48 h-48 mx-auto mb-6 overflow-hidden rounded-full border-4 border-white shadow-lg">
                  <img 
                    src={member.image} 
                    alt={member.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="text-2xl font-bold mb-2 text-gray-800">{member.name}</h3>
                <p className="text-primary-blue font-medium">{member.role}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Why Scope 3 Matters */}
        <section className="bg-gray-50 rounded-2xl p-8">
          <h2 className="text-3xl font-bold text-center mb-8 text-gray-800">
            Why Scope 3 Matters
          </h2>
          
          <div className="max-w-3xl mx-auto">
            <ul className="space-y-4">
              {checklistItems.map((item, index) => (
                <li key={index} className="flex items-start">
                  <FaCheckCircle className="text-cta-green text-2xl mr-4 flex-shrink-0 mt-1" />
                  <span className="text-lg text-gray-700">{item}</span>
                </li>
              ))}
            </ul>
            
            <div className="mt-12 bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold mb-4 text-gray-800">Understanding Scope 3 Emissions</h3>
              <p className="text-gray-600 mb-4">
                Scope 3 emissions are indirect emissions that occur in a company's value chain, 
                including both upstream and downstream activities. These often represent the largest 
                portion of a company's carbon footprint but are also the most challenging to measure 
                and manage.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="bg-header-bg p-4 rounded-lg">
                  <h4 className="font-bold mb-2">Upstream Activities</h4>
                  <ul className="text-sm space-y-1">
                    <li>• Purchased goods and services</li>
                    <li>• Capital goods</li>
                    <li>• Fuel and energy-related activities</li>
                    <li>• Transportation and distribution</li>
                  </ul>
                </div>
                <div className="bg-header-bg p-4 rounded-lg">
                  <h4 className="font-bold mb-2">Downstream Activities</h4>
                  <ul className="text-sm space-y-1">
                    <li>• Transportation and distribution</li>
                    <li>• Processing of sold products</li>
                    <li>• Use of sold products</li>
                    <li>• End-of-life treatment</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default About;