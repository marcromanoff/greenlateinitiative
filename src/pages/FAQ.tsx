import Navigation from "../components/Navigation";
import ScrollingFact from "../components/ScrollingFact";
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
          
          <ScrollingFact fact="Students with access to healthier school meals are 25% more likely to perform better academically. (CDC)" />

          <Accordion type="single" collapsible className="w-full space-y-4">
            {/* General Questions */}
            <AccordionItem value="general">
              <AccordionTrigger className="text-xl font-semibold">1. General Questions</AccordionTrigger>
              <AccordionContent className="space-y-4">
                <div>
                  <h4 className="font-semibold">What is the GreenPlate Certification?</h4>
                  <p>The GreenPlate Certification is a program that evaluates school meal programs based on Variety & Inclusivity, Sourcing & Sustainability, Nutritional Value, and Accessibility & Labeling. Schools are awarded points in various categories, with the goal of promoting healthier, environmentally-friendly meals for students.</p>
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

            {/* Submission Process */}
            <AccordionItem value="submission">
              <AccordionTrigger className="text-xl font-semibold">2. Submission Process</AccordionTrigger>
              <AccordionContent className="space-y-4">
                <div>
                  <h4 className="font-semibold">How do we submit our menu for evaluation?</h4>
                  <p>You can submit your menu through the online submission form which can be done through the form under get involved. Be sure to include a detailed one-week menu (5 school days), ingredient lists, and dietary labels.</p>
                </div>
                <div>
                  <h4 className="font-semibold">What if we don't have some of the required information?</h4>
                  <p>While complete information is ideal, partial submissions will be evaluated. We encourage you to provide as much detail as possible to maximize your score.</p>
                </div>
                <div>
                  <h4 className="font-semibold">How long does the evaluation process take?</h4>
                  <p>The evaluation typically takes 5 minutes to complete.</p>
                </div>
                <div>
                  <h4 className="font-semibold">Can we submit multiple times?</h4>
                  <p>Yes, schools are welcome to submit updated menus or resubmit after implementing improvements.</p>
                </div>
              </AccordionContent>
            </AccordionItem>

            {/* Scoring and Criteria */}
            <AccordionItem value="scoring">
              <AccordionTrigger className="text-xl font-semibold">3. Scoring and Criteria</AccordionTrigger>
              <AccordionContent className="space-y-4">
                <div>
                  <h4 className="font-semibold">How is the menu scored?</h4>
                  <p>Menus are scored across five categories (see grading).</p>
                </div>
                <div>
                  <h4 className="font-semibold">What happens if our school scores low?</h4>
                  <p>Schools that score low will receive feedback with actionable recommendations to improve their programs. You can reapply for evaluation once changes are made.</p>
                </div>
              </AccordionContent>
            </AccordionItem>

            {/* Improvement Recommendations */}
            <AccordionItem value="improvement">
              <AccordionTrigger className="text-xl font-semibold">4. Improvement Recommendations</AccordionTrigger>
              <AccordionContent className="space-y-4">
                <div>
                  <h4 className="font-semibold">How can we improve our menu to score higher?</h4>
                  <p>Focus on areas with low scores. Some common recommendations include:</p>
                  <ul className="list-disc pl-6 mt-2">
                    <li>Adding vegan and vegetarian alternatives</li>
                    <li>Including detailed dietary labels for allergens and ingredients</li>
                    <li>Offering fresh fruits daily and switching to organic produce</li>
                    <li>Using compostable or reusable utensils and ethically sourcing ingredients</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold">Do you provide resources to help us improve?</h4>
                  <p>Yes, the website includes:</p>
                  <ul className="list-disc pl-6 mt-2">
                    <li>A downloadable score report</li>
                    <li>Sample high-scoring menus</li>
                    <li>A list of recommended vendors for vegan options, sustainable utensils, and organic produce</li>
                  </ul>
                </div>
              </AccordionContent>
            </AccordionItem>

            {/* Dietary Labels and Ingredient Lists */}
            <AccordionItem value="dietary">
              <AccordionTrigger className="text-xl font-semibold">5. Dietary Labels and Ingredient Lists</AccordionTrigger>
              <AccordionContent className="space-y-4">
                <div>
                  <h4 className="font-semibold">What dietary labels are required?</h4>
                  <p>Labels for vegan, vegetarian, gluten-free options, and common allergens (nuts, dairy, shellfish, etc.) are required.</p>
                </div>
                <div>
                  <h4 className="font-semibold">Do we need to make ingredient lists available online?</h4>
                  <p>Yes, providing detailed ingredient lists online is highly encouraged and awards points during evaluation.</p>
                </div>
              </AccordionContent>
            </AccordionItem>

            {/* Sourcing & Sustainability */}
            <AccordionItem value="sourcing">
              <AccordionTrigger className="text-xl font-semibold">6. Sourcing & Sustainability</AccordionTrigger>
              <AccordionContent className="space-y-4">
                <div>
                  <h4 className="font-semibold">What qualifies as sustainable utensils?</h4>
                  <p>Utensils made from compostable, biodegradable, or reusable materials qualify. Examples include bamboo, PLA (plant-based plastic), and stainless steel.</p>
                </div>
                <div>
                  <h4 className="font-semibold">How can we source ethical ingredients?</h4>
                  <p>Partner with local farms and look for suppliers offering fair trade or certified organic products. Refer to our vendor list for suggestions.</p>
                </div>
                <div>
                  <h4 className="font-semibold">Do we need to include organic produce?</h4>
                  <p>While not essential for a good score, using organic produce or ingredients adds many points to your score, and is highly recommended.</p>
                </div>
              </AccordionContent>
            </AccordionItem>

            {/* Certification and Recognition */}
            <AccordionItem value="certification">
              <AccordionTrigger className="text-xl font-semibold">7. Certification and Recognition</AccordionTrigger>
              <AccordionContent className="space-y-4">
                <div>
                  <h4 className="font-semibold">How will our certification be displayed?</h4>
                  <p>Certified schools receive a digital badge and a physical certificate for display. High-performing schools may also be featured on our website and social media.</p>
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

            {/* Support and Contact */}
            <AccordionItem value="support">
              <AccordionTrigger className="text-xl font-semibold">8. Support and Contact</AccordionTrigger>
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

            {/* Addressing Methodological Concerns */}
            <AccordionItem value="methodology">
              <AccordionTrigger className="text-xl font-semibold">9. Addressing Methodological Concerns</AccordionTrigger>
              <AccordionContent className="space-y-4">
                <div>
                  <h4 className="font-semibold">Isn't your method too subjective, allowing examiners to adjust grades based on personal preferences?</h4>
                  <p>No, our method eliminates subjectivity by adhering to a straightforward approach. Schools are graded based on clear, binary criteria: whether an item is present or not. This ensures consistency and fairness across all evaluations.</p>
                </div>
                <div>
                  <h4 className="font-semibold">How do you ensure consistency in grading? Examining only one day's menu seems unreliable.</h4>
                  <p>To ensure consistency, we evaluate a larger sample size. Instead of a single day, we assess a one-week (5 school days) timeframe. This broader scope minimizes variability and provides a more accurate representation of a school's meal program.</p>
                </div>
                <div>
                  <h4 className="font-semibold">Food quality is highly subjective. How do you handle this?</h4>
                  <p>We've eliminated tasting from our methodology to avoid subjectivity. Instead, we focus on measurable and objective criteria such as nutritional value, availability of fresh ingredients, and inclusivity of dietary options.</p>
                </div>
                <div>
                  <h4 className="font-semibold">Why are schools penalized for not having vegan alternative entrées if they have few or no vegan/vegetarian students?</h4>
                  <p>Inclusivity is a core value of the GreenPlate Certification. Even if there's only one vegetarian or vegan student in a school, they deserve equitable access to nutritious meals. Providing vegan alternatives ensures every student feels valued and included in the lunch program.</p>
                </div>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </main>
    </div>
  );
};

export default FAQ;