import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const GradingExplanation = () => {
  return (
    <div className="mb-8">
      <p className="text-lg mb-6">
        At GreenPlate, we are committed to 100% objectivity in evaluating school dining programs. 
        Our grading system is designed to be fair, consistent, and free from subjective bias. 
        Here's how we ensure accuracy and transparency in our evaluations:
      </p>

      <Accordion type="single" collapsible className="space-y-4">
        <AccordionItem value="criteria" className="border rounded-lg bg-white shadow-sm">
          <AccordionTrigger className="px-4 hover:no-underline">
            <div className="flex gap-4 items-center">
              <div className="flex-shrink-0 w-8 h-8 bg-primary text-white rounded-full flex items-center justify-center text-lg font-bold">
                1
              </div>
              <h3 className="text-xl font-semibold text-left">Strictly Criteria-Based Scoring</h3>
            </div>
          </AccordionTrigger>
          <AccordionContent className="px-16">
            <ul className="list-disc space-y-2">
              <li>We evaluate each day of the school week (5 school days) individually based on the specific, predefined criteria, found below.</li>
              <li>Each day is worth 20 points, and the total score for all 5 days determines your school's grade, out off 100 points total.</li>
            </ul>
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="verified" className="border rounded-lg bg-white shadow-sm">
          <AccordionTrigger className="px-4 hover:no-underline">
            <div className="flex gap-4 items-center">
              <div className="flex-shrink-0 w-8 h-8 bg-primary text-white rounded-full flex items-center justify-center text-lg font-bold">
                2
              </div>
              <h3 className="text-xl font-semibold text-left">Only Verified Information</h3>
            </div>
          </AccordionTrigger>
          <AccordionContent className="px-16">
            <ul className="list-disc space-y-2">
              <li>We exclusively use data available on school websites and information submitted by certified GreenPlate Ambassadors.</li>
              <li>This ensures that all evaluations are based on factual, documented evidence—not assumptions or unverified claims.</li>
            </ul>
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="consistency" className="border rounded-lg bg-white shadow-sm">
          <AccordionTrigger className="px-4 hover:no-underline">
            <div className="flex gap-4 items-center">
              <div className="flex-shrink-0 w-8 h-8 bg-primary text-white rounded-full flex items-center justify-center text-lg font-bold">
                3
              </div>
              <h3 className="text-xl font-semibold text-left">Consistency Across Schools</h3>
            </div>
          </AccordionTrigger>
          <AccordionContent className="px-16">
            <ul className="list-disc space-y-2">
              <li>Every school is assessed using the same criteria, regardless of location or size.</li>
              <li>By applying a uniform grading system, we ensure that every school is held to the same standard of sustainability and ethical dining practices.</li>
            </ul>
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="subjectivity" className="border rounded-lg bg-white shadow-sm">
          <AccordionTrigger className="px-4 hover:no-underline">
            <div className="flex gap-4 items-center">
              <div className="flex-shrink-0 w-8 h-8 bg-primary text-white rounded-full flex items-center justify-center text-lg font-bold">
                4
              </div>
              <h3 className="text-xl font-semibold text-left">Eliminating Subjectivity</h3>
            </div>
          </AccordionTrigger>
          <AccordionContent className="px-16">
            <ul className="list-disc space-y-2">
              <li>We do not rely on opinions, reviews, or anecdotal evidence.</li>
              <li>Our evaluations are based solely on measurable, observable data that aligns with our grading rubric.</li>
            </ul>
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="transparency" className="border rounded-lg bg-white shadow-sm">
          <AccordionTrigger className="px-4 hover:no-underline">
            <div className="flex gap-4 items-center">
              <div className="flex-shrink-0 w-8 h-8 bg-primary text-white rounded-full flex items-center justify-center text-lg font-bold">
                5
              </div>
              <h3 className="text-xl font-semibold text-left">Transparent Results</h3>
            </div>
          </AccordionTrigger>
          <AccordionContent className="px-16">
            <ul className="list-disc space-y-2">
              <li>Schools receive a clear breakdown of their scores, with actionable insights for areas of improvement.</li>
              <li>GreenPlate Ambassadors play a key role in providing accurate information to ensure a fair evaluation.</li>
            </ul>
          </AccordionContent>
        </AccordionItem>
      </Accordion>

      <p className="mt-8 text-lg">
        By sticking to objective data and a rigorous evaluation process, GreenPlate ensures that every school is graded fairly and has a clear path to achieving excellence. If your school is ready to lead the way in sustainability, we're here to provide the tools and support to get you there! 🌱
      </p>
    </div>
  );
};

export default GradingExplanation;