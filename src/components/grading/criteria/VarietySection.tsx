import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";
import { ChevronRight } from "lucide-react";

interface VarietySectionProps {
  isOpen: boolean;
  onToggle: () => void;
}

const VarietySection = ({ isOpen, onToggle }: VarietySectionProps) => {
  return (
    <Collapsible open={isOpen} onOpenChange={onToggle} className="w-full">
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
          <ChevronRight className={`transform transition-transform ${isOpen ? 'rotate-90' : ''}`} />
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
  );
};

export default VarietySection;