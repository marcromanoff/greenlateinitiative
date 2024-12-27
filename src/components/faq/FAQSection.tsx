import {
  Accordion,
} from "@/components/ui/accordion";
import FAQItem from "./FAQItem";

const FAQSection = () => {
  return (
    <Accordion type="single" collapsible className="w-full space-y-4">
      <FAQItem title="1. Submission Process" value="submission">
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
      </FAQItem>

      <FAQItem title="2. Certification and Recognition" value="certification">
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
      </FAQItem>
    </Accordion>
  );
};

export default FAQSection;