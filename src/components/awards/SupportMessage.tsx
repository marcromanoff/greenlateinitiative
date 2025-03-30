
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

const SupportMessage = () => {
  return (
    <motion.div initial="hidden" animate="visible" variants={fadeIn} className="mt-8 p-6 bg-gradient-to-r from-blue-50 via-purple-50 to-blue-50 rounded-lg border border-blue-200">
      <p className="text-blue-800 italic">
        Each medal is designed to recognize schools for their efforts while motivating further action. 
        GreenPlate is here to support every school on its journey to sustainability, making sure 
        that every step forward creates a healthier, greener future for all!
      </p>
    </motion.div>
  );
};

export default SupportMessage;
