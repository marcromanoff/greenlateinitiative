
import React from 'react';
import { School } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import GPSymbol from './GPSymbol';

const SchoolPointsCard = () => {
  return (
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
  );
};

export default SchoolPointsCard;
