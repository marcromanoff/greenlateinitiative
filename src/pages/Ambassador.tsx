import Navigation from "../components/Navigation";
import { Link } from "react-router-dom";

const Ambassador = () => {
  return (
    <div className="min-h-screen bg-green-50">
      <Navigation />
      
      <main className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto space-y-12">
          {/* Students Section */}
          <section className="bg-white rounded-lg p-8 shadow-lg">
            <h2 className="text-3xl font-bold text-primary mb-6">For Students: Lead the Way!</h2>
            <p className="text-lg mb-6">
              Be the first to nominate your school for the GreenPlate Ambassador Program and receive an official GreenPlate Certificate of Nomination. Show your commitment to sustainability and:
            </p>
            <ul className="list-decimal pl-6 space-y-4 mb-8">
              <li className="text-lg">Be Recognized as a Leader: Your nomination could be the first step in earning your school the Gold Standard in Sustainability.</li>
              <li className="text-lg">Get Your School Involved: Help kickstart real changes in your cafeteria's dining practices.</li>
              <li className="text-lg">Receive Your Certificate: Proudly display your GreenPlate Certificate as proof of your leadership and advocacy.</li>
            </ul>
            <div className="text-center">
              <Link 
                to="/get-involved"
                className="inline-block bg-primary text-white px-8 py-3 rounded-lg font-semibold hover:bg-primary/90 transition-all duration-300 transform hover:scale-105"
              >
                Why Wait? Start Now!
              </Link>
            </div>
          </section>

          {/* Administrators Section */}
          <section className="bg-white rounded-lg p-8 shadow-lg">
            <h2 className="text-3xl font-bold text-primary mb-6">For Administrators: Take the Lead!</h2>
            <p className="text-lg mb-6">
              Be the first administrator to apply for the GreenPlate Initiative and earn a GreenPlate Certificate of Leadership in Sustainability. Show your school's dedication to healthier, ethical dining and:
            </p>
            <ul className="list-decimal pl-6 space-y-4 mb-8">
              <li className="text-lg">Receive Your Certificate: Your school will be among the first recognized for its commitment to sustainability.</li>
              <li className="text-lg">Set a New Standard: Lead the way for other schools in achieving sustainable dining excellence.</li>
              <li className="text-lg">Showcase Your Dedication: Use your certificate to highlight your school's forward-thinking approach to dining services.</li>
            </ul>
            <div className="text-center">
              <Link 
                to="/get-involved"
                className="inline-block bg-primary text-white px-8 py-3 rounded-lg font-semibold hover:bg-primary/90 transition-all duration-300 transform hover:scale-105"
              >
                Start Today!
              </Link>
            </div>
          </section>

          {/* Exclusive Perks Section */}
          <section className="bg-white rounded-lg p-8 shadow-lg">
            <h2 className="text-3xl font-bold text-primary mb-6">First Applicants Receive Exclusive Perks:</h2>
            <ul className="list-disc pl-6 space-y-4 mb-8">
              <li className="text-lg">Official Certificate of Nomination.</li>
              <li className="text-lg">Early access to GreenPlate resources and tools.</li>
              <li className="text-lg">Recognition as a trailblazer in sustainability.</li>
            </ul>
            <div className="text-center">
              <Link 
                to="/get-involved"
                className="inline-block bg-primary text-white px-8 py-3 rounded-lg font-semibold hover:bg-primary/90 transition-all duration-300 transform hover:scale-105"
              >
                Don't wait—be the first to apply!
              </Link>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
};

export default Ambassador;