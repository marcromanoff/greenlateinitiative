import Navigation from "../components/Navigation";
import ScrollingFact from "../components/ScrollingFact";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const Awards = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      
      <main className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold mb-8 text-primary">GreenPlate Grading Scale & Awards</h1>
          
          {/* Gold Standard Section with Certificate */}
          <div className="mb-8">
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="flex items-center gap-4">
                  <span className="text-2xl">100%: Gold Standard (A Perfect Score)</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
                  <div className="space-y-4">
                    <div>
                      <h3 className="font-semibold mb-2">What It Means:</h3>
                      <p className="text-amber-800">
                        Achieving the Gold Standard signifies that your school has reached the highest level of excellence 
                        in sustainability, ethical dining practices, and inclusivity.
                      </p>
                    </div>
                    <div>
                      <h3 className="font-semibold mb-2">Why It's Special:</h3>
                      <p className="text-amber-800">
                        This award recognizes schools with the highest sustainable practice standards, 
                        setting a benchmark for others to follow.
                      </p>
                    </div>
                    <div>
                      <h3 className="font-semibold mb-2">What Your School Receives:</h3>
                      <p className="text-amber-800">
                        A prestigious Gold Standard Medal Certificate and certificate to proudly display 
                        in your cafeteria or school.
                      </p>
                    </div>
                  </div>
                  <div>
                    <p className="text-sm text-gray-500 mb-2">Example Certificate:</p>
                    <img 
                      src="/lovable-uploads/d3add2d4-0f0c-493f-8c9c-7bd7b82f77b3.png"
                      alt="Example Gold Standard Certificate"
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
              <CardHeader>
                <CardTitle className="flex items-center gap-4">
                  <span className="text-2xl">90%–99%: Silver Medal</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
                  <div className="space-y-4">
                    <div>
                      <h3 className="font-semibold mb-2">What It Means:</h3>
                      <p className="text-gray-600">
                        The Silver Medal celebrates schools that have demonstrated outstanding sustainability 
                        efforts and made significant progress toward achieving the Gold Standard.
                      </p>
                    </div>
                    <div>
                      <h3 className="font-semibold mb-2">What Your School Receives:</h3>
                      <p className="text-gray-600">
                        A Silver Medal Certificate and recognition for your impressive achievements in ethical dining.
                      </p>
                    </div>
                  </div>
                  <div>
                    <p className="text-sm text-gray-500 mb-2">Example Certificate:</p>
                    <img 
                      src="/lovable-uploads/bc5fc1cb-bafb-4067-9cfc-b00a2b9d7260.png"
                      alt="Example Silver Medal Certificate"
                      className="w-full rounded-lg shadow-md"
                    />
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Bronze Medal Section with Certificate */}
          <div className="mb-8">
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="flex items-center gap-4">
                  <span className="text-2xl">80%–89%: Bronze Medal</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
                  <div className="space-y-4">
                    <div>
                      <h3 className="font-semibold mb-2">What It Means:</h3>
                      <p className="text-gray-600">
                        The Bronze Medal highlights schools that are on the path to sustainability excellence, 
                        making important strides and laying a strong foundation for future improvement.
                      </p>
                    </div>
                    <div>
                      <h3 className="font-semibold mb-2">What Your School Receives:</h3>
                      <p className="text-gray-600">
                        A Bronze Medal Certificate to celebrate your school's commitment and motivate 
                        continued improvement.
                      </p>
                    </div>
                  </div>
                  <div>
                    <p className="text-sm text-gray-500 mb-2">Example Certificate:</p>
                    <img 
                      src="/lovable-uploads/46f68c12-3244-417a-8f7d-74cc51f7d41e.png"
                      alt="Example Bronze Medal Certificate"
                      className="w-full rounded-lg shadow-md"
                    />
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Keep Up the Good Work Section */}
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="flex items-center gap-4">
                  <span className="text-2xl">Below 80%: Keep Up the Good Work</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div>
                    <h3 className="font-semibold mb-2">What It Means:</h3>
                    <p className="text-gray-600">
                      Your school is making progress and showing dedication to sustainability, 
                      but there's room for improvement.
                    </p>
                  </div>
                  <div>
                    <h3 className="font-semibold mb-2">What Your School Receives:</h3>
                    <p className="text-gray-600">
                      Personalized feedback and resources from GreenPlate to help improve your dining 
                      program and reach higher milestones.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

          <div className="mt-8 p-6 bg-amber-50 rounded-lg">
            <p className="text-amber-800 italic">
              Each medal is designed to honor schools for their efforts while motivating further action. 
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
