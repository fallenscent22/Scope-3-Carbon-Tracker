import React from 'react';
import Hero from '../components/Hero';
import FeaturesBar from '../components/FeaturesBar';
import Services from '../components/Services';
import Workflow from '../components/Workflow';
import Pricing from '../components/Pricing';

const Home = () => {
  return (
    <>
      <Hero />
      <FeaturesBar />
      <Services />
      <Workflow />
      <Pricing />
    </>
  );
};

export default Home;