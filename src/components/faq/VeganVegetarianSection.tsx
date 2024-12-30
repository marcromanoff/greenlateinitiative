import { AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

export const VeganVegetarianSection = () => {
  return (
    <AccordionItem value="vegan-vegetarian">
      <AccordionTrigger className="text-xl font-semibold">9. Vegan and Vegetarian Options</AccordionTrigger>
      <AccordionContent className="space-y-4">
        <div>
          <h4 className="font-semibold">Why is it important for schools to offer vegan and vegetarian options?</h4>
          <p>Offering vegan and vegetarian options ensures inclusivity for students with dietary restrictions or preferences. It also promotes healthier, environmentally friendly meal choices, making the dining program more accessible and appealing to a wider audience.</p>
        </div>
        <div>
          <h4 className="font-semibold">Will students actually try vegan and vegetarian meals?</h4>
          <p>Yes! Research and real-world examples show that when vegan and vegetarian meals are consistently available, students are more likely to try them. Exposure to these options increases curiosity, and many students discover they enjoy these meals once they give them a chance.</p>
        </div>
        <div>
          <h4 className="font-semibold">Does offering plant-based meals benefit students who don't identify as vegan or vegetarian?</h4>
          <p>Absolutely! Many students, regardless of dietary preference, enjoy plant-based meals for their taste, health benefits, or environmental impact. Offering these options provides everyone with an opportunity to explore healthier, sustainable eating.</p>
        </div>
        <div>
          <h4 className="font-semibold">How does providing vegan and vegetarian options align with sustainability goals?</h4>
          <p>Plant-based meals have a significantly lower environmental impact than meat-based dishes, using fewer resources and producing fewer greenhouse gas emissions. Including these options supports your school's commitment to sustainability while also benefiting student health.</p>
        </div>
      </AccordionContent>
    </AccordionItem>
  );
};