import Navigation from "../components/Navigation";
import ScrollingFact from "../components/ScrollingFact";
import { Button } from "@/components/ui/button";
import { Download, UserCheck, Users } from "lucide-react";

const Downloads = () => {
  const handleStudentDownload = () => {
    const link = document.createElement('a');
    link.href = '/lovable-uploads/c83af6ec-6443-400a-9a77-1713121e5a7d.png';
    link.download = 'GreenPlate-Student-Flyer.png';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const handleAdminDownload = () => {
    const link = document.createElement('a');
    link.href = '/lovable-uploads/074aace6-cce6-4e71-8194-1921316287a4.png';
    link.download = 'GreenPlate-Admin-Flyer.png';
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
          
          <div className="grid gap-8">
            <div className="bg-white p-8 rounded-lg shadow-md">
              <h2 className="text-2xl font-semibold mb-6">Promotional Materials</h2>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button 
                  onClick={handleStudentDownload}
                  className="flex-1 gap-2 text-lg py-6"
                  variant="default"
                >
                  <Users className="w-6 h-6" />
                  Student Flyer
                </Button>
                <Button 
                  onClick={handleAdminDownload}
                  className="flex-1 gap-2 text-lg py-6"
                  variant="secondary"
                >
                  <UserCheck className="w-6 h-6" />
                  Administrator Flyer
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