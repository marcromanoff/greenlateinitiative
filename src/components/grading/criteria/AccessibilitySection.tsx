import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { ChevronRight } from "lucide-react";

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
              <Dialog>
                <DialogTrigger className="text-left">
                  <span className="font-bold text-primary hover:text-primary/80">Clear Labeling</span> (2 points)
                </DialogTrigger>
                <DialogContent className="bg-white p-8 relative max-w-2xl mx-auto font-sans">
                  <div className="text-center">
                    <h3 className="font-semibold text-xl mb-4">Menu items are considered clearly labeled if:</h3>
                    <ol className="list-decimal text-left space-y-4 mx-auto max-w-xl">
                      <li>
                        Dietary Icons/Text Are Present:
                        <ul className="list-disc pl-6 mt-2">
                          <li>Vegetarian (V), Vegan (VG), Gluten-Free (GF), and major allergen warnings</li>
                          <li>Labels must appear directly next to menu items or at point of service</li>
                        </ul>
                      </li>
                      <li>
                        Icon Placement Standards:
                        <ul className="list-disc pl-6 mt-2">
                          <li>Online: Visible on digital menu, no more than one click away</li>
                          <li>Printed: Included alongside menu descriptions at dining stations</li>
                        </ul>
                      </li>
                      <li>
                        Consistency Across Platforms:
                        <ul className="list-disc pl-6 mt-2">
                          <li>Labels should match across all platforms (on-site, app, and website)</li>
                        </ul>
                      </li>
                    </ol>
                  </div>
                </DialogContent>
              </Dialog>
            </li>
            <li>Student-Accessible Ingredient Lists Online with Dietary Information: 1 point</li>
          </ul>
        </CollapsibleContent>
      </div>
    </Collapsible>
  );
};

export default AccessibilitySection;