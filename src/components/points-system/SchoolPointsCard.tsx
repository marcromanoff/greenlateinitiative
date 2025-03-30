
import React from 'react';
import { School } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import GPSymbol from './GPSymbol';

const SchoolPointsCard = () => {
  return (
    <Card className="overflow-hidden transition-all duration-300 hover:shadow-lg">
      <div className="bg-primary text-white p-4 flex items-center gap-3">
        <School className="h-6 w-6" />
        <h2 className="text-xl font-semibold">School-Based Actions</h2>
      </div>
      <CardContent className="pt-6">
        <ul className="space-y-3">
          {[
            {
              points: "10,000",
              action: "Complete GreenPlate Assessment"
            },
            {
              points: "25,000",
              action: "Earn a Bronze Medal"
            },
            {
              points: "50,000",
              action: "Earn a Silver Medal"
            },
            {
              points: "100,000",
              action: "Earn a Gold Medal"
            },
            {
              points: "250,000",
              action: "Earn Diamond Standard"
            },
            {
              points: "10,000",
              action: "Host a GreenPlate Presentation"
            },
            {
              points: "5,000",
              action: "Social Media Posts",
              note: "(Instagram, X, YouTube - proof required)"
            },
            {
              points: "10,000",
              action: "Feature GreenPlate on School Website"
            }
          ].map((item, index) => (
            <li key={index} className="flex items-start gap-2 hover:bg-green-50 p-2 rounded-md transition-all duration-300">
              <Badge variant="outline" className="mt-1 bg-green-50 group-hover:bg-green-100 transition-all duration-300">
                {item.points} <GPSymbol />
              </Badge>
              <span>
                {item.action} 
                {item.note && <span className="text-sm text-gray-500"> {item.note}</span>}
              </span>
            </li>
          ))}
        </ul>
      </CardContent>
    </Card>
  );
};

export default SchoolPointsCard;
