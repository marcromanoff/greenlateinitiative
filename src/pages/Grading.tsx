import Navigation from "../components/Navigation";
import ScrollingFact from "../components/ScrollingFact";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";
import { useState } from "react";
import { ChevronRight } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const Grading = () => {
  const [openCategories, setOpenCategories] = useState<Record<string, boolean>>({});

  const toggleCategory = (category: string) => {
    setOpenCategories(prev => ({
      ...prev,
      [category]: !prev[category]
    }));
  };

  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      
      <main className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold mb-8 text-primary">Grading System</h1>
          
          <Card className="mb-8">
            <CardContent className="p-6">
              <h2 className="text-2xl font-semibold mb-4">Grading Scale</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="bg-green-50 p-4 rounded-lg">
                  <p className="font-semibold text-green-800">100%: Gold Standard</p>
                  <p className="text-sm text-gray-600">A perfect score</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <p className="font-semibold text-gray-800">90%–99%: Silver Medal</p>
                  <p className="text-sm text-gray-600">Outstanding achievement</p>
                </div>
                <div className="bg-orange-50 p-4 rounded-lg">
                  <p className="font-semibold text-orange-800">80%–89%: Bronze Medal</p>
                  <p className="text-sm text-gray-600">Excellent progress</p>
                </div>
                <div className="bg-blue-50 p-4 rounded-lg">
                  <p className="font-semibold text-blue-800">Below 80%: Keep Up the Good Work</p>
                  <p className="text-sm text-gray-600">Room for improvement</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <p className="text-lg mb-8">
            We will evaluate each day individually based on the specific criteria below. 
            Each day on the school week menu (i.e., 5 school days) is worth 20 points. 
            Your grade is determined by adding the scores from all 5 days together.
          </p>

          <div className="space-y-6">
            {/* Variety & Inclusivity Section */}
            <Collapsible 
              open={openCategories['variety']} 
              onOpenChange={() => toggleCategory('variety')}
              className="w-full"
            >
              <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
                <CollapsibleTrigger className="flex items-center justify-between w-full">
                  <div className="flex items-center gap-4">
                    <img 
                      src="/lovable-uploads/2ad329d2-6a64-4531-856e-26f6e5488bb5.png" 
                      alt="Variety & Inclusivity Logo" 
                      className="w-16 h-16 object-contain"
                    />
                    <h2 className="text-2xl font-semibold">1. Variety & Inclusivity (6 points)</h2>
                  </div>
                  <ChevronRight className={`transform transition-transform ${openCategories['variety'] ? 'rotate-90' : ''}`} />
                </CollapsibleTrigger>
                <CollapsibleContent className="mt-4">
                  <ul className="list-disc pl-6 space-y-2">
                    <li>Vegetarian Alternative Main Entrée to Entrée: 4 points</li>
                    <li>Vegan Alternative Main Entrée to Entrée: 1 point</li>
                    <li>Gluten Free Alternative Main Entrée to Entrée: 1 point</li>
                  </ul>
                </CollapsibleContent>
              </div>
            </Collapsible>

            {/* Nutritional Value Section */}
            <Collapsible 
              open={openCategories['nutrition']} 
              onOpenChange={() => toggleCategory('nutrition')}
              className="w-full"
            >
              <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
                <CollapsibleTrigger className="flex items-center justify-between w-full">
                  <div className="flex items-center gap-4">
                    <img 
                      src="/lovable-uploads/dc0ebfe2-3cf3-4ff0-b16b-277f477ace55.png" 
                      alt="Nutritional Value Logo" 
                      className="w-16 h-16 object-contain"
                    />
                    <h2 className="text-2xl font-semibold">2. Nutritional Value (7 points)</h2>
                  </div>
                  <ChevronRight className={`transform transition-transform ${openCategories['nutrition'] ? 'rotate-90' : ''}`} />
                </CollapsibleTrigger>
                <CollapsibleContent className="mt-4">
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
                </CollapsibleContent>
              </div>
            </Collapsible>

            {/* Accessibility & Labeling Section */}
            <Collapsible 
              open={openCategories['accessibility']} 
              onOpenChange={() => toggleCategory('accessibility')}
              className="w-full"
            >
              <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
                <CollapsibleTrigger className="flex items-center justify-between w-full">
                  <div className="flex items-center gap-4">
                    <img 
                      src="/lovable-uploads/f3020dd2-574d-4dab-83b3-c23c8d2d756e.png" 
                      alt="Accessibility & Labeling Logo" 
                      className="w-16 h-16 object-contain"
                    />
                    <h2 className="text-2xl font-semibold">3. Accessibility & Labeling (3 points)</h2>
                  </div>
                  <ChevronRight className={`transform transition-transform ${openCategories['accessibility'] ? 'rotate-90' : ''}`} />
                </CollapsibleTrigger>
                <CollapsibleContent className="mt-4">
                  <ul className="list-disc pl-6 space-y-2">
                    <li>Clear Labeling of Dietary Options: 2 points</li>
                    <li>Student-Accessible Ingredient Lists Online with Dietary Information: 1 point</li>
                  </ul>
                </CollapsibleContent>
              </div>
            </Collapsible>

            {/* Sourcing & Sustainability Section */}
            <Collapsible 
              open={openCategories['sourcing']} 
              onOpenChange={() => toggleCategory('sourcing')}
              className="w-full"
            >
              <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
                <CollapsibleTrigger className="flex items-center justify-between w-full">
                  <div className="flex items-center gap-4">
                    <img 
                      src="/lovable-uploads/14777aef-ae1e-4f50-8161-c0f7c05288c3.png" 
                      alt="Sourcing & Sustainability Logo" 
                      className="w-16 h-16 object-contain"
                    />
                    <h2 className="text-2xl font-semibold">4. Sourcing & Sustainability (4 points)</h2>
                  </div>
                  <ChevronRight className={`transform transition-transform ${openCategories['sourcing'] ? 'rotate-90' : ''}`} />
                </CollapsibleTrigger>
                <CollapsibleContent className="mt-4">
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
                </CollapsibleContent>
              </div>
            </Collapsible>
          </div>
        </div>

        <ScrollingFact fact="1 in 5 children in the U.S. struggles with obesity, but balanced school meals can significantly reduce this risk. (CDC)" />
        <ScrollingFact fact="5.6 million children in the U.S. have food allergies. Clear labeling ensures they stay safe. (FARE)" />
      </main>
    </div>
  );
};

export default Grading;