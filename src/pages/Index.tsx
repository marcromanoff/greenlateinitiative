import { Link } from "react-router-dom";
import Navigation from "../components/Navigation";
import ScrollingFact from "../components/ScrollingFact";

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      
      <main className="container mx-auto px-4 py-16">
        <div className="text-center max-w-4xl mx-auto animate-fade-in">
          <h1 className="text-5xl md:text-7xl font-bold mb-8 text-primary">
            GreenPlate Initiative
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-gray-700">
            Propelling schools toward a future of sustainability, delivering healthy and ethical meals that redefine standards.
          </p>
          <Link
            to="/get-involved"
            className="inline-block bg-primary text-white px-8 py-4 rounded-lg text-xl font-semibold hover:bg-primary/90 transform hover:scale-105 transition-all animate-pulse"
          >
            Get Involved
          </Link>
        </div>

        <ScrollingFact fact="Students with access to healthier school meals are 25% more likely to perform better academically. (CDC)" />
        
        <ScrollingFact fact="Switching to plant-based options reduces a school's carbon footprint by up to 20%. (UN FAO)" />
      </main>
    </div>
  );
};

export default Index;