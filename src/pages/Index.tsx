import { Link } from "react-router-dom";
import Navigation from "../components/Navigation";
import ScrollingFact from "../components/ScrollingFact";

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      
      <main className="container mx-auto px-4 py-16">
        <div className="text-center max-w-4xl mx-auto animate-fade-in">
          <img 
            src="/lovable-uploads/ae2f3bdb-a66a-4aec-8f27-163735703db5.png"
            alt="GreenPlate Initiative Logo"
            className="w-48 h-48 mx-auto mb-8"
          />
          <h1 className="text-5xl md:text-7xl font-bold mb-8 text-primary">
            GreenPlate Initiative
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-gray-700 font-bold">
            Seize the <span className="italic font-extrabold text-amber-500 animate-pulse">gold standard</span> in sustainability
          </p>
          <Link
            to="/get-involved"
            className="inline-block bg-primary text-white px-8 py-4 rounded-lg text-xl font-semibold hover:bg-primary/90 transform hover:scale-105 transition-all animate-pulse"
          >
            Start Now
          </Link>
        </div>

        <ScrollingFact fact="Students with access to healthier school meals are 25% more likely to perform better academically. (CDC)" />
        
        <ScrollingFact fact="Switching to plant-based options reduces a school's carbon footprint by up to 20%. (UN FAO)" />
      </main>
    </div>
  );
};

export default Index;