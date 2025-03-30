
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Award, Medal, Trophy, User, School, Users } from "lucide-react";
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

const YearEndPrizes = () => {
  return (
    <motion.div initial="hidden" animate="visible" variants={fadeIn} className="mb-12">
      <Card className="hover:shadow-lg transition-shadow overflow-hidden border-amber-200">
        <CardHeader className="bg-gradient-to-r from-amber-500 via-amber-400 to-amber-500 text-white">
          <CardTitle className="flex items-center gap-4">
            <Award className="h-7 w-7 text-white animate-pulse" />
            <span className="text-2xl">Year-End Prizes</span>
          </CardTitle>
        </CardHeader>
        <CardContent className="bg-amber-50">
          <p className="text-amber-800 mb-6">
            At the end of each year, the top 3 schools and top 3 advocates will receive special recognition and exclusive prizes:
          </p>
          
          {/* 1st Place */}
          <div className="mb-8 bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-all border border-amber-200">
            <div className="flex items-center gap-3 mb-4">
              <Trophy className="h-7 w-7 text-amber-500" />
              <h3 className="text-xl font-bold text-amber-800">🥇 1st Place – GreenPlate Champion of the Year</h3>
            </div>
            
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <div className="flex items-center gap-2 mb-1">
                  <User className="h-5 w-5 text-primary" />
                  <h4 className="font-semibold text-primary">👤 Advocate</h4>
                </div>
                <ul className="space-y-2 list-disc pl-6 text-gray-700">
                  <li>Custom certificate with name and title: "National GreenPlate Champion"</li>
                  <li>"Lead Advocate" medal on the leaderboard (permanent)</li>
                  <li>Lifetime VIP access to future GreenPlate programs/events</li>
                </ul>
              </div>
              
              <div className="space-y-2">
                <div className="flex items-center gap-2 mb-1">
                  <School className="h-5 w-5 text-primary" />
                  <h4 className="font-semibold text-primary">🏫 School</h4>
                </div>
                <ul className="space-y-2 list-disc pl-6 text-gray-700">
                  <li>Diamond Award Certification + custom banner mailed to school</li>
                  <li>Top placement on GreenPlate map + homepage spotlight</li>
                  <li>Featured on the Official GreenPlate Initiative home page</li>
                  <li>Social Media support to help them share win</li>
                </ul>
              </div>
            </div>
          </div>
          
          {/* 2nd Place */}
          <div className="mb-8 bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-all border border-amber-200">
            <div className="flex items-center gap-3 mb-4">
              <Medal className="h-7 w-7 text-gray-400" />
              <h3 className="text-xl font-bold text-gray-700">🥈 2nd Place – Eco Impact Leader</h3>
            </div>
            
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <div className="flex items-center gap-2 mb-1">
                  <User className="h-5 w-5 text-primary" />
                  <h4 className="font-semibold text-primary">👤 Advocate</h4>
                </div>
                <ul className="space-y-2 list-disc pl-6 text-gray-700">
                  <li>Digital medal on leaderboard & website profile</li>
                  <li>Invitation to an online GreenPlate summit</li>
                  <li>Early access to new GreenPlate campaigns + feedback role</li>
                </ul>
              </div>
              
              <div className="space-y-2">
                <div className="flex items-center gap-2 mb-1">
                  <School className="h-5 w-5 text-primary" />
                  <h4 className="font-semibold text-primary">🏫 School</h4>
                </div>
                <ul className="space-y-2 list-disc pl-6 text-gray-700">
                  <li>Gold Award Certification</li>
                  <li>Social media feature + newsletter spotlight</li>
                  <li>Recognition email sent to all stakeholders (admin, PTA, etc.)</li>
                  <li>School profile added to "GreenPlate Success Stories" section online</li>
                </ul>
              </div>
            </div>
          </div>
          
          {/* 3rd Place */}
          <div className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-all border border-amber-200">
            <div className="flex items-center gap-3 mb-4">
              <Medal className="h-7 w-7 text-amber-700" />
              <h3 className="text-xl font-bold text-amber-700">🥉 3rd Place – Sustainability Star</h3>
            </div>
            
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <div className="flex items-center gap-2 mb-1">
                  <User className="h-5 w-5 text-primary" />
                  <h4 className="font-semibold text-primary">👤 Advocate</h4>
                </div>
                <ul className="space-y-2 list-disc pl-6 text-gray-700">
                  <li>Digital certificate + Bronze medal</li>
                  <li>Shoutout on social platforms with custom graphic</li>
                  <li>Name listed on site under "Top Advocates"</li>
                </ul>
              </div>
              
              <div className="space-y-2">
                <div className="flex items-center gap-2 mb-1">
                  <School className="h-5 w-5 text-primary" />
                  <h4 className="font-semibold text-primary">🏫 School</h4>
                </div>
                <ul className="space-y-2 list-disc pl-6 text-gray-700">
                  <li>Silver Award Certification</li>
                  <li>Leaderboard placement with "Sustainability Star" tag</li>
                  <li>Featured in a "Rising Schools to Watch" post</li>
                </ul>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
};

export default YearEndPrizes;
