
import Navigation from "../components/Navigation";
import ScrollingFact from "../components/ScrollingFact";
import { Link } from "react-router-dom";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const Process = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#D3E4FD] via-[#E8F4E2] to-[#F2FCE2]">
      <Navigation />
      
      <main className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold mb-8 text-primary">The Process</h1>
          
          <Accordion type="single" collapsible className="space-y-4">
            <AccordionItem value="step-1" className="border rounded-lg bg-white shadow-sm">
              <AccordionTrigger className="px-4 hover:no-underline">
                <div className="flex gap-4 items-center">
                  <div className="flex-shrink-0 w-12 h-12 bg-primary text-white rounded-full flex items-center justify-center text-xl font-bold">1</div>
                  <h3 className="text-xl font-semibold">Complete a brief form to receive more information</h3>
                </div>
              </AccordionTrigger>
              <AccordionContent className="px-20">
                <p className="text-gray-600">
                  Start your journey towards school lunch sustainability with a simple step. <Link to="/get-involved" className="text-primary hover:text-primary/80 font-semibold">Visit our Get Involved page →</Link>
                </p>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="step-2" className="border rounded-lg bg-white shadow-sm">
              <AccordionTrigger className="px-4 hover:no-underline">
                <div className="flex gap-4 items-center">
                  <div className="flex-shrink-0 w-12 h-12 bg-primary text-white rounded-full flex items-center justify-center text-xl font-bold">2</div>
                  <h3 className="text-xl font-semibold">Complete the Assessment Form</h3>
                </div>
              </AccordionTrigger>
              <AccordionContent className="px-20">
                <p className="text-gray-600">
                  After filling out the Student nomination form or administrator form, you will be sent a short form about your school's dining services. We'll evaluate your school's school lunch sustainability practices and provide a grade. After this, we will reach out to you and your suited administrator. Your school will receive a certificate based on your grade, which can be displayed in the cafeteria to showcase your commitment to school lunch sustainability.
                </p>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="step-3" className="border rounded-lg bg-white shadow-sm">
              <AccordionTrigger className="px-4 hover:no-underline">
                <div className="flex gap-4 items-center">
                  <div className="flex-shrink-0 w-12 h-12 bg-primary text-white rounded-full flex items-center justify-center text-xl font-bold">3</div>
                  <h3 className="text-xl font-semibold">Receive Resources and Guidance</h3>
                </div>
              </AccordionTrigger>
              <AccordionContent className="px-20">
                <p className="text-gray-600">
                  Once the assessment is complete, we'll provide tools and recommendations to help your school align with the GreenPlate grading standards for school lunch sustainability. These resources will guide your efforts to improve school lunch sustainability at your school.
                </p>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="step-4" className="border rounded-lg bg-white shadow-sm">
              <AccordionTrigger className="px-4 hover:no-underline">
                <div className="flex gap-4 items-center">
                  <div className="flex-shrink-0 w-12 h-12 bg-primary text-white rounded-full flex items-center justify-center text-xl font-bold">4</div>
                  <h3 className="text-xl font-semibold">Re-submit for Improvement</h3>
                </div>
              </AccordionTrigger>
              <AccordionContent className="px-20">
                <p className="text-gray-600">
                  If your school's grade leaves room for improvement, don't worry! You'll have the opportunity to make updates, implement the recommendations, and re-submit the form for a new evaluation. This ensures your school has every chance to achieve excellence and recognition in school lunch sustainability.
                </p>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="step-5" className="border rounded-lg bg-white shadow-sm">
              <AccordionTrigger className="px-4 hover:no-underline">
                <div className="flex gap-4 items-center">
                  <div className="flex-shrink-0 w-12 h-12 bg-primary text-white rounded-full flex items-center justify-center text-xl font-bold">5</div>
                  <h3 className="text-xl font-semibold">Gain Recognition and Support</h3>
                </div>
              </AccordionTrigger>
              <AccordionContent className="px-20">
                <p className="text-gray-600">
                  Schools excelling in school lunch sustainability will receive special recognition through the GreenPlate Initiative, celebrating their leadership in ethical dining. All participating schools will gain actionable insights, ensuring progress toward creating healthier, more sustainable dining programs.
                </p>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>

        <ScrollingFact fact="Schools generate 530,000 tons of food waste annually. Compostable utensils and better planning can reduce this by 30%. (USDA)" />
      </main>
    </div>
  );
};

export default Process;
