
import React from 'react';

const PointsSystemIntro = () => {
  return <>
      <h1 className="text-4xl font-bold mb-3 text-primary animate-fade-in">
        How the GreenPlate Points System Works
      </h1>
      
      <p className="text-xl font-semibold mb-8 animate-fade-in" style={{ animationDelay: "200ms" }}>
        Earn Points. Climb the Leaderboard. Drive Real Change.
      </p>
      
      <div className="mb-12 bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-all duration-300 animate-fade-in" style={{ animationDelay: "400ms" }}>
        <p className="text-gray-700 leading-relaxed">
          The GreenPlate Initiative transforms school lunch reform into a powerful, gamified experience. 
          Advocates and schools earn points for taking action—from nominations to public impact—and rise on national leaderboards.
        </p>
      </div>
    </>;
};
export default PointsSystemIntro;
