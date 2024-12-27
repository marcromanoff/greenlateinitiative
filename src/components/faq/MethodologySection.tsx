import { AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

export const MethodologySection = () => {
  return (
    <AccordionItem value="methodology">
      <AccordionTrigger className="text-xl font-semibold">8. Addressing Methodological Concerns</AccordionTrigger>
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
  );
};