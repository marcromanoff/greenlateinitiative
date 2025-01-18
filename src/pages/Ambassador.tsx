import Navigation from "../components/Navigation";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const Ambassador = () => {
  return (
    <div className="min-h-screen bg-green-50">
      <Navigation />
      <main className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          {/* Header section with title and button */}
          <div className="flex items-center justify-between mb-8">
            <h1 className="text-4xl font-bold text-primary">GreenPlate Ambassador Program</h1>
            <Link to="/get-involved">
              <Button variant="secondary" size="lg" className="text-lg">
                Start Now
              </Button>
            </Link>
          </div>

          {/* Certificate Image */}
          <div className="mb-12">
            <div className="relative rounded-lg overflow-hidden shadow-lg">
              <img 
                src="/lovable-uploads/1c49f39c-fad0-4949-b2e3-8455683ae9cc.png"
                alt="Example GreenPlate Certificate of Nomination"
                className="w-full object-contain"
              />
            </div>
            <p className="text-sm text-gray-500 italic text-center mt-2">Example GreenPlate Certificate of Nomination</p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            {/* Students Column */}
            <section className="bg-white rounded-lg shadow-md p-8 hover:shadow-lg transition-duration-300">
              <h2 className="text-3xl font-bold text-gray-800 mb-6">For Students: Lead the Way!</h2>
              <p className="text-gray-700 mb-6 text-lg">
                Be the first to nominate your school for the GreenPlate Ambassador Program and receive an official GreenPlate Certificate of Nomination. Show your commitment to sustainability and:
              </p>
              <ul className="space-y-4 mb-6 text-lg">
                <li><span className="font-bold">Be Recognized as a Leader:</span> Your nomination could be the first step in earning your school the Gold Standard in Sustainability.</li>
                <li><span className="font-bold">Get Your School Involved:</span> Help kickstart real changes in your cafeteria's dining practices.</li>
                <li><span className="font-bold">Receive Your Certificate:</span> Proudly display your GreenPlate Certificate as proof of your leadership and advocacy.</li>
              </ul>
            </section>

            {/* Administrators Column */}
            <section className="bg-white rounded-lg shadow-md p-8 hover:shadow-lg transition-duration-300">
              <h2 className="text-3xl font-bold text-gray-800 mb-6">For Administrators: Take the Lead!</h2>
              <p className="text-gray-700 mb-6 text-lg">
                Be the first administrator to apply for the GreenPlate Initiative and earn a GreenPlate Certificate of Leadership in Sustainability. Show your school's dedication to healthier, ethical dining and:
              </p>
              <ul className="space-y-4 mb-6 text-lg">
                <li><span className="font-bold">Receive Your Certificate:</span> Your school will be among the first recognized for its commitment to sustainability.</li>
                <li><span className="font-bold">Set a New Standard:</span> Lead the way for other schools in achieving sustainable dining excellence.</li>
                <li><span className="font-bold">Showcase Your Dedication:</span> Use your certificate to highlight your school's forward-thinking approach to dining services.</li>
              </ul>
            </section>
          </div>

          <section className="bg-primary/10 p-8 rounded-lg">
            <h2 className="text-2xl font-bold text-primary mb-6">First Applicants Receive Exclusive Perks:</h2>
            <ul className="list-disc list-inside text-gray-700 space-y-3 mb-8 text-lg">
              <li>Official Certificate of Nomination</li>
              <li>Early access to GreenPlate resources and tools</li>
              <li>Recognition as a trailblazer in sustainability</li>
            </ul>
          </section>
        </div>
      </main>
    </div>
  );
};

export default Ambassador;