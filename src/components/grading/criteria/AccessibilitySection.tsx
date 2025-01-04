import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";
import { ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";

interface AccessibilitySectionProps {
  isOpen: boolean;
  onToggle: () => void;
}

const AccessibilitySection = ({ isOpen, onToggle }: AccessibilitySectionProps) => {
  return (
    <Collapsible open={isOpen} onOpenChange={onToggle} className="w-full">
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
          <ChevronRight className={`transform transition-transform ${isOpen ? 'rotate-90' : ''}`} />
        </CollapsibleTrigger>
        <CollapsibleContent className="mt-4">
          <ul className="list-disc pl-6 space-y-2">
            <li>
              <Link to="/definitions" className="text-primary font-bold hover:text-primary/80">
                Clear Labeling
              </Link> (2 points)
            </li>
            <li>Student-Accessible Ingredient Lists Online with Dietary Information: 1 point</li>
          </ul>
        </CollapsibleContent>
      </div>
    </Collapsible>
  );
};

export default AccessibilitySection;