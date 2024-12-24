import { Link } from "react-router-dom";
import Navigation from "../components/Navigation";
import ScrollingFact from "../components/ScrollingFact";
import { Button } from "@/components/ui/button";

const Index = () => {
  const facts = [
    "Students with access to healthier school meals are 25% more likely to perform better academically. (CDC)",
    "Switching to plant-based options reduces a school's carbon footprint by up to 20%. (UN FAO)",
    "Schools generate 530,000 tons of food waste annually. Compostable utensils and better planning can reduce this by 30%. (USDA)"
  ];

  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      
      <main className="container mx-auto px-4 py-16">
        <div className="text-center max-w-4xl mx-auto">
          <div className="mb-12 animate-fade-in">
            <h1 className="text-5xl md:text-7xl font-bold mb-8 text-primary font-impact">
              GreenPlate Initiative
            </h1>
            <p className="text-xl md:text-2xl mb-12 text-gray-700 font-bold animate-pulse">
              Propelling schools toward a future of sustainability, delivering healthy and ethical meals that redefine standards.
            </p>
          </div>

          <Link
            to="/get-involved"
            className="inline-block"
          >
            <Button 
              className="px-8 py-6 text-xl font-semibold transform hover:scale-105 transition-all animate-pulse bg-primary hover:bg-primary/90"
            >
              Get Involved
            </Button>
          </Link>
        </div>

        <div className="mt-16 space-y-4">
          {facts.map((fact, index) => (
            <ScrollingFact key={index} fact={fact} />
          ))}
        </div>
      </main>
    </div>
  );
};

export default Index;