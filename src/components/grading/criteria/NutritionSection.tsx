import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { ChevronRight, X } from "lucide-react";

interface NutritionSectionProps {
  isOpen: boolean;
  onToggle: () => void;
}

const NutritionSection = ({ isOpen, onToggle }: NutritionSectionProps) => {
  return (
    <Collapsible open={isOpen} onOpenChange={onToggle} className="w-full">
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
          <ChevronRight className={`transform transition-transform ${isOpen ? 'rotate-90' : ''}`} />
        </CollapsibleTrigger>
        <CollapsibleContent className="mt-4">
          <ul className="list-disc pl-6 space-y-2">
            <li>
              <Dialog>
                <DialogTrigger className="text-left">
                  <span className="font-bold text-primary hover:text-primary/80">Readily Available</span> (1 point)
                </DialogTrigger>
                <DialogContent className="bg-white p-8 relative max-w-2xl mx-auto font-sans">
                  <div className="text-center">
                    <h3 className="font-semibold text-xl mb-4">Nutritional information is considered readily available if it is:</h3>
                    <ol className="list-decimal text-left space-y-4 mx-auto max-w-xl">
                      <li>
                        Displayed Consistently:
                        <ul className="list-disc pl-6 mt-2">
                          <li>On-site (menu boards or cafeteria screens)</li>
                          <li>Online (school dining website or mobile app)</li>
                          <li>On printed menus at dining stations</li>
                        </ul>
                      </li>
                      <li>
                        Includes Key Details:
                        <ul className="list-disc pl-6 mt-2">
                          <li>Caloric content</li>
                          <li>Macronutrient breakdown (protein, carbs, fats)</li>
                          <li>Allergen details (e.g., nuts, dairy, gluten)</li>
                        </ul>
                      </li>
                    </ol>
                  </div>
                </DialogContent>
              </Dialog>
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
  );
};

export default NutritionSection;