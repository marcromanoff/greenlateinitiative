import {
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export const SubmissionSection = () => {
  return (
    <AccordionItem value="submission">
      <AccordionTrigger className="text-xl font-semibold">2. Submission Process</AccordionTrigger>
      <AccordionContent className="space-y-4">
        <div>
          <h4 className="font-semibold">How do we submit our menu for evaluation?</h4>
          <p>You can submit your menu through the online submission form, which can be done through the get involved section.</p>
        </div>
        <div>
          <h4 className="font-semibold">What if we don't have some of the required information?</h4>
          <p>While complete information is ideal, partial submissions will be evaluated. We encourage you to provide as much detail as possible to maximize your score.</p>
        </div>
        <div>
          <h4 className="font-semibold">How long does the evaluation process take?</h4>
          <p>The evaluation typically takes 1 week to complete.</p>
        </div>
        <div>
          <h4 className="font-semibold">Can we submit multiple times?</h4>
          <p>Yes, schools are welcome to submit updated menus or resubmit after implementing improvements.</p>
        </div>
      </AccordionContent>
    </AccordionItem>
  );
};