
import Navigation from "../components/Navigation";
import ScrollingFact from "../components/ScrollingFact";
import { motion } from "framer-motion";
import YearEndPrizes from "../components/awards/YearEndPrizes";
import DiamondStandardMedal from "../components/awards/DiamondStandardMedal";
import GoldMedal from "../components/awards/GoldMedal";
import SilverMedal from "../components/awards/SilverMedal";
import BronzeMedal from "../components/awards/BronzeMedal";
import KeepUpGoodWork from "../components/awards/KeepUpGoodWork";
import SupportMessage from "../components/awards/SupportMessage";

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

const Awards = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      
      <main className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <motion.h1 initial="hidden" animate="visible" variants={fadeIn} className="text-4xl font-bold mb-8 text-primary">
            GreenPlate Medals & Awards
          </motion.h1>
          
          {/* Year-End Prizes Section */}
          <YearEndPrizes />
          
          {/* Medal Sections */}
          <DiamondStandardMedal />
          <GoldMedal />
          <SilverMedal />
          <BronzeMedal />
          <KeepUpGoodWork />

          <SupportMessage />
        </div>

        <ScrollingFact fact="Schools with sustainable dining programs see a 45% increase in student participation in environmental initiatives." />
      </main>
    </div>
  );
};

export default Awards;
