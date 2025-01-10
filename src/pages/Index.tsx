import { Link } from "react-router-dom";
import Navigation from "../components/Navigation";

const Index = () => {
  return (
    <div className="min-h-screen bg-[#F2FCE2] font-sans">
      <Navigation />
      
      <main className="container mx-auto px-4 py-12">
        <div className="text-center max-w-4xl mx-auto animate-fade-in">
          <img 
            src="/lovable-uploads/b7457179-20d0-41c0-8bae-2bba7a31062d.png"
            alt="GreenPlate Initiative Logo"
            className="w-56 h-56 mx-auto mb-8"
          />
          <h1 className="text-5xl md:text-7xl font-bold mb-8 text-primary">
            GreenPlate Initiative
          </h1>
          <p className="text-lg md:text-3xl mb-8 text-gray-700 font-bold md:whitespace-nowrap">
            Seize the <span className="font-extrabold text-amber-500">gold standard</span> in sustainable school lunches
          </p>
          <Link
            to="/get-involved"
            className="inline-block bg-primary text-white px-8 py-4 rounded-lg text-xl font-semibold hover:bg-primary/90 transform hover:scale-105 transition-all animate-pulse shadow-[0_0_15px_rgba(47,133,90,0.5)] hover:shadow-[0_0_25px_rgba(47,133,90,0.8)]"
          >
            Start Now
          </Link>
        </div>
      </main>
    </div>
  );
};

export default Index;