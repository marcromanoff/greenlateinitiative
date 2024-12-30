import Navigation from "../components/Navigation";
import ScrollingFact from "../components/ScrollingFact";
import { Link } from "react-router-dom";

const WhatIsGreenPlate = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-green-50">
      <Navigation />
      
      <main className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl font-bold mb-12 text-primary text-center animate-fade-in">
            What is GreenPlate?
          </h1>
          
          <div className="space-y-8">
            <section className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 border border-green-100">
              <h2 className="text-2xl font-semibold mb-4 text-primary">Our Initiative</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                The GreenPlate Initiative is a structured grading system that evaluates schools' sustainability. 
                We grade using completely objective criteria and information provided by schools and GreenPlate ambassadors. 
                We assess schools based on four key categories:
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
                {[
                  "Variety & Inclusivity",
                  "Sourcing & Sustainability",
                  "Nutritional Value",
                  "Accessibility & Labeling"
                ].map((category, index) => (
                  <Link 
                    to="/grading" 
                    key={index}
                    className="bg-green-50 p-4 rounded-lg border border-green-200 text-primary font-medium text-center hover:bg-green-100 transition-colors"
                  >
                    {category}
                  </Link>
                ))}
              </div>
            </section>

            <section className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 border border-green-100">
              <h2 className="text-2xl font-semibold mb-4 text-primary">Recognition System</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Schools can earn <Link to="/awards" className="text-amber-600 hover:text-amber-700 font-semibold">Gold</Link>, 
                <Link to="/awards" className="text-gray-500 hover:text-gray-600 font-semibold"> Silver</Link>, or 
                <Link to="/awards" className="text-orange-600 hover:text-orange-700 font-semibold"> Bronze</Link> certification 
                based on their commitment to sustainable dining practices. These certifications not only recognize schools 
                for their achievements but also serve as a symbol of their commitment to creating a healthier, greener 
                future for students and the planet.
              </p>
              <p className="text-gray-700 leading-relaxed">
                Schools earning certifications are celebrated for their leadership in sustainability and receive tools, 
                resources, and actionable feedback to continue improving their dining programs.
              </p>
            </section>

            <section className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 border border-green-100">
              <h2 className="text-2xl font-semibold mb-4 text-primary">Collaborative Approach</h2>
              <p className="text-gray-700 leading-relaxed">
                The GreenPlate Initiative encourages schools to take pride in their efforts, share their progress 
                with their communities, and inspire others to join the movement. By fostering collaboration between 
                students, administrators, and GreenPlate Ambassadors, we aim to create a nationwide shift toward 
                ethical and sustainable dining standards, one school at a time.
              </p>
            </section>

            <section className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 border border-green-100">
              <h2 className="text-2xl font-semibold mb-4 text-primary">Our Vision</h2>
              <p className="text-gray-700 leading-relaxed">
                Our ultimate goal is to make sustainable dining practices the norm in schools, empowering them to 
                serve meals that are not only nutritious and inclusive but also environmentally responsible. 
                Together, we can build a future where every school cafeteria embodies the principles of health, 
                sustainability, and inclusivity.
              </p>
            </section>
          </div>
        </div>

        <ScrollingFact fact="Schools with sustainable dining programs see a 45% increase in student participation in environmental initiatives." />
      </main>
    </div>
  );
};

export default WhatIsGreenPlate;