
import React from 'react';
import Navigation from "../components/Navigation";
import PointsSystemIntro from '../components/points-system/PointsSystemIntro';
import NominationPointsCard from '../components/points-system/NominationPointsCard';
import SchoolPointsCard from '../components/points-system/SchoolPointsCard';
import TitleLevelsCard from '../components/points-system/TitleLevelsCard';
import AwardsCard from '../components/points-system/AwardsCard';
import { ScrollArea } from '@/components/ui/scroll-area';

const PointsSystem = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#E8F4E2] via-[#D3E4FD] to-[#F2FCE2]">
      <Navigation />
      
      <ScrollArea className="h-[calc(100vh-4rem)]">
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
      </ScrollArea>
    </div>
  );
};

export default PointsSystem;
