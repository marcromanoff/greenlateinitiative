import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Sparkles, Trophy } from "lucide-react";
import { motion } from "framer-motion";

const fadeIn = {
  hidden: {
    opacity: 0,
    y: 20
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6
    }
  }
};

const DiamondStandardMedal = () => {
  return (
    <motion.div initial="hidden" animate="visible" variants={fadeIn} className="mb-8">
      <Card className="hover:shadow-lg transition-shadow overflow-hidden">
        <CardHeader className="bg-gradient-to-r from-blue-600 via-purple-600 to-blue-600 text-white pb-6">
          <CardTitle className="flex items-center gap-4">
            <Trophy className="h-7 w-7 text-white" />
            <span className="text-2xl">97–100%: Diamond Standard Medal</span>
          </CardTitle>
        </CardHeader>
        <CardContent className="pt-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
            <div className="space-y-4">
              <div>
                <h3 className="font-semibold mb-2">What It Means:</h3>
                <p className="text-blue-800">
                  Achieving the Diamond Standard signifies a perfect or near-perfect score—your school is a 
                  national leader in sustainability, ethical sourcing, and inclusive food practices.
                </p>
              </div>
              <div>
                <h3 className="font-semibold mb-2">Why It's Special:</h3>
                <p className="text-blue-800">
                  This is the highest possible recognition, reserved for schools setting the ultimate standard 
                  in sustainable dining.
                </p>
              </div>
              <div>
                <h3 className="font-semibold mb-2">What Your School Receives:</h3>
                <p className="text-blue-800">
                  A prestigious Diamond Standard Medal Certificate, plus national spotlight on GreenPlate's 
                  homepage, sustainability map, and leaderboard.
                </p>
              </div>
            </div>
            <div>
              <p className="text-sm text-gray-500 mb-2">Example Certificate:</p>
              <div className="relative">
                <img src="/lovable-uploads/67d6aa38-24ae-46ec-adca-f610a85f0846.png" alt="Example Diamond Standard Certificate" className="w-full rounded-lg shadow-md" />
                <div className="absolute -top-4 -right-4 animate-pulse">
                  <Sparkles className="h-8 w-8 text-purple-400" />
                </div>
                <div className="absolute bottom-0 left-0 animate-pulse delay-150">
                  <Sparkles className="h-6 w-6 text-blue-400" />
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
};

export default DiamondStandardMedal;
