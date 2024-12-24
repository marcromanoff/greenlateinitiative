import Navigation from "../components/Navigation";
import ScrollingFact from "../components/ScrollingFact";

const Awards = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      
      <main className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold mb-8 text-primary">Awards & Recognition</h1>
          
          <div className="space-y-8">
            <section>
              <h2 className="text-2xl font-semibold mb-4">Gold Standard Recognition</h2>
              <p className="text-gray-600 mb-4">
                Schools that achieve a perfect score of 100 receive our prestigious Gold Standard recognition,
                demonstrating exceptional commitment to sustainable dining practices.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">Achievement Levels</h2>
              <div className="grid gap-6 md:grid-cols-2">
                <div className="p-6 bg-gray-50 rounded-lg">
                  <h3 className="text-xl font-semibold mb-2">Excellence Award</h3>
                  <p className="text-gray-600">Score: 90-99</p>
                  <p className="text-gray-600 mt-2">
                    Recognition for schools demonstrating outstanding commitment to sustainable dining practices.
                  </p>
                </div>
                <div className="p-6 bg-gray-50 rounded-lg">
                  <h3 className="text-xl font-semibold mb-2">Innovation Award</h3>
                  <p className="text-gray-600">Score: 80-89</p>
                  <p className="text-gray-600 mt-2">
                    Celebrating schools that implement creative solutions for sustainable dining.
                  </p>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">Special Recognition</h2>
              <ul className="list-disc pl-6 space-y-2 text-gray-600">
                <li>Most Improved School of the Year</li>
                <li>Best Community Engagement</li>
                <li>Innovative Menu Design</li>
                <li>Outstanding Waste Reduction</li>
              </ul>
            </section>
          </div>
        </div>

        <ScrollingFact fact="Schools with sustainable dining programs see a 45% increase in student participation in environmental initiatives." />
      </main>
    </div>
  );
};

export default Awards;