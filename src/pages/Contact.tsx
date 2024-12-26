import Navigation from "../components/Navigation";
import { Mail } from "lucide-react";
import { Button } from "@/components/ui/button";

const Contact = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      
      <main className="container mx-auto px-4 py-16">
        <div className="max-w-2xl mx-auto text-center">
          <h1 className="text-4xl font-bold mb-8 text-primary">Contact Us</h1>
          <p className="text-xl mb-8 text-gray-600">
            Have questions or want to get involved? We'd love to hear from you!
          </p>
          
          <a 
            href="mailto:greenplateinitiative@gmail.com"
            className="inline-block"
          >
            <Button 
              className="text-lg px-6 py-3 flex items-center gap-2"
              size="lg"
            >
              <Mail className="w-5 h-5" />
              Email Us
            </Button>
          </a>
          
          <p className="mt-6 text-gray-500">
            greenplateinitiative@gmail.com
          </p>
        </div>
      </main>
    </div>
  );
};

export default Contact;