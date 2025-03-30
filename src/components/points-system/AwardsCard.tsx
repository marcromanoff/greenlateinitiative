
import React from 'react';
import { Award, Star, Trophy } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { Link } from "react-router-dom";

interface AwardsCardProps {
  className?: string;
}

const AwardsCard = ({ className }: AwardsCardProps) => {
  return (
    <Card className={cn("overflow-hidden", className)}>
      <div className="bg-primary text-white p-4 flex items-center gap-3">
        <Trophy className="h-6 w-6" />
        <h2 className="text-xl font-semibold">End-of-Year Medals & Awards</h2>
      </div>
      <CardContent className="pt-6">
        <p className="text-gray-700 leading-relaxed mb-4">
          Schools can earn prestigious recognitions from Diamond Standard Medal (97-100%) to Bronze Medal (70-79%), 
          with special spotlights, certificates, and resources to celebrate your sustainability achievements.
        </p>
        
        <Link to="/awards" className="block w-full">
          <div className="mt-2 bg-gradient-to-r from-blue-50 via-purple-50 to-blue-50 border border-blue-100 p-4 rounded-lg hover:shadow-md transition-all">
            <div className="flex items-center gap-2 mb-2">
              <Trophy className="h-5 w-5 text-blue-600" />
              <h3 className="font-semibold text-blue-800">See All Medals & Awards</h3>
            </div>
            <p className="text-sm text-gray-600">
              View the complete medal system and learn what your school can earn through the GreenPlate program.
            </p>
          </div>
        </Link>
      </CardContent>
    </Card>
  );
};

export default AwardsCard;
