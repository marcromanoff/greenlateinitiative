import Navigation from "../components/Navigation";
import ScrollingFact from "../components/ScrollingFact";
import { Accordion } from "@/components/ui/accordion";
import { GeneralSection } from "../components/faq/GeneralSection";
import { SubmissionSection } from "../components/faq/SubmissionSection";
import { ScoringSection } from "../components/faq/ScoringSection";
import { DietarySection } from "../components/faq/DietarySection";
import { SourcingSection } from "../components/faq/SourcingSection";
import { CertificationSection } from "../components/faq/CertificationSection";
import { SupportSection } from "../components/faq/SupportSection";
import { MethodologySection } from "../components/faq/MethodologySection";

const FAQ = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      
      <main className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold mb-8 text-primary">Frequently Asked Questions</h1>
          
          <ScrollingFact fact="Students with access to healthier school meals are 25% more likely to perform better academically. (CDC)" />

          <Accordion type="single" collapsible className="w-full space-y-4">
            <GeneralSection />
            <SubmissionSection />
            <ScoringSection />
            <DietarySection />
            <SourcingSection />
            <CertificationSection />
            <SupportSection />
            <MethodologySection />
          </Accordion>
        </div>

        <ScrollingFact fact="1 in 5 children in the U.S. struggles with obesity, but balanced school meals can significantly reduce this risk. (CDC)" />
        <ScrollingFact fact="5.6 million children in the U.S. have food allergies. Clear labeling ensures they stay safe. (FARE)" />
      </main>
    </div>
  );
};

export default FAQ;