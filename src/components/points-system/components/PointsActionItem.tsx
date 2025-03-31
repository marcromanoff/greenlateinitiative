
import { Badge } from "@/components/ui/badge";
import GPSymbol from '../GPSymbol';
import { ReactNode } from "react";

interface PointsActionItemProps {
  points: number;
  description: string;
  additionalInfo?: string;
  children?: ReactNode;
}

export const PointsActionItem = ({ 
  points, 
  description, 
  additionalInfo,
  children 
}: PointsActionItemProps) => {
  return (
    <li className="flex items-start gap-2 bg-green-50 rounded-md p-2">
      <Badge variant="outline" className="mt-1 bg-green-50">
        {points} <GPSymbol />
      </Badge>
      {children || (
        <span className="text-left hover:text-primary hover:underline transition-colors text-green-800">
          {description}
        </span>
      )}
      {additionalInfo && (
        <span className="text-sm text-gray-500">{additionalInfo}</span>
      )}
    </li>
  );
};
