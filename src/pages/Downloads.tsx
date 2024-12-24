import Navigation from "../components/Navigation";
import ScrollingFact from "../components/ScrollingFact";

const Downloads = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      
      <main className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold mb-8 text-primary">Downloads</h1>
          
          <div className="grid gap-6">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h2 className="text-xl font-semibold mb-4">Promotional Materials</h2>
              <button className="bg-primary text-white px-6 py-3 rounded-lg hover:bg-primary/90 transition-colors">
                Download Flyers
              </button>
            </div>
          </div>
        </div>

        <ScrollingFact fact="Switching to plant-based options reduces a school's carbon footprint by up to 20%. (UN FAO)" />
      </main>
    </div>
  );
};

export default Downloads;