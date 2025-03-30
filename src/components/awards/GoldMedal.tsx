import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Medal } from "lucide-react";
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

const GoldMedal = () => {
  return (
    <motion.div initial="hidden" animate="visible" variants={fadeIn} className="mb-8">
      <Card className="hover:shadow-lg transition-shadow">
        <CardHeader className="bg-amber-500 text-white pb-6">
          <CardTitle className="flex items-center gap-4">
            <Medal className="h-7 w-7 text-white" />
            <span className="text-2xl">90%–96%: Gold Medal</span>
          </CardTitle>
        </CardHeader>
        <CardContent className="pt-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
            <div className="space-y-4">
              <div>
                <h3 className="font-semibold mb-2">What It Means:</h3>
                <p className="text-amber-800">
                  The Gold Medal honors schools that demonstrate outstanding achievement in sustainable and 
                  ethical dining practices.
                </p>
              </div>
              <div>
                <h3 className="font-semibold mb-2">Why It's Special:</h3>
                <p className="text-amber-800">
                  These schools are ahead of the curve, setting an example for others to follow.
                </p>
              </div>
              <div>
                <h3 className="font-semibold mb-2">What Your School Receives:</h3>
                <p className="text-amber-800">
                  A Gold Medal Certificate recognizing your commitment and success.
                </p>
              </div>
            </div>
            <div>
              <p className="text-sm text-gray-500 mb-2">Example Certificate:</p>
              <img src="/lovable-uploads/bc5fc1cb-bafb-4067-9cfc-b00a2b9d7260.png" alt="Example Gold Medal Certificate" className="w-full rounded-lg shadow-md" />
            </div>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
};

export default GoldMedal;
