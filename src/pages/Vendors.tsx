
import Navigation from "../components/Navigation";
import ScrollingFact from "../components/ScrollingFact";
import VendorRecommendations from "@/components/get-involved/VendorRecommendations";

const Vendors = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#D3E4FD] via-[#E8F4E2] to-[#F2FCE2]">
      <Navigation />
      <main className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold mb-8 text-primary">Vendor Recommendations</h1>
          <ScrollingFact fact="Switching to plant-based options reduces a school's carbon footprint by up to 20%. (UN FAO)" />
          <VendorRecommendations />
        </div>
      </main>
    </div>
  );
};

export default Vendors;
