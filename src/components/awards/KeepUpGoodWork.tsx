import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
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

const KeepUpGoodWork = () => {
  return (
    <motion.div initial="hidden" animate="visible" variants={fadeIn}>
      <Card className="hover:shadow-lg transition-shadow">
        <CardHeader className="bg-gray-200 pb-6">
          <CardTitle className="flex items-center gap-4">
            <span className="text-2xl text-gray-800">Below 70%: Keep Up the Good Work</span>
          </CardTitle>
        </CardHeader>
        <CardContent className="pt-8">
          <div className="space-y-4">
            <div>
              <h3 className="font-semibold mb-2">What It Means:</h3>
              <p className="text-gray-600">
                Your school is on the journey—taking important first steps. With more focus, 
                you can rise higher on the leaderboard.
              </p>
            </div>
            <div>
              <h3 className="font-semibold mb-2">What Your School Receives:</h3>
              <p className="text-gray-600">
                Personalized feedback and resources from GreenPlate to help improve your score and impact.
              </p>
            </div>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
};

export default KeepUpGoodWork;
