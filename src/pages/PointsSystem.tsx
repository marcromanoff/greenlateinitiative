import React from 'react';
import Navigation from "../components/Navigation";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Award, Star, Trophy, Upload, School, Medal, GraduationCap, Share2, Leaf } from "lucide-react";

// Custom GreenPlate Points symbol component with added spacing
const GPSymbol = ({ className = "" }: { className?: string }) => (
  <span className={`inline-flex items-center ml-1 ${className}`}>
    <Leaf className="h-3 w-3 text-primary stroke-[3] -ml-0.5 mr-0.5" />
  </span>
);

const PointsSystem = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#E8F4E2] via-[#D3E4FD] to-[#F2FCE2]">
      <Navigation />
      
      <main className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold mb-3 text-primary">
            <span className="text-primary">🟢 </span>
            How the GreenPlate Points System Works
          </h1>
          
          <p className="text-xl font-semibold mb-8">
            Earn Points. Climb the Leaderboard. Drive Real Change.
          </p>
          
          <div className="mb-12 bg-white p-6 rounded-lg shadow-sm">
            <p className="text-gray-700 leading-relaxed">
              The GreenPlate Initiative transforms school lunch reform into a powerful, gamified experience. 
              Advocates and schools earn points for taking action—from nominations to public impact—and rise on national leaderboards.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <Card className="overflow-hidden">
              <div className="bg-primary text-white p-4 flex items-center gap-3">
                <Upload className="h-6 w-6" />
                <h2 className="text-xl font-semibold">Nominate a School</h2>
              </div>
              <CardContent className="pt-6">
                <ul className="space-y-3">
                  <li className="flex items-start gap-2">
                    <Badge variant="outline" className="mt-1 bg-green-50">100 <GPSymbol /></Badge>
                    <span>Submit a verified school contact</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Badge variant="outline" className="mt-1 bg-green-50">4,000 <GPSymbol /></Badge>
                    <span>School completes assessment <span className="text-sm text-gray-500">(1,000 <GPSymbol /> for the referrer)</span></span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Badge variant="outline" className="mt-1 bg-green-50">10,000 <GPSymbol /></Badge>
                    <span>School joins officially</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
            
            <Card className="overflow-hidden">
              <div className="bg-primary text-white p-4 flex items-center gap-3">
                <School className="h-6 w-6" />
                <h2 className="text-xl font-semibold">School-Based Actions</h2>
              </div>
              <CardContent className="pt-6">
                <ul className="space-y-3">
                  <li className="flex items-start gap-2">
                    <Badge variant="outline" className="mt-1 bg-green-50">10,000 <GPSymbol /></Badge>
                    <span>Complete GreenPlate Assessment</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Badge variant="outline" className="mt-1 bg-green-50">25,000 <GPSymbol /></Badge>
                    <span>Earn a Bronze Medal</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Badge variant="outline" className="mt-1 bg-green-50">50,000 <GPSymbol /></Badge>
                    <span>Earn a Silver Medal</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Badge variant="outline" className="mt-1 bg-green-50">100,000 <GPSymbol /></Badge>
                    <span>Earn a Gold Medal</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Badge variant="outline" className="mt-1 bg-green-50">250,000 <GPSymbol /></Badge>
                    <span>Earn Diamond Standard</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Badge variant="outline" className="mt-1 bg-green-50">10,000 <GPSymbol /></Badge>
                    <span>Host a GreenPlate Presentation</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Badge variant="outline" className="mt-1 bg-green-50">5,000 <GPSymbol /></Badge>
                    <span>Social Media Posts <span className="text-sm text-gray-500">(Instagram, X, YouTube - proof required)</span></span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Badge variant="outline" className="mt-1 bg-green-50">10,000 <GPSymbol /></Badge>
                    <span>Feature GreenPlate on School Website</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
            
            <Card className="overflow-hidden">
              <div className="bg-primary text-white p-4 flex items-center gap-3">
                <GraduationCap className="h-6 w-6" />
                <h2 className="text-xl font-semibold">Advocate Actions</h2>
              </div>
              <CardContent className="pt-6">
                <ul className="space-y-3">
                  <li className="flex items-start gap-2">
                    <Badge variant="outline" className="mt-1 bg-green-50">2,000 <GPSymbol /></Badge>
                    <span>Post on Instagram</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Badge variant="outline" className="mt-1 bg-green-50">1,500 <GPSymbol /></Badge>
                    <span>Post on Facebook Group</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Badge variant="outline" className="mt-1 bg-green-50">6,000 <GPSymbol /></Badge>
                    <span>YouTube Explainer Video</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Badge variant="outline" className="mt-1 bg-green-50">5,000 <GPSymbol /></Badge>
                    <span>Write a Blog or Article</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Badge variant="outline" className="mt-1 bg-green-50">50,000 <GPSymbol /></Badge>
                    <span>Secure Local News Coverage</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Badge variant="outline" className="mt-1 bg-green-50">20,000 <GPSymbol /></Badge>
                    <span>Submit a Testimonial Video</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
            
            <Card className="overflow-hidden">
              <div className="bg-primary text-white p-4 flex items-center gap-3">
                <Trophy className="h-6 w-6" />
                <h2 className="text-xl font-semibold">Level Up with Titles</h2>
              </div>
              <CardContent className="pt-6">
                <div className="grid grid-cols-1 gap-4">
                  <div className="flex items-center gap-4 p-4 bg-green-50 rounded-lg border border-green-100">
                    <div className="text-2xl">🌱</div>
                    <div className="flex-1">
                      <h3 className="font-medium">Eco Vanguard</h3>
                      <p className="text-sm text-gray-500">10,000 <GPSymbol /></p>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-4 p-4 bg-green-50 rounded-lg border border-green-100">
                    <div className="text-2xl">🌿</div>
                    <div className="flex-1">
                      <h3 className="font-medium">Guardian of Change</h3>
                      <p className="text-sm text-gray-500">50,000 <GPSymbol /></p>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-4 p-4 bg-green-50 rounded-lg border border-green-100">
                    <div className="text-2xl">🏆</div>
                    <div className="flex-1">
                      <h3 className="font-medium">Champion of the Future</h3>
                      <p className="text-sm text-gray-500">100,000 <GPSymbol /></p>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-4 p-4 bg-green-50 rounded-lg border border-green-100">
                    <div className="text-2xl">🔥</div>
                    <div className="flex-1">
                      <h3 className="font-medium">Pathfinder for the Planet</h3>
                      <p className="text-sm text-gray-500">250,000 <GPSymbol /></p>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-4 p-4 bg-green-50 rounded-lg border border-green-100">
                    <div className="text-2xl">🛡️</div>
                    <div className="flex-1">
                      <h3 className="font-medium">Defender of Earth</h3>
                      <p className="text-sm text-gray-500">500,000 <GPSymbol /></p>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-4 p-4 bg-green-50 rounded-lg border border-green-100">
                    <div className="text-2xl">✨</div>
                    <div className="flex-1">
                      <h3 className="font-medium">Legend of the GreenVerse</h3>
                      <p className="text-sm text-gray-500">1,000,000+ <GPSymbol /></p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
          
          <Card className="mb-12 overflow-hidden">
            <div className="bg-primary text-white p-4 flex items-center gap-3">
              <Award className="h-6 w-6" />
              <h2 className="text-xl font-semibold">End-of-Year Awards</h2>
            </div>
            <CardContent className="pt-6">
              <p className="text-gray-700 leading-relaxed">
                Top 3 Schools and Advocates earn special prizes, spotlights, exclusive invites, and certification honors. 
                Compete with purpose—and get rewarded for real change.
              </p>
              
              <div className="mt-6 bg-green-50 border border-green-100 p-4 rounded-lg">
                <div className="flex items-center gap-2 mb-2">
                  <Star className="h-5 w-5 text-primary" />
                  <h3 className="font-semibold">Coming Soon</h3>
                </div>
                <p className="text-sm text-gray-600">
                  A visual leaderboard and progress tracker will be added to this section in a future update.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  );
};

export default PointsSystem;
