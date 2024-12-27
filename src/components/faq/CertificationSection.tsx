import {
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export const CertificationSection = () => {
  return (
    <AccordionItem value="certification">
      <AccordionTrigger className="text-xl font-semibold">3. Certification and Recognition</AccordionTrigger>
      <AccordionContent className="space-y-4">
        <div>
          <h4 className="font-semibold">How will our certification be displayed?</h4>
          <p>Certified schools receive a physical certificate for display. High-performing schools may also be featured on our website and social media.</p>
        </div>
        <div>
          <h4 className="font-semibold">How often do we need to renew our certification?</h4>
          <p>Certification is valid for one year. Schools can reapply annually or after significant menu updates.</p>
        </div>
        <div>
          <h4 className="font-semibold">Can we share our certification publicly?</h4>
          <p>Yes! Schools are encouraged to share their achievement on their website, newsletters, and social media.</p>
        </div>
      </AccordionContent>
    </AccordionItem>
  );
};