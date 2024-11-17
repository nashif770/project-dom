import React from 'react';
import HeroSection from './components/HeroSection';
import FeaturesSection from './components/FeaturesSection';
import GameOverview from './components/GameOverview';
import LoreSection from './components/Loreparagraph';
import GameMechanics from './components/GameMechanics';
import FactionsSection from './components/FactionSection';

const page = () => {

  
  return (
    <div className='p-4'>
      <HeroSection></HeroSection>
      <GameOverview></GameOverview>
      <FeaturesSection></FeaturesSection>
      <LoreSection></LoreSection>
      <GameMechanics></GameMechanics>
      <FactionsSection></FactionsSection>
    </div>
  );
};

export default page;