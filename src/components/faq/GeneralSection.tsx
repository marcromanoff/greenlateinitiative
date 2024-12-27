import { AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

export const GeneralSection = () => {
  return (
    <AccordionItem value="general">
      <AccordionTrigger className="text-xl font-semibold">1. General Questions</AccordionTrigger>
      <AccordionContent className="space-y-4">
        <div>
          <h4 className="font-semibold">What is the GreenPlate Certification?</h4>
          <p>The GreenPlate Certification is a program that evaluates school meal programs based on four key categories: Variety & Inclusivity, Sourcing & Sustainability, Nutritional Value, and Accessibility & Labeling. Schools are awarded points in various categories with the goal of promoting healthier, environmentally-friendly meals for students.</p>
        </div>
        <div>
          <h4 className="font-semibold">Why should our school participate?</h4>
          <p>Participating helps improve your meal program, promotes sustainability, and ensures inclusivity for students with dietary restrictions. Schools can also receive recognition for achieving high standards, boosting their reputation.</p>
        </div>
        <div>
          <h4 className="font-semibold">Is there a fee to participate?</h4>
          <p>No, participation in the GreenPlate Certification program is free.</p>
        </div>
      </AccordionContent>
    </AccordionItem>
  );
};