import { useState } from "react";
import { TooltipProvider } from "@/components/ui/tooltip";
import VarietySection from "./criteria/VarietySection";
import NutritionSection from "./criteria/NutritionSection";
import AccessibilitySection from "./criteria/AccessibilitySection";
import SourcingSection from "./criteria/SourcingSection";

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
        <VarietySection 
          isOpen={openCategories['variety']} 
          onToggle={() => toggleCategory('variety')} 
        />
        <NutritionSection 
          isOpen={openCategories['nutrition']} 
          onToggle={() => toggleCategory('nutrition')} 
        />
        <AccessibilitySection 
          isOpen={openCategories['accessibility']} 
          onToggle={() => toggleCategory('accessibility')} 
        />
        <SourcingSection 
          isOpen={openCategories['sourcing']} 
          onToggle={() => toggleCategory('sourcing')} 
        />
      </div>
    </TooltipProvider>
  );
};

export default GradingCriteria;