import Navigation from "../components/Navigation";
import ScrollingFact from "../components/ScrollingFact";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Sparkles, Medal, Trophy, Award, User, School, Users } from "lucide-react";
import { motion } from "framer-motion";

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};

const Awards = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      
      <main className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <motion.h1 
            initial="hidden"
            animate="visible"
            variants={fadeIn}
            className="text-4xl font-bold mb-8 text-primary"
          >
            GreenPlate Medals & Awards
          </motion.h1>
          
          {/* Year-End Prizes Section */}
          <motion.div 
            initial="hidden"
            animate="visible"
            variants={fadeIn}
            className="mb-12"
          >
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
                        <li>Feature interview on GreenPlate's website + social media takeover</li>
                        <li>"Lead Advocate" medal on the leaderboard (permanent)</li>
                        <li>Design input on next year's GreenPlate assessment</li>
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
                        <li>Social Media support to help them share their win locally</li>
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
          
          {/* Diamond Standard Medal Section with Certificate */}
          <motion.div 
            initial="hidden"
            animate="visible"
            variants={fadeIn}
            className="mb-8"
          >
            <Card className="hover:shadow-lg transition-shadow overflow-hidden">
              <CardHeader className="bg-gradient-to-r from-blue-600 via-purple-600 to-blue-600 text-white">
                <CardTitle className="flex items-center gap-4">
                  <Trophy className="h-7 w-7 text-white" />
                  <span className="text-2xl">97–100%: Diamond Standard Medal</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
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
                      <img 
                        src="/lovable-uploads/67d6aa38-24ae-46ec-adca-f610a85f0846.png"
                        alt="Example Diamond Standard Certificate"
                        className="w-full rounded-lg shadow-md"
                      />
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

          {/* Gold Medal Section with Certificate */}
          <motion.div 
            initial="hidden"
            animate="visible"
            variants={fadeIn}
            className="mb-8"
          >
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader className="bg-amber-500 text-white">
                <CardTitle className="flex items-center gap-4">
                  <Medal className="h-7 w-7 text-white" />
                  <span className="text-2xl">90%–96%: Gold Medal</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
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
                    <img 
                      src="/lovable-uploads/bc5fc1cb-bafb-4067-9cfc-b00a2b9d7260.png"
                      alt="Example Gold Medal Certificate"
                      className="w-full rounded-lg shadow-md"
                    />
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Silver Medal Section with Certificate */}
          <motion.div 
            initial="hidden"
            animate="visible"
            variants={fadeIn}
            className="mb-8"
          >
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader className="bg-gray-400 text-white">
                <CardTitle className="flex items-center gap-4">
                  <Medal className="h-7 w-7 text-white" />
                  <span className="text-2xl">80%–89%: Silver Medal</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
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
                    <img 
                      src="/lovable-uploads/46f68c12-3244-417a-8f7d-74cc51f7d41e.png"
                      alt="Example Silver Medal Certificate"
                      className="w-full rounded-lg shadow-md"
                    />
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Bronze Medal Section */}
          <motion.div 
            initial="hidden"
            animate="visible"
            variants={fadeIn}
            className="mb-8"
          >
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader className="bg-amber-700 text-white">
                <CardTitle className="flex items-center gap-4">
                  <Medal className="h-7 w-7 text-white" />
                  <span className="text-2xl">70%–79%: Bronze Medal</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
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

          {/* Keep Up the Good Work Section */}
          <motion.div 
            initial="hidden"
            animate="visible"
            variants={fadeIn}
          >
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader className="bg-gray-200">
                <CardTitle className="flex items-center gap-4">
                  <span className="text-2xl text-gray-800">Below 70%: Keep Up the Good Work</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
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

          <motion.div 
            initial="hidden"
            animate="visible"
            variants={fadeIn}
            className="mt-8 p-6 bg-gradient-to-r from-blue-50 via-purple-50 to-blue-50 rounded-lg border border-blue-200"
          >
            <p className="text-blue-800 italic">
              Each medal is designed to recognize schools for their efforts while motivating further action. 
              GreenPlate is here to support every school on its journey to sustainability, making sure 
              that every step forward creates a healthier, greener future for all!
            </p>
          </motion.div>
        </div>

        <ScrollingFact fact="Schools with sustainable dining programs see a 45% increase in student participation in environmental initiatives." />
      </main>
    </div>
  );
};

export default Awards;
