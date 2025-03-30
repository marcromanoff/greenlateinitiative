
import React from 'react';
import { Award, Star, Trophy, Sparkles } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { Link } from "react-router-dom";
import { HoverCard, HoverCardTrigger, HoverCardContent } from "@/components/ui/hover-card";

interface AwardsCardProps {
  className?: string;
}

const AwardsCard = ({ className }: AwardsCardProps) => {
  return (
    <Card className={cn("overflow-hidden transition-all duration-300 hover:shadow-lg", className)}>
      <div className="bg-primary text-white p-4 flex items-center gap-3">
        <Trophy className="h-6 w-6" />
        <h2 className="text-xl font-semibold">End-of-Year Medals & Awards</h2>
      </div>
      <CardContent className="pt-6">
        <p className="text-gray-700 leading-relaxed mb-4">
          Schools can earn prestigious recognitions from Diamond Standard Medal (97-100%) to Bronze Medal (70-79%), 
          with special spotlights, certificates, and resources to celebrate your sustainability achievements.
        </p>
        
        <div className="flex flex-wrap gap-2 mb-4">
          <HoverCard>
            <HoverCardTrigger asChild>
              <div className="flex items-center gap-1 px-3 py-1.5 bg-gradient-to-r from-blue-50 via-purple-50 to-blue-50 rounded-full border border-blue-200 cursor-pointer hover:shadow-md transition-all">
                <Sparkles className="h-4 w-4 text-blue-500" />
                <span className="text-sm font-medium text-blue-700">Diamond</span>
              </div>
            </HoverCardTrigger>
            <HoverCardContent className="bg-gradient-to-br from-blue-50 via-purple-50 to-blue-50 border border-blue-200">
              <div className="flex flex-col gap-1">
                <p className="text-sm font-semibold text-blue-800">Diamond Standard (97-100%)</p>
                <p className="text-xs text-blue-700">National leader in sustainability</p>
              </div>
            </HoverCardContent>
          </HoverCard>
          
          <HoverCard>
            <HoverCardTrigger asChild>
              <div className="flex items-center gap-1 px-3 py-1.5 bg-amber-50 rounded-full border border-amber-200 cursor-pointer hover:shadow-md transition-all">
                <Award className="h-4 w-4 text-amber-500" />
                <span className="text-sm font-medium text-amber-700">Gold</span>
              </div>
            </HoverCardTrigger>
            <HoverCardContent className="bg-amber-50 border border-amber-200">
              <div className="flex flex-col gap-1">
                <p className="text-sm font-semibold text-amber-800">Gold Medal (90-96%)</p>
                <p className="text-xs text-amber-700">Outstanding achievement</p>
              </div>
            </HoverCardContent>
          </HoverCard>
          
          <HoverCard>
            <HoverCardTrigger asChild>
              <div className="flex items-center gap-1 px-3 py-1.5 bg-gray-100 rounded-full border border-gray-200 cursor-pointer hover:shadow-md transition-all">
                <Award className="h-4 w-4 text-gray-500" />
                <span className="text-sm font-medium text-gray-700">Silver</span>
              </div>
            </HoverCardTrigger>
            <HoverCardContent className="bg-gray-100 border border-gray-200">
              <div className="flex flex-col gap-1">
                <p className="text-sm font-semibold text-gray-800">Silver Medal (80-89%)</p>
                <p className="text-xs text-gray-700">Strong progress</p>
              </div>
            </HoverCardContent>
          </HoverCard>
          
          <HoverCard>
            <HoverCardTrigger asChild>
              <div className="flex items-center gap-1 px-3 py-1.5 bg-amber-100 rounded-full border border-amber-200 cursor-pointer hover:shadow-md transition-all">
                <Award className="h-4 w-4 text-amber-700" />
                <span className="text-sm font-medium text-amber-800">Bronze</span>
              </div>
            </HoverCardTrigger>
            <HoverCardContent className="bg-amber-100 border border-amber-200">
              <div className="flex flex-col gap-1">
                <p className="text-sm font-semibold text-amber-800">Bronze Medal (70-79%)</p>
                <p className="text-xs text-amber-700">Solid progress</p>
              </div>
            </HoverCardContent>
          </HoverCard>
        </div>
        
        <Link to="/awards" className="block w-full">
          <div className="mt-2 bg-gradient-to-r from-blue-50 via-purple-50 to-blue-50 border border-blue-100 p-4 rounded-lg shadow hover:shadow-md hover:scale-[1.02] transition-all duration-300">
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
