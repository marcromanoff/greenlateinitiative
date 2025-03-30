
import React from 'react';
import { Award, Star, Trophy, Medal, Users } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { Link } from "react-router-dom";
import { Badge } from "@/components/ui/badge";

interface AwardsCardProps {
  className?: string;
}

const AwardsCard = ({ className }: AwardsCardProps) => {
  return (
    <Card className={cn("overflow-hidden hover:shadow-lg transition-all", className)}>
      <div className="bg-primary text-white p-4 flex items-center gap-3">
        <Trophy className="h-6 w-6 animate-pulse" />
        <h2 className="text-xl font-semibold">End-of-Year Medals & Awards</h2>
      </div>
      <CardContent className="pt-6">
        <p className="text-gray-700 leading-relaxed mb-4">
          Schools can earn prestigious recognitions from Diamond Standard Medal (97-100%) to Bronze Medal (70-79%), 
          with special spotlights, certificates, and resources to celebrate your sustainability achievements.
        </p>
        
        <div className="mb-6 bg-gradient-to-r from-amber-50 via-amber-100 to-amber-50 border border-amber-200 p-4 rounded-lg hover:shadow-md transition-all">
          <div className="flex items-center gap-2 mb-2">
            <Award className="h-5 w-5 text-amber-600" />
            <h3 className="font-semibold text-amber-800">Year-End Prizes</h3>
          </div>
          <p className="text-sm text-gray-600 mb-2">
            At the end of each year, the <span className="font-semibold">top 3 schools</span> and <span className="font-semibold">top 3 advocates</span> win exclusive prizes and recognition!
          </p>
          <div className="mt-2 grid grid-cols-1 sm:grid-cols-2 gap-3">
            <div className="group flex items-center gap-2 bg-white p-2 rounded border border-amber-100 hover:border-amber-300 transition-all">
              <Medal className="h-4 w-4 text-amber-500 group-hover:scale-110 transition-transform" />
              <span className="text-sm font-medium">National Champions</span>
            </div>
            <div className="group flex items-center gap-2 bg-white p-2 rounded border border-amber-100 hover:border-amber-300 transition-all">
              <Users className="h-4 w-4 text-amber-500 group-hover:scale-110 transition-transform" />
              <span className="text-sm font-medium">Featured Recognition</span>
            </div>
          </div>
        </div>
        
        <Link to="/awards" className="block w-full group">
          <div className="mt-2 bg-gradient-to-r from-blue-50 via-purple-50 to-blue-50 border border-blue-100 p-4 rounded-lg hover:shadow-md transition-all">
            <div className="flex items-center gap-2 mb-2">
              <Trophy className="h-5 w-5 text-blue-600 group-hover:rotate-12 transition-transform" />
              <h3 className="font-semibold text-blue-800">See All Medals & Awards</h3>
            </div>
            <p className="text-sm text-gray-600">
              View the complete medal system and learn what your school can earn through the GreenPlate program.
            </p>
            <Badge variant="outline" className="mt-3 text-xs bg-blue-50 border-blue-200 text-blue-700 group-hover:bg-blue-100 transition-colors">
              Now with year-end prizes!
            </Badge>
          </div>
        </Link>
      </CardContent>
    </Card>
  );
};

export default AwardsCard;
