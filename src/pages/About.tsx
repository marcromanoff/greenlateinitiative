import Navigation from "../components/Navigation";
import ScrollingFact from "../components/ScrollingFact";
import { Card, CardContent } from "../components/ui/card";
import { Separator } from "../components/ui/separator";
import { Link } from "react-router-dom";

const About = () => {
  const sections = [
    {
      title: "For Students: Lead the School Lunch Sustainability Movement",
      points: [
        <>
          <span className="font-bold">Be a GreenPlate Ambassador:</span> Take the first step in transforming your school's dining services by nominating your school for the GreenPlate program.
          <Link to="/ambassador" className="block mt-2 text-primary hover:text-primary/80 transition-colors text-sm">
            See GreenPlate Ambassador for more details →
          </Link>
        </>,
        <>
          <span className="font-bold">Pride in Excellence:</span> Be part of a school recognized for achieving the highest standards in school lunch sustainability.
        </>,
        <>
          <span className="font-bold">Raise Awareness:</span> Use your school's certification to encourage other schools to join the school lunch sustainability initiative.
        </>,
        <>
          <span className="font-bold">Create Change:</span> Advocate for better meals, reduced waste, and ethical practices in your cafeteria.
        </>,
        <>
          <span className="font-bold">Stand Out:</span> Highlight your leadership in school lunch sustainability on resumes and college applications.
        </>,
      ]
    },
    {
      title: "For Administrators: Take the Lead",
      points: [
        <>
          <span className="font-bold">Achieve Recognition:</span> Join the program and make your school a model for school lunch sustainability with the GreenPlate Certification.
        </>,
        <>
          <span className="font-bold">Visible Achievement:</span> Display your certification to showcase your school's leadership and excellence in school lunch sustainability.
        </>,
        <>
          <span className="font-bold">Inspire Change:</span> Set the bar for school lunch sustainability in your community, influencing neighboring schools and districts.
        </>,
        <>
          <span className="font-bold">Boost Your School's Appeal:</span> Gain recognition from families and communities for prioritizing school lunch sustainability and student health.
        </>,
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
              <div key={index}>
                <Card 
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
                    {section.title.includes("Administrators") && (
                      <div className="mt-6 space-y-2">
                        <div className="relative h-48 rounded-lg overflow-hidden">
                          <img 
                            src="/lovable-uploads/ca1f7893-1bfb-4f3c-a793-f80be2880d2e.png"
                            alt="Sustainable catering appetizers"
                            className="object-cover w-full h-full"
                          />
                        </div>
                        <p className="text-sm text-gray-500 italic">Photo credit: Sage Dining</p>
                      </div>
                    )}
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>
        </div>

        <Separator className="my-12" />

        <ScrollingFact fact="91% of parents support healthier, more sustainable school meals. (Pew Research)" />
        <ScrollingFact fact="Schools with school lunch sustainability programs see a 40% increase in community approval. (Education Sustainability Report)" />

        <Separator className="my-12" />

        <div className="max-w-3xl mx-auto mt-16">
          <h2 className="text-3xl font-bold mb-8 text-primary text-center">About Ari</h2>
          
          <div className="prose prose-lg mx-auto">
            <p className="text-xl leading-relaxed text-gray-700 text-center">
              Ari Romanoff, an eighth-grade student at Newark Academy in Livingston, NJ, is a dedicated 
              pescetarian with a strong commitment to environmental sustainability. Ari founded the 
              GreenPlate Initiative to promote transparency in school dining services. By developing 
              a structured grading system, the initiative seeks to encourage schools to prioritize 
              health, inclusivity, and school lunch sustainability in their food programs.
            </p>
          </div>
        </div>
      </main>
    </div>
  );
};

export default About;