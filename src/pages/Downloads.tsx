
import Navigation from "../components/Navigation";
import ScrollingFact from "../components/ScrollingFact";
import { Button } from "@/components/ui/button";
import { Download } from "lucide-react";

const Downloads = () => {
  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = '/lovable-uploads/7f4c154a-a8c6-4b32-962a-12a641241df9.png';
    link.download = 'GreenPlate-Initiative-Flyer.png';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#DBE6F6] via-[#E8F4E2] to-[#F2FAFC]">
      <Navigation />
      
      <main className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold mb-8 text-primary">Downloads</h1>
          
          <div className="grid gap-8">
            <div className="bg-white p-8 rounded-lg shadow-md">
              <h2 className="text-2xl font-semibold mb-6">Promotional Materials</h2>
              <div className="flex flex-col items-center gap-6">
                <img 
                  src="/lovable-uploads/7f4c154a-a8c6-4b32-962a-12a641241df9.png"
                  alt="GreenPlate Initiative Flyer"
                  className="max-w-md w-full rounded-lg shadow-md hover:shadow-lg transition-all duration-300"
                />
                <Button 
                  onClick={handleDownload}
                  className="gap-2 text-lg py-6 px-8"
                  variant="default"
                >
                  <Download className="w-6 h-6" />
                  Download Initiative Flyer
                </Button>
              </div>
            </div>
          </div>
        </div>

        <ScrollingFact fact="Switching to plant-based options reduces a school's carbon footprint by up to 20%. (UN FAO)" />
      </main>
    </div>
  );
};

export default Downloads;
