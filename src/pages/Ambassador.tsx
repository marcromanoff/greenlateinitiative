import Navigation from "../components/Navigation";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const Ambassador = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <main className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold text-primary mb-8">GreenPlate Ambassador Program</h1>
          
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            {/* Students Column */}
            <section>
              <h2 className="text-3xl font-bold text-gray-800 mb-6">For Students: Lead the Way!</h2>
              <p className="text-gray-700 mb-6 text-lg">
                Be the first to nominate your school for the GreenPlate Ambassador Program and receive an official GreenPlate Certificate of Nomination. Show your commitment to sustainability and:
              </p>
              <ul className="list-decimal list-inside text-gray-700 space-y-4 mb-6 text-lg">
                <li><span className="font-bold">Be Recognized as a Leader:</span> Your nomination could be the first step in earning your school the Gold Standard in Sustainability.</li>
                <li><span className="font-bold">Get Your School Involved:</span> Help kickstart real changes in your cafeteria's dining practices.</li>
                <li><span className="font-bold">Receive Your Certificate:</span> Proudly display your GreenPlate Certificate as proof of your leadership and advocacy.</li>
              </ul>
            </section>

            {/* Administrators Column */}
            <section>
              <h2 className="text-3xl font-bold text-gray-800 mb-6">For Administrators: Take the Lead!</h2>
              <p className="text-gray-700 mb-6 text-lg">
                Be the first administrator to apply for the GreenPlate Initiative and earn a GreenPlate Certificate of Leadership in Sustainability. Show your school's dedication to healthier, ethical dining and:
              </p>
              <ul className="list-decimal list-inside text-gray-700 space-y-4 mb-6 text-lg">
                <li><span className="font-bold">Receive Your Certificate:</span> Your school will be among the first recognized for its commitment to sustainability.</li>
                <li><span className="font-bold">Set a New Standard:</span> Lead the way for other schools in achieving sustainable dining excellence.</li>
                <li><span className="font-bold">Showcase Your Dedication:</span> Use your certificate to highlight your school's forward-thinking approach to dining services.</li>
              </ul>
            </section>
          </div>

          {/* Single Call-to-Action Button */}
          <div className="text-center mb-12">
            <Link to="/get-involved">
              <Button variant="secondary" size="lg" className="text-lg">
                Start Now
              </Button>
            </Link>
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