import Navigation from "../components/Navigation";
import ScrollingFact from "../components/ScrollingFact";

const Grading = () => {
  return (
    <div className="min-h-screen bg-lightgreen-100">
      <Navigation />
      
      <main className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold mb-8 text-primary">Grading System</h1>
          
          <div className="space-y-8">
            <section className="relative">
              <div className="flex items-center gap-2">
                <div className="flex-grow">
                  <h2 className="text-2xl font-semibold mb-4">1. Variety & Inclusivity (6 points)</h2>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>Vegetarian Alternative Main Entrée to Entrée: 4 points</li>
                    <li>Vegan Alternative Main Entrée to Entrée: 1 point</li>
                    <li>Gluten Free Alternative Main Entrée to Entrée: 1 point</li>
                  </ul>
                </div>
                <div className="flex items-center justify-center w-32 bg-transparent">
                  <img 
                    src="/lovable-uploads/2ad329d2-6a64-4531-856e-26f6e5488bb5.png" 
                    alt="Variety & Inclusivity Logo" 
                    className="w-32 h-32 object-contain"
                  />
                </div>
              </div>
            </section>

            <section className="relative bg-lightgreen-200 rounded-lg p-6">
              <div className="flex items-center gap-2">
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
                <div className="flex items-center justify-center w-32 bg-transparent">
                  <img 
                    src="/lovable-uploads/dc0ebfe2-3cf3-4ff0-b16b-277f477ace55.png" 
                    alt="Nutritional Value Logo" 
                    className="w-32 h-32 object-contain"
                  />
                </div>
              </div>
            </section>

            <section className="relative">
              <div className="flex items-center gap-2">
                <div className="flex-grow">
                  <h2 className="text-2xl font-semibold mb-4">3. Accessibility & Labeling (3 points)</h2>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>Clear Labeling of Dietary Options: 2 points</li>
                    <li>Student-Accessible Ingredient Lists Online with Dietary Information: 1 point</li>
                  </ul>
                </div>
                <div className="flex items-center justify-center w-32 bg-transparent">
                  <img 
                    src="/lovable-uploads/f3020dd2-574d-4dab-83b3-c23c8d2d756e.png" 
                    alt="Accessibility & Labeling Logo" 
                    className="w-32 h-32 object-contain"
                  />
                </div>
              </div>
            </section>

            <section className="relative bg-lightgreen-200 rounded-lg p-6">
              <div className="flex items-center gap-2">
                <div className="flex-grow">
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
                </div>
                <div className="flex items-center justify-center w-32 bg-transparent">
                  <img 
                    src="/lovable-uploads/14777aef-ae1e-4f50-8161-c0f7c05288c3.png" 
                    alt="Sourcing & Sustainability Logo" 
                    className="w-32 h-32 object-contain"
                  />
                </div>
              </div>
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