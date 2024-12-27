import { AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

export const DietarySection = () => {
  return (
    <AccordionItem value="dietary">
      <AccordionTrigger className="text-xl font-semibold">4. Dietary Labels and Ingredient Lists</AccordionTrigger>
      <AccordionContent className="space-y-4">
        <div>
          <h4 className="font-semibold">What dietary labels are required?</h4>
          <p>Labels for vegan, vegetarian, gluten-free options, and common allergens (nuts, dairy, shellfish, etc.) are required.</p>
        </div>
        <div>
          <h4 className="font-semibold">Do we need to make ingredient lists available online?</h4>
          <p>Providing detailed ingredient lists online is highly encouraged and awards points during evaluation.</p>
        </div>
      </AccordionContent>
    </AccordionItem>
  );
};