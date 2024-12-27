import { AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

export const SupportSection = () => {
  return (
    <AccordionItem value="support">
      <AccordionTrigger className="text-xl font-semibold">7. Support and Contact</AccordionTrigger>
      <AccordionContent className="space-y-4">
        <div>
          <h4 className="font-semibold">Who can we contact for help during the submission process?</h4>
          <p>Our support team is available via email at greenplateinitiative@gmail.com.</p>
        </div>
        <div>
          <h4 className="font-semibold">Can we suggest changes to the program?</h4>
          <p>Absolutely! We welcome feedback and suggestions to improve the GreenPlate Certification program. Just email greenplateinitiative@gmail.com for a timely response.</p>
        </div>
      </AccordionContent>
    </AccordionItem>
  );
};