import Navigation from "../components/Navigation";
import ScrollingFact from "../components/ScrollingFact";

const Grading = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      
      <main className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold mb-8 text-primary">Grading System</h1>
          
          <p className="text-lg mb-8">
            We will evaluate each day individually based on the specific criteria below. 
            Each day on the school week menu (i.e., 5 school days) is worth 20 points. 
            Your grade is determined by adding the scores from all 5 days together.
          </p>

          <div className="space-y-8">
            <section className="relative">
              <div className="flex items-start gap-4">
                <div className="flex-grow">
                  <h2 className="text-2xl font-semibold mb-4">1. Variety & Inclusivity (6 points)</h2>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>Vegetarian Alternative Main Entrée to Entrée: 4 points</li>
                    <li>Vegan Alternative Main Entrée to Entrée: 1 point</li>
                    <li>Gluten Free Alternative Main Entrée to Entrée: 1 point</li>
                  </ul>
                </div>
                <img 
                  src="/lovable-uploads/2ad329d2-6a64-4531-856e-26f6e5488bb5.png" 
                  alt="Variety & Inclusivity Logo" 
                  className="w-24 h-24 object-contain"
                />
              </div>
            </section>

            <section className="relative">
              <div className="flex items-start gap-4">
                <div className="flex-grow">
                  <h2 className="text-2xl font-semibold mb-4">2. Nutritional Value (7 points)</h2>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>Nutritional Information Readily Available</li>
                    <li>Salad Bar that Includes Fresh Fruits, Vegetables, and Legumes:
                      <ul className="list-circle pl-6 mt-2">
                        <li>Fruits: 2 points</li>
                        <li>Vegetables: 2 points</li>
                        <li>Legumes: 2 points</li>
                      </ul>
                    </li>
                  </ul>
                </div>
                <img 
                  src="/lovable-uploads/dc0ebfe2-3cf3-4ff0-b16b-277f477ace55.png" 
                  alt="Nutritional Value Logo" 
                  className="w-24 h-24 object-contain"
                />
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">3. Accessibility & Labeling (3 points)</h2>
              <ul className="list-disc pl-6 space-y-2">
                <li>Clear Labeling of Dietary Options: 2 points</li>
                <li>Student-Accessible Ingredient Lists Online with Dietary Information: 1 point</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">4. Sourcing & Sustainability (4 points)</h2>
              <ul className="list-disc pl-6 space-y-2">
                <li>Offers Fresh Fruits Daily: 2 points
                  <ul className="list-circle pl-6 mt-2">
                    <li>1 point for availability of fresh fruits daily</li>
                    <li>1 point if the fresh fruits are organic</li>
                  </ul>
                </li>
                <li>Has Washable and/or Compostable Silverware and Dishes: 1 point</li>
                <li>Food is From Ethical Practices: 1 point</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">Final Grade</h2>
              <ul className="list-none space-y-2">
                <li>100: GOLD STANDARD/PERFECT SCORE</li>
                <li>95–99: A++</li>
                <li>90–94: Exceeds Expectations</li>
                <li>80–89: Excellent</li>
                <li>66–79: Meets Expectations</li>
                <li>60–65: Approaching Expectations</li>
                <li>Below 60: Needs Improvement</li>
              </ul>
            </section>
          </div>
        </div>

        <ScrollingFact fact="1 in 5 children in the U.S. struggles with obesity, but balanced school meals can significantly reduce this risk. (CDC)" />
        <ScrollingFact fact="5.6 million children in the U.S. have food allergies. Clear labeling ensures they stay safe. (FARE)" />
      </main>
    </div>
  );
};

export default Grading;
