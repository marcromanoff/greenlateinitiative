import { AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

export const SourcingSection = () => {
  return (
    <AccordionItem value="sourcing">
      <AccordionTrigger className="text-xl font-semibold">5. Sourcing & Sustainability</AccordionTrigger>
      <AccordionContent className="space-y-4">
        <div>
          <h4 className="font-semibold">What qualifies as sustainable utensils?</h4>
          <p>Utensils made from compostable, biodegradable, or reusable materials qualify. Examples include bamboo, PLA (plant-based plastic), and stainless steel.</p>
        </div>
        <div>
          <h4 className="font-semibold">How can we source ethical ingredients?</h4>
          <p>Partner with local farms and look for suppliers offering fair trade or certified organic products.</p>
        </div>
      </AccordionContent>
    </AccordionItem>
  );
};