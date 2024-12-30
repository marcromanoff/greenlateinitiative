import Navigation from "../components/Navigation";
import ScrollingFact from "../components/ScrollingFact";

const WhatIsGreenPlate = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      
      <main className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold mb-8 text-primary">What is GreenPlate?</h1>
          
          <div className="space-y-8">
            <section className="bg-white p-8 rounded-lg shadow-md">
              <h2 className="text-2xl font-semibold mb-4">Our Mission</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                GreenPlate is a pioneering initiative that evaluates and certifies school dining programs based on their commitment to sustainability, health, and inclusivity. Our mission is to transform school cafeterias into environmentally conscious spaces that serve nutritious, inclusive meals while minimizing their environmental impact.
              </p>
              <p className="text-gray-700 leading-relaxed">
                Founded by Ari Romanoff, an eighth-grade student at Newark Academy, GreenPlate aims to create transparency and accountability in school dining services while promoting sustainable practices.
              </p>
            </section>

            <section className="bg-white p-8 rounded-lg shadow-md">
              <h2 className="text-2xl font-semibold mb-4">Our Approach</h2>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h3 className="text-xl font-medium mb-3 text-primary">Comprehensive Evaluation</h3>
                  <p className="text-gray-700">
                    We assess schools based on four key categories: Variety & Inclusivity, Sourcing & Sustainability, Nutritional Value, and Accessibility & Labeling.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-medium mb-3 text-primary">Recognition System</h3>
                  <p className="text-gray-700">
                    Schools can earn Gold, Silver, or Bronze certification based on their commitment to sustainable dining practices.
                  </p>
                </div>
              </div>
            </section>

            <section className="bg-white p-8 rounded-lg shadow-md">
              <h2 className="text-2xl font-semibold mb-4">Why It Matters</h2>
              <ul className="space-y-4">
                <li className="flex items-start space-x-3">
                  <span className="text-primary mt-1">•</span>
                  <p className="text-gray-700">Promotes environmental sustainability in school dining services</p>
                </li>
                <li className="flex items-start space-x-3">
                  <span className="text-primary mt-1">•</span>
                  <p className="text-gray-700">Ensures inclusive dining options for all dietary needs</p>
                </li>
                <li className="flex items-start space-x-3">
                  <span className="text-primary mt-1">•</span>
                  <p className="text-gray-700">Encourages the use of locally-sourced, nutritious ingredients</p>
                </li>
                <li className="flex items-start space-x-3">
                  <span className="text-primary mt-1">•</span>
                  <p className="text-gray-700">Creates transparency in school food service operations</p>
                </li>
              </ul>
            </section>
          </div>
        </div>

        <ScrollingFact fact="Schools with sustainable dining programs see a 45% increase in student participation in environmental initiatives." />
      </main>
    </div>
  );
};

export default WhatIsGreenPlate;