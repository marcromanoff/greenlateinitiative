import Navigation from "../components/Navigation";
import VendorRecommendations from "@/components/get-involved/VendorRecommendations";

const Vendors = () => {
  return (
    <div className="min-h-screen bg-green-50">
      <Navigation />
      <main className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold mb-8 text-primary">Vendor Recommendations</h1>
          <VendorRecommendations />
        </div>
      </main>
    </div>
  );
};

export default Vendors;