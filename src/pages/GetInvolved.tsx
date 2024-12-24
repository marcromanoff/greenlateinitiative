import Navigation from "../components/Navigation";
import ScrollingFact from "../components/ScrollingFact";
import StudentAdminSection from "@/components/get-involved/StudentAdminSection";
import InitiativeSection from "@/components/get-involved/InitiativeSection";
import VendorRecommendations from "@/components/get-involved/VendorRecommendations";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const GetInvolved = () => {
  return (
    <div className="min-h-screen bg-green-50">
      <Navigation />
      
      <main className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold mb-8 text-primary">Get Involved</h1>
          
          <Tabs defaultValue="main" className="w-full">
            <TabsList className="grid w-full grid-cols-2">
              <TabsTrigger value="main">Get Involved</TabsTrigger>
              <TabsTrigger value="vendors">Vendor Recommendations</TabsTrigger>
            </TabsList>
            
            <TabsContent value="main" className="mt-6">
              <StudentAdminSection />
              <InitiativeSection />
            </TabsContent>
            
            <TabsContent value="vendors" className="mt-6">
              <VendorRecommendations />
            </TabsContent>
          </Tabs>
        </div>

        <ScrollingFact fact="Schools generate 530,000 tons of food waste annually. Compostable utensils and better planning can reduce this by 30%. (USDA)" />
      </main>
    </div>
  );
};

export default GetInvolved;