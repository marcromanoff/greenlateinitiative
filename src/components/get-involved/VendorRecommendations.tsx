import { ExternalLink } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const vendorData = {
  veganAlternatives: [
    {
      name: "Beyond Meat",
      products: "Plant-based burgers, sausages, ground 'beef,' and meatballs",
      highlights: "High in protein, versatile, widely available",
      website: "beyondmeat.com"
    },
    {
      name: "Gardein",
      products: "Vegan chicken tenders, meatless meatballs, and stir-fry mixes",
      highlights: "Convenient ready-to-heat options perfect for school cafeterias",
      website: "gardein.com"
    },
    {
      name: "Tofurky",
      products: "Deli slices, sausages, plant-based roasts, and vegan pizza",
      highlights: "Great for sandwiches, wraps, and quick meal options",
      website: "tofurky.com"
    },
    {
      name: "Amy's Kitchen",
      products: "Vegan mac & cheese, burritos, soups, and rice bowls",
      highlights: "Ready-made meals that are organic and kid-friendly",
      website: "amys.com"
    },
    {
      name: "Lightlife Foods",
      products: "Plant-based hot dogs, burgers, and breakfast sausages",
      highlights: "Clean-label ingredients and great for traditional lunch favorites",
      website: "lightlife.com"
    }
  ],
  freshProduce: [
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
    {
      name: "US Foods",
      products: "Bulk fresh produce, including pre-cut and ready-to-use options",
      highlights: "Ideal for high-volume cafeterias needing consistent supply",
      website: "usfoods.com"
    }
  ],
  sustainablePackaging: [
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
    {
      name: "World Centric",
      products: "Plant-based compostable foodservice ware",
      highlights: "Certified compostable and zero-waste focused",
      website: "worldcentric.com"
    }
  ],
  ethicalSourcing: [
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
    {
      name: "FoodCorps",
      products: "Partnerships to promote locally-sourced, nutritious school meals",
      highlights: "Focuses on equitable food access and sustainable practices",
      website: "foodcorps.org"
    }
  ]
};

const VendorSection = ({ title, vendors }: { title: string; vendors: any[] }) => (
  <AccordionItem value={title.toLowerCase().replace(/\s+/g, '-')}>
    <AccordionTrigger className="text-xl font-semibold">{title}</AccordionTrigger>
    <AccordionContent>
      <div className="space-y-6">
        {vendors.map((vendor) => (
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
);

const VendorRecommendations = () => {
  return (
    <div className="bg-white p-8 rounded-lg shadow-md mb-16">
      <h2 className="text-3xl font-semibold mb-6">Vendor Recommendations</h2>
      <p className="text-gray-600 mb-6">
        We've curated a list of trusted vendors to help you implement sustainable practices in your school's dining services.
      </p>

      <Accordion type="single" collapsible className="w-full">
        <VendorSection title="Vegan Alternatives" vendors={vendorData.veganAlternatives} />
        <VendorSection title="Fresh Produce" vendors={vendorData.freshProduce} />
        <VendorSection title="Sustainable Packaging" vendors={vendorData.sustainablePackaging} />
        <VendorSection title="Ethical Sourcing" vendors={vendorData.ethicalSourcing} />
      </Accordion>
    </div>
  );
};

export default VendorRecommendations;