
import Navigation from "../components/Navigation";
import ScrollingFact from "../components/ScrollingFact";
import { Badge } from "@/components/ui/badge";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Card, CardContent } from "@/components/ui/card";
import { Award, Star, Trophy, Upload, School, Medal, GraduationCap, Share2 } from "lucide-react";

const PointsSystem = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#E8F4E2] via-[#D3E4FD] to-[#F2FCE2]">
      <Navigation />
      
      <main className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold mb-3 text-primary">
            <span className="text-primary">🟢 </span>
            How the GreenPlate Points System Works
          </h1>
          
          <p className="text-xl font-semibold mb-8">
            Earn Points. Climb the Leaderboard. Drive Real Change.
          </p>
          
          <div className="mb-12 bg-white p-6 rounded-lg shadow-sm">
            <p className="text-gray-700 leading-relaxed">
              The GreenPlate Initiative transforms school lunch reform into a powerful, gamified experience. 
              Advocates and schools earn points for taking action—from nominations to public impact—and rise on national leaderboards.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <Card className="overflow-hidden">
              <div className="bg-primary text-white p-4 flex items-center gap-3">
                <Upload className="h-6 w-6" />
                <h2 className="text-xl font-semibold">Nominate a School</h2>
              </div>
              <CardContent className="pt-6">
                <ul className="space-y-3">
                  <li className="flex items-start gap-2">
                    <Badge variant="outline" className="mt-1 bg-green-50">100</Badge>
                    <span>Submit a verified school contact</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Badge variant="outline" className="mt-1 bg-green-50">4,000</Badge>
                    <span>School completes assessment <span className="text-sm text-gray-500">(1,000 points for the referrer)</span></span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Badge variant="outline" className="mt-1 bg-green-50">10,000</Badge>
                    <span>School joins officially</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
            
            <Card className="overflow-hidden">
              <div className="bg-primary text-white p-4 flex items-center gap-3">
                <School className="h-6 w-6" />
                <h2 className="text-xl font-semibold">School-Based Actions</h2>
              </div>
              <CardContent className="pt-6">
                <ul className="space-y-3">
                  <li className="flex items-start gap-2">
                    <Badge variant="outline" className="mt-1 bg-green-50">10,000</Badge>
                    <span>Complete GreenPlate Assessment</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Badge variant="outline" className="mt-1 bg-green-50">25,000</Badge>
                    <span>Earn a Bronze Medal</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Badge variant="outline" className="mt-1 bg-green-50">50,000</Badge>
                    <span>Earn a Silver Medal</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Badge variant="outline" className="mt-1 bg-green-50">100,000</Badge>
                    <span>Earn a Gold Medal</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Badge variant="outline" className="mt-1 bg-green-50">250,000</Badge>
                    <span>Earn Diamond Standard</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Badge variant="outline" className="mt-1 bg-green-50">10,000</Badge>
                    <span>Host a GreenPlate Presentation</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Badge variant="outline" className="mt-1 bg-green-50">5,000</Badge>
                    <span>Social Media Posts <span className="text-sm text-gray-500">(Instagram, X, YouTube - proof required)</span></span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Badge variant="outline" className="mt-1 bg-green-50">10,000</Badge>
                    <span>Feature GreenPlate on School Website</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
            
            <Card className="overflow-hidden">
              <div className="bg-primary text-white p-4 flex items-center gap-3">
                <GraduationCap className="h-6 w-6" />
                <h2 className="text-xl font-semibold">Advocate Actions</h2>
              </div>
              <CardContent className="pt-6">
                <ul className="space-y-3">
                  <li className="flex items-start gap-2">
                    <Badge variant="outline" className="mt-1 bg-green-50">2,000</Badge>
                    <span>Post on Instagram</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Badge variant="outline" className="mt-1 bg-green-50">1,500</Badge>
                    <span>Post on Facebook Group</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Badge variant="outline" className="mt-1 bg-green-50">6,000</Badge>
                    <span>YouTube Explainer Video</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Badge variant="outline" className="mt-1 bg-green-50">5,000</Badge>
                    <span>Write a Blog or Article</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Badge variant="outline" className="mt-1 bg-green-50">50,000</Badge>
                    <span>Secure Local News Coverage</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Badge variant="outline" className="mt-1 bg-green-50">20,000</Badge>
                    <span>Submit a Testimonial Video</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
            
            <Card className="overflow-hidden">
              <div className="bg-primary text-white p-4 flex items-center gap-3">
                <Trophy className="h-6 w-6" />
                <h2 className="text-xl font-semibold">Level Up with Titles</h2>
              </div>
              <CardContent className="pt-6">
                <p className="mb-4">Earn public ranking titles as you climb:</p>
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead className="w-1/2">Title</TableHead>
                      <TableHead className="text-right">Points</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    <TableRow>
                      <TableCell className="font-medium">🌱 Eco Vanguard</TableCell>
                      <TableCell className="text-right">10,000</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell className="font-medium">🌿 Guardian of Change</TableCell>
                      <TableCell className="text-right">50,000</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell className="font-medium">🏆 Champion of the Future</TableCell>
                      <TableCell className="text-right">100,000</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell className="font-medium">🔥 Pathfinder for the Planet</TableCell>
                      <TableCell className="text-right">250,000</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell className="font-medium">🛡️ Defender of Earth</TableCell>
                      <TableCell className="text-right">500,000</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell className="font-medium">✨ Legend of the GreenVerse</TableCell>
                      <TableCell className="text-right">1,000,000+</TableCell>
                    </TableRow>
                  </TableBody>
                </Table>
              </CardContent>
            </Card>
          </div>
          
          <Card className="mb-12 overflow-hidden">
            <div className="bg-primary text-white p-4 flex items-center gap-3">
              <Award className="h-6 w-6" />
              <h2 className="text-xl font-semibold">End-of-Year Awards</h2>
            </div>
            <CardContent className="pt-6">
              <p className="text-gray-700 leading-relaxed">
                Top 3 Schools and Advocates earn special prizes, spotlights, exclusive invites, and certification honors. 
                Compete with purpose—and get rewarded for real change.
              </p>
              
              <div className="mt-6 bg-green-50 border border-green-100 p-4 rounded-lg">
                <div className="flex items-center gap-2 mb-2">
                  <Star className="h-5 w-5 text-primary" />
                  <h3 className="font-semibold">Coming Soon</h3>
                </div>
                <p className="text-sm text-gray-600">
                  A visual leaderboard and progress tracker will be added to this section in a future update.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>

        <ScrollingFact fact="Schools participating in the GreenPlate Points System report 40% higher student engagement in sustainability programs. Points-driven initiatives create measurable, positive change." />
      </main>
    </div>
  );
};

export default PointsSystem;
