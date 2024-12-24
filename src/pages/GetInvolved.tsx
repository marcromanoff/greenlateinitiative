import Navigation from "../components/Navigation";
import ScrollingFact from "../components/ScrollingFact";
import { GraduationCap, Clipboard, ExternalLink } from "lucide-react";
import { Link } from "react-router-dom";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const GetInvolved = () => {
  const formUrl = "https://docs.google.com/forms/d/e/1FAIpQLSe9HXGiGSVEkz2A0CchDkamFtvNTNFBYQTyGHPojLx0errswA/viewform?usp=header";

  return (
    <div className="min-h-screen bg-green-50">
      <Navigation />
      
      <main className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold mb-8 text-primary">Get Involved</h1>
          
          <div className="grid md:grid-cols-2 gap-8 mb-16">
            <div className="bg-white p-8 pb-16 rounded-lg shadow-md group hover:shadow-lg transition-all duration-300">
              <h2 className="text-2xl font-semibold mb-4">For Students</h2>
              <p className="mb-6">Nominate Your School for the GreenPlate Challenge. Put a spotlight on your school's sustainability efforts and make a real impact!</p>
              <a 
                href={formUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-primary text-white px-6 py-3 rounded-lg hover:bg-primary/90 transition-all duration-300 hover:scale-105 group relative"
              >
                <GraduationCap className="w-5 h-5 animate-bounce" />
                <span>Student Nomination Form</span>
                <span className="absolute -bottom-12 left-0 right-0 text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-gray-600">
                  Start making a difference at your school
                </span>
              </a>
            </div>
            
            <div className="bg-white p-8 pb-16 rounded-lg shadow-md group hover:shadow-lg transition-all duration-300">
              <h2 className="text-2xl font-semibold mb-4">For Administrators</h2>
              <p className="mb-6">Join the GreenPlate Program. Showcase your school's commitment to health, sustainability, and the future.</p>
              <a 
                href={formUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-primary text-white px-6 py-3 rounded-lg hover:bg-primary/90 transition-all duration-300 hover:scale-105 group relative"
              >
                <Clipboard className="w-5 h-5 animate-pulse" />
                <span>Administrator Form</span>
                <span className="absolute -bottom-12 left-0 right-0 text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-gray-600">
                  Lead your school towards sustainability
                </span>
              </a>
            </div>
          </div>

          <div className="bg-white p-8 rounded-lg shadow-md mb-16">
            <h2 className="text-3xl font-semibold mb-6">Join the GreenPlate Initiative</h2>
            <p className="text-gray-600 mb-6">
              The GreenPlate Initiative is a comprehensive program designed to evaluate and improve the sustainability of school dining services. 
              Whether you're a student passionate about making a difference or an administrator looking to lead change, 
              we provide the tools and support needed to create more sustainable dining environments.
            </p>
          </div>

          <div className="bg-white p-8 rounded-lg shadow-md mb-16">
            <h2 className="text-3xl font-semibold mb-6">Vendor Recommendations</h2>
            <p className="text-gray-600 mb-6">
              We've curated a list of trusted vendors to help you implement sustainable practices in your school's dining services.
            </p>

            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="vegan">
                <AccordionTrigger className="text-xl font-semibold">Vegan Alternatives</AccordionTrigger>
                <AccordionContent>
                  <div className="space-y-6">
                    {[
                      {
                        name: "Beyond Meat",
                        products: "Plant-based burgers, sausages, ground 'beef,' and meatballs",
                        highlights: "High in protein, versatile, widely available",
                        website: "beyondmeat.com"
                      },
                      {
                        name: "Gardein",
                        products: "Vegan chicken tenders, meatless meatballs, and stir-fry mixes",
                        highlights: "Convenient ready-to-heat options",
                        website: "gardein.com"
                      },
                      // ... Additional vegan vendors
                    ].map((vendor) => (
                      <div key={vendor.name} className="p-4 bg-green-50 rounded-lg">
                        <h3 className="font-semibold text-lg text-primary">{vendor.name}</h3>
                        <p className="text-gray-700"><span className="font-medium">Products:</span> {vendor.products}</p>
                        <p className="text-gray-700"><span className="font-medium">Highlights:</span> {vendor.highlights}</p>
                        <a 
                          href={`https://${vendor.website}`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center text-primary hover:text-primary/80 mt-2"
                        >
                          {vendor.website} <ExternalLink className="w-4 h-4 ml-1" />
                        </a>
                      </div>
                    ))}
                  </div>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="produce">
                <AccordionTrigger className="text-xl font-semibold">Fresh Produce</AccordionTrigger>
                <AccordionContent>
                  <div className="space-y-6">
                    {[
                      {
                        name: "Farmbox Direct",
                        products: "Organic and conventional fruits and vegetables delivered weekly",
                        highlights: "Subscription-based service with customizable produce boxes",
                        website: "farmboxdirect.com"
                      },
                      {
                        name: "Imperfect Foods",
                        products: "'Imperfect' fruits and vegetables at discounted prices",
                        highlights: "Helps reduce food waste while saving money",
                        website: "imperfectfoods.com"
                      },
                      // ... Additional produce vendors
                    ].map((vendor) => (
                      <div key={vendor.name} className="p-4 bg-green-50 rounded-lg">
                        <h3 className="font-semibold text-lg text-primary">{vendor.name}</h3>
                        <p className="text-gray-700"><span className="font-medium">Products:</span> {vendor.products}</p>
                        <p className="text-gray-700"><span className="font-medium">Highlights:</span> {vendor.highlights}</p>
                        <a 
                          href={`https://${vendor.website}`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center text-primary hover:text-primary/80 mt-2"
                        >
                          {vendor.website} <ExternalLink className="w-4 h-4 ml-1" />
                        </a>
                      </div>
                    ))}
                  </div>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="packaging">
                <AccordionTrigger className="text-xl font-semibold">Sustainable Packaging</AccordionTrigger>
                <AccordionContent>
                  <div className="space-y-6">
                    {[
                      {
                        name: "Eco-Products",
                        products: "Compostable plates, bowls, utensils, and food trays",
                        highlights: "Biodegradable options for environmentally-conscious cafeterias",
                        website: "ecoproducts.com"
                      },
                      {
                        name: "Greenware",
                        products: "Reusable trays, cutlery, and cups",
                        highlights: "Durable and sustainable, ideal for long-term use",
                        website: "fabri-kal.com"
                      },
                      // ... Additional packaging vendors
                    ].map((vendor) => (
                      <div key={vendor.name} className="p-4 bg-green-50 rounded-lg">
                        <h3 className="font-semibold text-lg text-primary">{vendor.name}</h3>
                        <p className="text-gray-700"><span className="font-medium">Products:</span> {vendor.products}</p>
                        <p className="text-gray-700"><span className="font-medium">Highlights:</span> {vendor.highlights}</p>
                        <a 
                          href={`https://${vendor.website}`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center text-primary hover:text-primary/80 mt-2"
                        >
                          {vendor.website} <ExternalLink className="w-4 h-4 ml-1" />
                        </a>
                      </div>
                    ))}
                  </div>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="ethical">
                <AccordionTrigger className="text-xl font-semibold">Ethical Sourcing</AccordionTrigger>
                <AccordionContent>
                  <div className="space-y-6">
                    {[
                      {
                        name: "Fair Trade USA",
                        products: "Certification ensures ethical labor and environmental standards",
                        highlights: "Search for certified products in coffee, chocolate, and bananas",
                        website: "fairtradecertified.org"
                      },
                      {
                        name: "Thrive Market",
                        products: "Ethically-sourced pantry staples and organic foods",
                        highlights: "Affordable prices with transparent sourcing",
                        website: "thrivemarket.com"
                      },
                      // ... Additional ethical sourcing vendors
                    ].map((vendor) => (
                      <div key={vendor.name} className="p-4 bg-green-50 rounded-lg">
                        <h3 className="font-semibold text-lg text-primary">{vendor.name}</h3>
                        <p className="text-gray-700"><span className="font-medium">Products:</span> {vendor.products}</p>
                        <p className="text-gray-700"><span className="font-medium">Highlights:</span> {vendor.highlights}</p>
                        <a 
                          href={`https://${vendor.website}`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center text-primary hover:text-primary/80 mt-2"
                        >
                          {vendor.website} <ExternalLink className="w-4 h-4 ml-1" />
                        </a>
                      </div>
                    ))}
                  </div>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </div>

        <ScrollingFact fact="Schools generate 530,000 tons of food waste annually. Compostable utensils and better planning can reduce this by 30%. (USDA)" />
      </main>
    </div>
  );
};

export default GetInvolved;
