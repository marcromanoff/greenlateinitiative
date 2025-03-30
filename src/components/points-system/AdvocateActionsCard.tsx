
import React from 'react';
import { GraduationCap } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import GPSymbol from './GPSymbol';

const AdvocateActionsCard = () => {
  return (
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
  );
};

export default AdvocateActionsCard;
