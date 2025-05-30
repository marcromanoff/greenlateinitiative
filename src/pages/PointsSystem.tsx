
import React from 'react';
import Navigation from "../components/Navigation";
import PointsSystemIntro from '../components/points-system/PointsSystemIntro';
import NominationPointsCard from '../components/points-system/NominationPointsCard';
import SchoolPointsCard from '../components/points-system/SchoolPointsCard';
import TitleLevelsCard from '../components/points-system/TitleLevelsCard';
import AwardsCard from '../components/points-system/AwardsCard';

const PointsSystem = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#DBE6F6] via-[#E8F4E2] to-[#F2FAFC]">
      <Navigation />
      
      <main className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <PointsSystemIntro />
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <NominationPointsCard />
            <SchoolPointsCard />
            <AwardsCard />
            <TitleLevelsCard />
          </div>
        </div>
      </main>
    </div>
  );
};

export default PointsSystem;
