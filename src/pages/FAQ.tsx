import Navigation from "../components/Navigation";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FAQ = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      
      <main className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold mb-8 text-primary">Frequently Asked Questions</h1>
          
          {/* Administrators Section */}
          <section className="mb-12">
            <h2 className="text-2xl font-semibold mb-6">For Administrators</h2>
            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="admin-general">
                <AccordionTrigger>General Questions</AccordionTrigger>
                <AccordionContent>
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-semibold">What is the GreenPlate Certification?</h4>
                      <p>The GreenPlate Certification evaluates school meal programs based on Variety & Inclusivity, Sourcing & Sustainability, Nutritional Value, and Accessibility & Labeling. Schools are awarded points in these categories to promote healthier, environmentally-friendly meals.</p>
                    </div>
                    <div>
                      <h4 className="font-semibold">Why should our school participate?</h4>
                      <p>Participating improves your meal program, promotes sustainability, and ensures inclusivity for students with dietary restrictions. High-performing schools receive recognition, boosting their reputation.</p>
                    </div>
                    <div>
                      <h4 className="font-semibold">Is there a fee to participate?</h4>
                      <p>No, participation in the GreenPlate Certification program is free.</p>
                    </div>
                  </div>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="admin-submission">
                <AccordionTrigger>Submission Process</AccordionTrigger>
                <AccordionContent>
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-semibold">How do we submit our menu for evaluation?</h4>
                      <p>Submit your menu through the online form on the Get Involved page. Include a detailed one-week menu (5 school days), ingredient lists, and dietary labels.</p>
                    </div>
                    <div>
                      <h4 className="font-semibold">How long does the evaluation process take?</h4>
                      <p>The evaluation typically takes five minutes to complete.</p>
                    </div>
                    <div>
                      <h4 className="font-semibold">Can we submit multiple times?</h4>
                      <p>Yes, you can resubmit after making improvements or to update your menu.</p>
                    </div>
                  </div>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="admin-scoring">
                <AccordionTrigger>Scoring and Criteria</AccordionTrigger>
                <AccordionContent>
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-semibold">How is the menu scored?</h4>
                      <p>Menus are scored across five categories. See the Grading page for details.</p>
                    </div>
                    <div>
                      <h4 className="font-semibold">What happens if our school scores low?</h4>
                      <p>Schools receive feedback with actionable recommendations to improve their programs. You can reapply for evaluation after implementing changes.</p>
                    </div>
                  </div>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </section>

          {/* Students Section */}
          <section>
            <h2 className="text-2xl font-semibold mb-6">For Students</h2>
            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="student-general">
                <AccordionTrigger>General Questions</AccordionTrigger>
                <AccordionContent>
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-semibold">What is the GreenPlate Certification?</h4>
                      <p>It's a program to evaluate school meals for healthiness, sustainability, and inclusivity. Schools can earn recognition for achieving high standards.</p>
                    </div>
                    <div>
                      <h4 className="font-semibold">Why should I care about this program?</h4>
                      <p>It encourages better meals, reduces waste, and ensures students with dietary restrictions feel included.</p>
                    </div>
                    <div>
                      <h4 className="font-semibold">Can students participate?</h4>
                      <p>Yes! You can nominate your school for evaluation through the Get Involved page.</p>
                    </div>
                  </div>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="student-nomination">
                <AccordionTrigger>Nomination and Submission</AccordionTrigger>
                <AccordionContent>
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-semibold">How do I nominate my school?</h4>
                      <p>Fill out the nomination form on the Get Involved page. Provide your school's name and why you think they should participate.</p>
                    </div>
                    <div>
                      <h4 className="font-semibold">What happens after I nominate my school?</h4>
                      <p>We'll reach out to your school administrators to explain the program and start the evaluation process.</p>
                    </div>
                  </div>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="student-impact">
                <AccordionTrigger>Recognition and Impact</AccordionTrigger>
                <AccordionContent>
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-semibold">What happens if my school gets certified?</h4>
                      <p>Your school will receive a certificate and digital badge, showcasing its commitment to health and sustainability.</p>
                    </div>
                    <div>
                      <h4 className="font-semibold">Can students help improve their school's menu?</h4>
                      <p>Absolutely! Talk to your administrators about areas of improvement, and share ideas from the GreenPlate Initiative resources.</p>
                    </div>
                  </div>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </section>
        </div>
      </main>
    </div>
  );
};

export default FAQ;