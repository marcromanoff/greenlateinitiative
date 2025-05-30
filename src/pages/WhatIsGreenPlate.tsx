import { Link } from "react-router-dom";
import Navigation from "../components/Navigation";
import ScrollingFact from "../components/ScrollingFact";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const WhatIsGreenPlate = () => {
  return <div className="min-h-screen bg-gradient-to-b from-white to-green-50">
      <Navigation />
      
      <main className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl font-bold mb-12 text-primary text-center animate-fade-in">
            What is GreenPlate?
          </h1>
          
          <div className="space-y-8">
            <section className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 border border-green-100">
              <div className="flex flex-col items-center text-center max-w-2xl mx-auto">
                <div>
                  <h2 className="text-2xl font-semibold mb-4 text-primary">Our Initiative</h2>
                  <p className="text-gray-700 leading-relaxed mb-4">The GreenPlate Initiative combines an objective grading system with a points-based leaderboard to drive real cafeteria change. Schools and ambassadors are evaluated in four core sustainability areas (below), earning points for their contributions. The more sustainable actions taken, the higher a school ranks—unlocking opportunities for recognition, prizes, and visibility within a growing national movement.</p>
                </div>
              </div>
              <div className="flex justify-center mt-6">
                <Button asChild className="bg-primary hover:bg-primary/90 text-white px-8 py-6 text-lg rounded-md">
                  <Link to="/get-involved" className="flex items-center gap-2">
                    Start Now <ArrowRight className="h-5 w-5" />
                  </Link>
                </Button>
              </div>
            </section>

            <section className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 border border-green-100">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div className="order-2 md:order-1">
                  <div className="space-y-2">
                    <div className="relative h-48 rounded-lg overflow-hidden">
                      <img src="/lovable-uploads/ea3c79ad-54c2-435c-9726-38bd0f049a85.png" alt="Sustainable catering display" className="object-cover w-full h-full hover:scale-105 transition-transform duration-300" />
                    </div>
                    <p className="text-sm text-gray-500 italic">Photo credit: Food Service Company</p>
                  </div>
                </div>
                <div className="order-1 md:order-2">
                  <h2 className="text-2xl font-semibold mb-4 text-primary">Recognition System</h2>
                  <p className="text-gray-700 leading-relaxed mb-4">
                    The GreenPlate Initiative uses a gamified points system to encourage schools and advocates to take action toward more sustainable, healthy, and ethical school lunches. The more impact you make, the more points you earn—and the higher you climb on the official leaderboard.
                  </p>
                  <p className="text-gray-700 leading-relaxed mb-4">
                    Schools also earn Diamond, Gold, Silver, or Bronze medals based on their performance in the GreenPlate sustainability grading system.
                  </p>
                  <p className="text-gray-700 leading-relaxed">
                    These certifications recognize schools' achievements and symbolize their leadership in creating healthier, more ethical, and environmentally responsible dining programs.
                  </p>
                  <Link to="/awards" className="text-primary hover:underline mt-4 inline-block">
                    Find out more about recognition and prizes here →
                  </Link>
                </div>
              </div>
            </section>

            <section className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 border border-green-100">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div>
                  <h2 className="text-2xl font-semibold mb-4 text-primary">Collaborative Approach</h2>
                  <p className="text-gray-700 leading-relaxed">The GreenPlate Initiative brings together students, administrators, and Ambassadors to drive change through shared action. Every step toward sustainable dining earns points—fueling leaderboard rankings, recognition, and real impact. By working together, schools build momentum, celebrate progress, and lead a growing movement for healthier, more ethical lunches nationwide.</p>
                </div>
                <div className="space-y-2">
                  <div className="relative h-48 rounded-lg overflow-hidden">
                    <img src="/lovable-uploads/6c0b369e-324c-45be-a5ff-5e99569d221f.png" alt="School lunch options" className="object-cover w-full h-full hover:scale-105 transition-transform duration-300" />
                  </div>
                  <p className="text-sm text-gray-500 italic">Photo credit: Machiso's Food Services</p>
                </div>
              </div>
            </section>

            <section className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 border border-green-100">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div className="space-y-2">
                  <div className="relative h-48 rounded-lg overflow-hidden">
                    <img src="/lovable-uploads/fb80305d-12fc-4647-b326-9b441fe226c8.png" alt="Sustainable meal preparation" className="object-cover w-full h-full hover:scale-105 transition-transform duration-300" />
                  </div>
                  <p className="text-sm text-gray-500 italic">Photo credit: Creative Dining Services</p>
                </div>
                <div>
                  <h2 className="text-2xl font-semibold mb-4 text-primary">Our Vision</h2>
                  <p className="text-gray-700 leading-relaxed">Our goal is to make sustainable dining the standard in schools—where every meal is nutritious, inclusive, and environmentally responsible. 


By turning action into points and progress into recognition, we empower schools to lead purposefully. Through friendly competition and measurable impact, we see a future where every cafeteria reflects the values of health, ethical value, and sustainability.</p>
                </div>
              </div>
            </section>
          </div>
        </div>

        <ScrollingFact fact="Schools with sustainable dining programs see a 45% increase in student participation in environmental initiatives." />
      </main>
    </div>;
};
export default WhatIsGreenPlate;
