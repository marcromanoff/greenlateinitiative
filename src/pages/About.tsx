import Navigation from "../components/Navigation";
import ScrollingFact from "../components/ScrollingFact";
import { Card, CardContent } from "../components/ui/card";
import { Separator } from "../components/ui/separator";

const About = () => {
  const sections = [
    {
      title: "For Students: Lead the Sustainability Movement",
      points: [
        "Be a GreenPlate Ambassador: Take the first step in transforming your school's dining services by nominating your school for the GreenPlate program.",
        "Pride in Excellence: Be part of a school recognized for achieving the highest standards in sustainability.",
        "Raise Awareness: Use your school's certification to encourage other schools to join the initiative.",
        "Create Change: Advocate for better meals, reduced waste, and ethical practices in your cafeteria.",
        "Stand Out: Highlight your leadership in sustainability on resumes and college applications.",
      ]
    },
    {
      title: "For Administrators: Take the Lead",
      points: [
        "Achieve Recognition: Join the program and make your school a model for sustainability with the GreenPlate Certification.",
        "Visible Achievement: Display your certification to showcase your school's leadership and excellence in sustainability.",
        "Inspire Change: Set the bar for sustainability in your community, influencing neighboring schools and districts.",
        "Boost Your School's Appeal: Gain recognition from families and communities for prioritizing sustainability and student health.",
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      
      <main className="container mx-auto px-4 py-16">
        <div className="mb-16">
          <h2 className="text-4xl font-bold mb-8 text-center text-primary">Why GreenPlate?</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {sections.map((section, index) => (
              <Card 
                key={index} 
                className="animate-fade-in hover:shadow-lg transition-shadow duration-300"
                style={{animationDelay: `${index * 0.1}s`}}
              >
                <CardContent className="p-6">
                  <h3 className="text-2xl font-semibold mb-6 text-primary border-b pb-3">{section.title}</h3>
                  <ul className="space-y-4">
                    {section.points.map((point, i) => (
                      <li key={i} className="flex items-start space-x-3">
                        <span className="text-secondary mt-1.5 text-xl">•</span>
                        <span className="text-gray-700 leading-relaxed">{point}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        <Separator className="my-12" />

        <ScrollingFact fact="91% of parents support healthier, more sustainable school meals. (Pew Research)" />
        <ScrollingFact fact="Schools with sustainability programs see a 40% increase in community approval. (Education Sustainability Report)" />

        <Separator className="my-12" />

        <div className="max-w-3xl mx-auto mt-16">
          <h2 className="text-3xl font-bold mb-8 text-primary text-center">About Ari</h2>
          
          <div className="prose prose-lg mx-auto">
            <p className="text-xl leading-relaxed text-gray-700 text-center">
              Ari Romanoff, an eighth-grade student at Newark Academy in Livingston, is a dedicated 
              pescetarian with a strong commitment to environmental sustainability. Ari founded the 
              GreenPlate Initiative to promote transparency in school dining services. By developing 
              a structured grading system, the initiative seeks to encourage schools to prioritize 
              health, inclusivity, and sustainability in their food programs.
            </p>
          </div>
        </div>
      </main>
    </div>
  );
};

export default About;