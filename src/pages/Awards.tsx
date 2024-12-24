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
              <h2 className="text-2xl font-semibold mb-4">Grading Scale & Recognition Levels</h2>
              <div className="bg-gray-50 p-6 rounded-lg">
                <ul className="list-none space-y-2">
                  <li className="text-lg font-semibold text-primary">100: GOLD STANDARD/PERFECT SCORE</li>
                  <li>95–99: A++</li>
                  <li>90–94: Exceeds Expectations</li>
                  <li>80–89: Excellent</li>
                  <li>66–79: Meets Expectations</li>
                  <li>60–65: Approaching Expectations</li>
                  <li>Below 60: Needs Improvement</li>
                </ul>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">Gold Standard Recognition</h2>
              <p className="text-gray-600 mb-4">
                Schools that achieve a perfect score of 100 receive our prestigious Gold Standard recognition,
                demonstrating exceptional commitment to sustainable dining practices.
              </p>
              <img 
                src="/lovable-uploads/8e215b20-4197-411a-800b-c17441f10d0e.png" 
                alt="Green Plate Gold Standard Certificate" 
                className="max-w-sm w-full rounded-lg shadow-lg mx-auto"
              />
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