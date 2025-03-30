
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { Sparkles } from "lucide-react";

const GradingScale = () => {
  return (
    <Card className="mb-8">
      <CardContent className="p-6">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-2xl font-semibold">Grading Scale</h2>
          <Link to="/awards" className="text-sm text-primary hover:underline">
            See awards for more details →
          </Link>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-blue-50 p-4 rounded-lg border border-blue-200 relative overflow-hidden hover:shadow-lg transition-shadow duration-300">
            <div className="absolute top-0 right-0 animate-pulse">
              <Sparkles className="h-6 w-6 text-amber-400" />
            </div>
            <div className="absolute -top-4 -left-4 animate-pulse delay-150">
              <Sparkles className="h-6 w-6 text-blue-400" />
            </div>
            <p className="font-semibold text-blue-800 flex items-center">
              97-100%: Diamond Standard Medal 
              <Sparkles className="h-5 w-5 text-purple-400 ml-2 animate-pulse" />
            </p>
            <p className="text-sm text-blue-700">A perfect or near perfect score</p>
          </div>
          <div className="bg-amber-50 p-4 rounded-lg border border-amber-200">
            <p className="font-semibold text-amber-800">90%–96%: Gold Medal</p>
            <p className="text-sm text-amber-700">Outstanding achievement</p>
          </div>
          <div className="bg-gray-50 p-4 rounded-lg">
            <p className="font-semibold text-gray-800">80%–89%: Silver Medal</p>
            <p className="text-sm text-gray-600">Ahead of the competition</p>
          </div>
          <div className="bg-orange-50 p-4 rounded-lg">
            <p className="font-semibold text-orange-800">70%–79%: Bronze Medal</p>
            <p className="text-sm text-orange-600">Solid Progress</p>
          </div>
          <div className="bg-red-50 p-4 rounded-lg col-span-full border border-red-100">
            <p className="font-semibold text-red-700">Below 70%: Keep Up the Good Work</p>
            <p className="text-sm text-gray-600">Room for improvement</p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default GradingScale;
