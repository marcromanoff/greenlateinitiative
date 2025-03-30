
import React from 'react';
import { Trophy } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import GPSymbol from './GPSymbol';

const TitleLevelsCard = () => {
  const titles = [
    {
      emoji: "🌱",
      title: "Eco Vanguard",
      points: "10,000"
    },
    {
      emoji: "🌿",
      title: "Guardian of Change",
      points: "50,000"
    },
    {
      emoji: "🏆",
      title: "Champion of the Future",
      points: "100,000"
    },
    {
      emoji: "🔥",
      title: "Pathfinder for the Planet",
      points: "250,000"
    },
    {
      emoji: "🛡️",
      title: "Defender of Earth",
      points: "500,000"
    },
    {
      emoji: "✨",
      title: "Legend of the GreenVerse",
      points: "1,000,000+"
    }
  ];

  return (
    <Card className="overflow-hidden transition-all duration-300 hover:shadow-lg">
      <div className="bg-primary text-white p-4 flex items-center gap-3">
        <Trophy className="h-6 w-6" />
        <h2 className="text-xl font-semibold">Level Up with Titles</h2>
      </div>
      <CardContent className="pt-6">
        <div className="grid grid-cols-1 gap-4">
          {titles.map((item, index) => (
            <div 
              key={item.title} 
              className="flex items-center gap-4 p-4 bg-green-50 rounded-lg border border-green-100 hover:shadow-md hover:bg-green-100 transition-all duration-300"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="text-2xl group transition-all duration-300 hover:scale-125">{item.emoji}</div>
              <div className="flex-1">
                <h3 className="font-medium">{item.title}</h3>
                <p className="text-sm text-gray-500 flex items-center">
                  {item.points} 
                  <GPSymbol />
                </p>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default TitleLevelsCard;
