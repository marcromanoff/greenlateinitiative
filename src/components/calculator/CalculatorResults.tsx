import { Leaf, DollarSign, Scale } from "lucide-react";

interface CalculatorResultsProps {
  annualWaste: number;
  carbonFootprint: number;
  potentialSavings: number;
}

export const CalculatorResults = ({
  annualWaste,
  carbonFootprint,
  potentialSavings,
}: CalculatorResultsProps) => {
  return (
    <div className="grid md:grid-cols-3 gap-6">
      <div className="bg-green-50 p-6 rounded-lg">
        <div className="flex items-center gap-2 mb-4">
          <Scale className="h-6 w-6 text-primary" />
          <h3 className="text-lg font-semibold">Annual Food Waste</h3>
        </div>
        <p className="text-3xl font-bold text-primary">
          {annualWaste.toFixed(0)} lbs
        </p>
        <p className="text-sm text-gray-600 mt-2">
          Total waste over the school year
        </p>
      </div>

      <div className="bg-green-50 p-6 rounded-lg">
        <div className="flex items-center gap-2 mb-4">
          <Leaf className="h-6 w-6 text-primary" />
          <h3 className="text-lg font-semibold">Carbon Footprint</h3>
        </div>
        <p className="text-3xl font-bold text-primary">
          {carbonFootprint.toFixed(1)} tons
        </p>
        <p className="text-sm text-gray-600 mt-2">
          CO₂ equivalent per year
        </p>
      </div>

      <div className="bg-green-50 p-6 rounded-lg">
        <div className="flex items-center gap-2 mb-4">
          <DollarSign className="h-6 w-6 text-primary" />
          <h3 className="text-lg font-semibold">Potential Savings</h3>
        </div>
        <p className="text-3xl font-bold text-primary">
          ${potentialSavings.toFixed(0)}
        </p>
        <p className="text-sm text-gray-600 mt-2">
          Estimated annual savings
        </p>
      </div>
    </div>
  );
};