import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";
import { ChevronRight } from "lucide-react";
import { useState } from "react";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";

const GradingCriteria = () => {
  const [openCategories, setOpenCategories] = useState<Record<string, boolean>>({});

  const toggleCategory = (category: string) => {
    setOpenCategories(prev => ({
      ...prev,
      [category]: !prev[category]
    }));
  };

  return (
    <TooltipProvider>
      <div className="space-y-6">
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
                <li>
                  <Tooltip>
                    <TooltipTrigger className="text-left underline decoration-dotted">
                      Nutritional Information Readily Available (1 point)
                    </TooltipTrigger>
                    <TooltipContent className="max-w-sm p-4">
                      <h3 className="font-semibold mb-2">Nutritional information is considered readily available if it is:</h3>
                      <ol className="list-decimal pl-4 space-y-2">
                        <li>
                          Displayed Consistently:
                          <ul className="list-disc pl-4 mt-1">
                            <li>On-site (menu boards or cafeteria screens)</li>
                            <li>Online (school dining website or mobile app)</li>
                            <li>On printed menus at dining stations</li>
                          </ul>
                        </li>
                        <li>
                          Includes Key Details:
                          <ul className="list-disc pl-4 mt-1">
                            <li>Caloric content</li>
                            <li>Macronutrient breakdown (protein, carbs, fats)</li>
                            <li>Allergen details (e.g., nuts, dairy, gluten)</li>
                          </ul>
                        </li>
                      </ol>
                    </TooltipContent>
                  </Tooltip>
                </li>
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
                <li>
                  <Tooltip>
                    <TooltipTrigger className="text-left underline decoration-dotted">
                      Clear Labeling of Dietary Options: 2 points
                    </TooltipTrigger>
                    <TooltipContent className="max-w-sm p-4">
                      <h3 className="font-semibold mb-2">Menu items are considered clearly labeled if:</h3>
                      <ol className="list-decimal pl-4 space-y-2">
                        <li>
                          Dietary Icons/Text Are Present:
                          <ul className="list-disc pl-4 mt-1">
                            <li>Vegetarian (V), Vegan (VG), Gluten-Free (GF), and major allergen warnings</li>
                            <li>Labels must appear directly next to menu items or at point of service</li>
                          </ul>
                        </li>
                        <li>
                          Icon Placement Standards:
                          <ul className="list-disc pl-4 mt-1">
                            <li>Online: Visible on digital menu, no more than one click away</li>
                            <li>Printed: Included alongside menu descriptions at dining stations</li>
                          </ul>
                        </li>
                        <li>
                          Consistency Across Platforms:
                          <ul className="list-disc pl-4 mt-1">
                            <li>Labels should match across all platforms (on-site, app, and website)</li>
                          </ul>
                        </li>
                      </ol>
                    </TooltipContent>
                  </Tooltip>
                </li>
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
                <li>
                  <Tooltip>
                    <TooltipTrigger className="text-left underline decoration-dotted">
                      Food is From Ethical Practices: 1 point
                    </TooltipTrigger>
                    <TooltipContent className="max-w-sm p-4">
                      <h3 className="font-semibold mb-2">Ethical practices include:</h3>
                      <ul className="list-disc pl-4 space-y-2">
                        <li>Cage-Free, Certified Humane® Eggs: All eggs are cage-free and certified by recognized organizations such as Certified Humane® or GAP Level 3+</li>
                        <li>Hormone-Free Milk: All milk is hormone-free, with suppliers providing clear documentation</li>
                        <li>Grass-Fed or Pasture-Raised Meats: Meat is sourced from animals raised on grass or pasture, meeting humane standards</li>
                      </ul>
                    </TooltipContent>
                  </Tooltip>
                </li>
              </ul>
            </CollapsibleContent>
          </div>
        </Collapsible>
      </div>
    </TooltipProvider>
  );
};

export default GradingCriteria;
