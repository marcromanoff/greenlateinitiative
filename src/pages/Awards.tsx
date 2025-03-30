import Navigation from "../components/Navigation";
import ScrollingFact from "../components/ScrollingFact";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Sparkles, Medal, Trophy } from "lucide-react";

const Awards = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      
      <main className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold mb-8 text-primary">GreenPlate Medals & Awards</h1>
          
          {/* Diamond Standard Medal Section with Certificate */}
          <div className="mb-8">
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
          </div>

          {/* Gold Medal Section with Certificate */}
          <div className="mb-8">
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
          </div>

          {/* Silver Medal Section with Certificate */}
          <div className="mb-8">
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
          </div>

          {/* Bronze Medal Section */}
          <div className="mb-8">
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
          </div>

          {/* Keep Up the Good Work Section */}
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

          <div className="mt-8 p-6 bg-gradient-to-r from-blue-50 via-purple-50 to-blue-50 rounded-lg border border-blue-200">
            <p className="text-blue-800 italic">
              Each medal is designed to recognize schools for their efforts while motivating further action. 
              GreenPlate is here to support every school on its journey to sustainability, making sure 
              that every step forward creates a healthier, greener future for all!
            </p>
          </div>
        </div>

        <ScrollingFact fact="Schools with sustainable dining programs see a 45% increase in student participation in environmental initiatives." />
      </main>
    </div>
  );
};

export default Awards;
