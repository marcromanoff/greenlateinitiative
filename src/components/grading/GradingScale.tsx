
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { Sparkles, Trophy, Medal } from "lucide-react";

const GradingScale = () => {
  return <Card className="mb-8">
      <CardContent className="p-6">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-2xl font-semibold text-primary">Grading Scale</h2>
          <Link to="/awards" className="text-sm text-secondary hover:underline">
            See medals & awards for more details →
          </Link>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-gradient-to-br from-soft-purple via-soft-blue to-soft-green p-4 rounded-lg border border-primary/20 relative overflow-hidden hover:shadow-lg transition-shadow duration-300 group">
            <div className="absolute top-0 right-0 animate-pulse">
              <Sparkles className="h-6 w-6 text-primary" />
            </div>
            <div className="absolute -top-4 -left-4 animate-pulse delay-150">
              <Sparkles className="h-6 w-6 text-secondary" />
            </div>
            <div className="absolute bottom-1 right-4 animate-pulse delay-300">
              <Sparkles className="h-4 w-4 text-tertiary-purple" />
            </div>
            <div className="flex items-center">
              <Trophy className="h-5 w-5 text-primary mr-2" />
              <p className="font-semibold text-transparent bg-clip-text bg-gradient-to-r from-primary via-secondary to-tertiary-purple flex items-center group-hover:scale-105 transition-transform">
                97-100%: Diamond Standard Medal 
                <Sparkles className="h-5 w-5 text-primary ml-2 animate-pulse" />
              </p>
            </div>
            <p className="text-sm text-primary/80 relative z-10">A perfect or near-perfect score</p>
          </div>
          <div className="bg-soft-yellow p-4 rounded-lg border border-amber-200">
            <div className="flex items-center">
              <Medal className="h-5 w-5 text-amber-600 mr-2" />
              <p className="font-semibold text-amber-800">90%–96%: Gold Medal</p>
            </div>
            <p className="text-sm text-amber-700">Outstanding achievement</p>
          </div>
          <div className="bg-soft-gray p-4 rounded-lg border border-gray-200">
            <div className="flex items-center">
              <Medal className="h-5 w-5 text-gray-500 mr-2" />
              <p className="font-semibold text-gray-800">80%–89%: Silver Medal</p>
            </div>
            <p className="text-sm text-gray-600">Strong progress toward sustainability</p>
          </div>
          <div className="bg-soft-peach p-4 rounded-lg border border-amber-300">
            <div className="flex items-center">
              <Medal className="h-5 w-5 text-amber-700 mr-2" />
              <p className="font-semibold text-amber-800">70%–79%: Bronze Medal</p>
            </div>
            <p className="text-sm text-amber-700">Solid progress</p>
          </div>
          <div className="p-4 rounded-lg col-span-full border border-red-200 bg-red-50">
            <p className="font-semibold text-red-700">Below 70%: Keep Up the Good Work</p>
            <p className="text-sm text-red-600">On the journey with room to improve</p>
          </div>
        </div>
      </CardContent>
    </Card>;
};
export default GradingScale;
