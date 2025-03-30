
import React from 'react';
import { Award, Star } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { cn } from "@/lib/utils";

interface AwardsCardProps {
  className?: string;
}

const AwardsCard = ({ className }: AwardsCardProps) => {
  return (
    <Card className={cn("overflow-hidden", className)}>
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
  );
};

export default AwardsCard;
