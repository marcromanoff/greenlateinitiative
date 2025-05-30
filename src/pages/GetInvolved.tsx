
import Navigation from "../components/Navigation";
import ScrollingFact from "../components/ScrollingFact";
import StudentAdminSection from "@/components/get-involved/StudentAdminSection";

const GetInvolved = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#DBE6F6] via-[#E8F4E2] to-[#F2FAFC]">
      <Navigation />
      
      <main className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold mb-8 text-primary">Get Involved</h1>
          
          <StudentAdminSection />
        </div>

        <ScrollingFact fact="Schools generate 530,000 tons of food waste annually. Compostable utensils and better planning can reduce this by 30%. (USDA)" />
      </main>
    </div>
  );
};

export default GetInvolved;
