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

const BronzeMedal = () => {
  return (
    <motion.div initial="hidden" animate="visible" variants={fadeIn} className="mb-8">
      <Card className="hover:shadow-lg transition-shadow">
        <CardHeader className="bg-amber-700 text-white pb-6">
          <CardTitle className="flex items-center gap-4">
            <Medal className="h-7 w-7 text-white" />
            <span className="text-2xl">70%–79%: Bronze Medal</span>
          </CardTitle>
        </CardHeader>
        <CardContent className="pt-8">
          <div className="space-y-4">
            <div>
              <h3 className="font-semibold mb-2">What It Means:</h3>
              <p className="text-amber-800">
                The Bronze Medal represents schools making solid progress toward sustainability, with room to grow.
              </p>
            </div>
            <div>
              <h3 className="font-semibold mb-2">Why It's Special:</h3>
              <p className="text-amber-800">
                It celebrates meaningful improvements and recognizes your school's commitment to 
                building a better dining culture.
              </p>
            </div>
            <div>
              <h3 className="font-semibold mb-2">What Your School Receives:</h3>
              <p className="text-amber-800">
                A Bronze Medal Certificate and supportive feedback to help you reach the next level.
              </p>
            </div>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
};

export default BronzeMedal;
