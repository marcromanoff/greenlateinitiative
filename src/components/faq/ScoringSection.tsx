import { AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

export const ScoringSection = () => {
  return (
    <AccordionItem value="scoring">
      <AccordionTrigger className="text-xl font-semibold">3. Scoring and Criteria</AccordionTrigger>
      <AccordionContent className="space-y-4">
        <div>
          <h4 className="font-semibold">How is the menu scored?</h4>
          <p>Menus are scored across four categories (see grading) to evaluate inclusivity, sustainability, nutritional value, and labeling.</p>
        </div>
        <div>
          <h4 className="font-semibold">What happens if our school scores low?</h4>
          <p>Schools that score low will receive feedback with actionable recommendations to improve their programs. You can reapply for evaluation once changes are made.</p>
        </div>
      </AccordionContent>
    </AccordionItem>
  );
};