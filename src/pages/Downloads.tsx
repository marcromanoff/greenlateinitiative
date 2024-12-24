import Navigation from "../components/Navigation";
import ScrollingFact from "../components/ScrollingFact";
import { Button } from "@/components/ui/button";
import { Download } from "lucide-react";

const Downloads = () => {
  const handleDownload = () => {
    // Create a link element
    const link = document.createElement('a');
    link.href = '/lovable-uploads/ea0420ad-fa02-4509-930c-111662069e4c.png';
    link.download = 'GreenPlate-Initiative-Flyer.png';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      
      <main className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold mb-8 text-primary">Downloads</h1>
          
          <div className="grid gap-6">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h2 className="text-xl font-semibold mb-4">Promotional Materials</h2>
              <Button 
                onClick={handleDownload}
                className="inline-flex items-center gap-2"
              >
                <Download className="w-4 h-4" />
                Download Flyer
              </Button>
            </div>
          </div>
        </div>

        <ScrollingFact fact="Switching to plant-based options reduces a school's carbon footprint by up to 20%. (UN FAO)" />
      </main>
    </div>
  );
};

export default Downloads;