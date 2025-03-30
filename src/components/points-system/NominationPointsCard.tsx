
import React from 'react';
import { Upload } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import GPSymbol from './GPSymbol';

const NominationPointsCard = () => {
  return (
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
  );
};

export default NominationPointsCard;
