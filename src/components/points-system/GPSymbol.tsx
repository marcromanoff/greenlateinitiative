
import React from 'react';
import { Leaf } from "lucide-react";

// Custom GreenPlate Points symbol component with animation
const GPSymbol = ({ className = "" }: { className?: string }) => (
  <span className={`inline-flex items-center ml-1 group ${className}`}>
    <Leaf className="h-3 w-3 text-primary stroke-[3] -ml-0.5 mr-0.5 transition-all duration-300 group-hover:scale-125 group-hover:text-green-600" />
  </span>
);

export default GPSymbol;
