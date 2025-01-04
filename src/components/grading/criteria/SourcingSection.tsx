import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";
import { ChevronRight } from "lucide-react";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";

interface SourcingSectionProps {
  isOpen: boolean;
  onToggle: () => void;
}

const SourcingSection = ({ isOpen, onToggle }: SourcingSectionProps) => {
  return (
    <Collapsible open={isOpen} onOpenChange={onToggle} className="w-full">
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
          <ChevronRight className={`transform transition-transform ${isOpen ? 'rotate-90' : ''}`} />
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
                <TooltipTrigger className="text-left">
                  <span className="font-bold">Food is From Ethical Practices</span> (1 point)
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
  );
};

export default SourcingSection;