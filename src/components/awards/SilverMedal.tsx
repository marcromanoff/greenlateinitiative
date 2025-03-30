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

const SilverMedal = () => {
  return (
    <motion.div initial="hidden" animate="visible" variants={fadeIn} className="mb-8">
      <Card className="hover:shadow-lg transition-shadow">
        <CardHeader className="bg-gray-400 text-white pb-6">
          <CardTitle className="flex items-center gap-4">
            <Medal className="h-7 w-7 text-white" />
            <span className="text-2xl">80%–89%: Silver Medal</span>
          </CardTitle>
        </CardHeader>
        <CardContent className="pt-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
            <div className="space-y-4">
              <div>
                <h3 className="font-semibold mb-2">What It Means:</h3>
                <p className="text-gray-700">
                  The Silver Medal highlights schools making strong progress, actively improving and implementing 
                  sustainable practices.
                </p>
              </div>
              <div>
                <h3 className="font-semibold mb-2">Why It's Special:</h3>
                <p className="text-gray-700">
                  These schools are ahead of the competition and on track for even greater impact.
                </p>
              </div>
              <div>
                <h3 className="font-semibold mb-2">What Your School Receives:</h3>
                <p className="text-gray-700">
                  A Silver Medal Certificate to proudly display and drive continued change.
                </p>
              </div>
            </div>
            <div>
              <p className="text-sm text-gray-500 mb-2">Example Certificate:</p>
              <img src="/lovable-uploads/46f68c12-3244-417a-8f7d-74cc51f7d41e.png" alt="Example Silver Medal Certificate" className="w-full rounded-lg shadow-md" />
            </div>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
};

export default SilverMedal;
