
import { Link } from "react-router-dom";
import Navigation from "../components/Navigation";

const Home = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#D3E4FD] via-[#E8F4E2] to-[#F2FCE2] font-sans">
      <Navigation />
      
      <main className="container mx-auto px-4 py-12">
        <div className="text-center max-w-4xl mx-auto animate-fade-in">
          <img 
            src="/lovable-uploads/70b2a0c3-74f3-42fb-a145-32af24911502.png"
            alt="GreenPlate Initiative Logo"
            className="w-56 h-56 mx-auto mb-8"
          />
          <h1 className="text-5xl md:text-7xl font-bold mb-8 text-primary">
            GreenPlate Initiative
          </h1>
          <p className="text-lg md:text-3xl mb-12 text-gray-700 font-medium">
            Seize the <span className="font-bold text-amber-500">gold standard</span> in sustainable school lunches
          </p>
          <Link
            to="/get-involved"
            className="inline-block bg-[#4D9E76] text-white px-8 py-4 rounded-lg text-xl font-semibold hover:bg-[#4D9E76]/90 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl"
          >
            Start Now
          </Link>
        </div>
      </main>
    </div>
  );
};

export default Home;

