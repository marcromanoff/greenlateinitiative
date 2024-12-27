import Navigation from "../components/Navigation";
import ScrollingFact from "../components/ScrollingFact";
import StudentAdminSection from "@/components/get-involved/StudentAdminSection";
import InitiativeSection from "@/components/get-involved/InitiativeSection";

const GetInvolved = () => {
  return (
    <div className="min-h-screen bg-green-50">
      <Navigation />
      
      <main className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-binate mb-8 text-primary">Get Involved</h1>
          
          <StudentAdminSection />
          <InitiativeSection />
        </div>

        <ScrollingFact fact="Schools generate 530,000 tons of food waste annually. Compostable utensils and better planning can reduce this by 30%. (USDA)" />
      </main>
    </div>
  );
};

export default GetInvolved;