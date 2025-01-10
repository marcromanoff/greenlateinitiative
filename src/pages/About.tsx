import Navigation from "../components/Navigation";
import ScrollingFact from "../components/ScrollingFact";
import { Card, CardContent } from "../components/ui/card";
import { Separator } from "../components/ui/separator";
import { Link } from "react-router-dom";

const About = () => {
  const sections = [
    {
      title: "For Students: Lead the Sustainability Movement",
      points: [
        <>
          <span className="font-bold">Be a GreenPlate Ambassador:</span> Take the first step in transforming your school's dining services by nominating your school for the GreenPlate program.
        </>,
        <>
          <span className="font-bold">Pride in Excellence:</span> Be part of a school recognized for achieving the highest standards in sustainability.
        </>,
        <>
          <span className="font-bold">Raise Awareness:</span> Use your school's certification to encourage other schools to join the initiative.
        </>,
        <>
          <span className="font-bold">Create Change:</span> Advocate for better meals, reduced waste, and ethical practices in your cafeteria.
        </>,
        <>
          <span className="font-bold">Stand Out:</span> Highlight your leadership in sustainability on resumes and college applications.
        </>,
      ]
    },
    {
      title: "For Administrators: Take the Lead",
      points: [
        <>
          <span className="font-bold">Achieve Recognition:</span> Join the program and make your school a model for sustainability with the GreenPlate Certification.
        </>,
        <>
          <span className="font-bold">Visible Achievement:</span> Display your certification to showcase your school's leadership and excellence in sustainability.
        </>,
        <>
          <span className="font-bold">Inspire Change:</span> Set the bar for sustainability in your community, influencing neighboring schools and districts.
        </>,
        <>
          <span className="font-bold">Boost Your School's Appeal:</span> Gain recognition from families and communities for prioritizing sustainability and student health.
        </>,
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      
      <main className="container mx-auto px-4 py-16">
        <div className="mb-16">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-4xl font-bold text-primary">Why GreenPlate?</h2>
            <Link to="/ambassador" className="text-blue-600 hover:text-blue-800 text-sm">
              See GreenPlate Ambassador for more details →
            </Link>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {sections.map((section, index) => (
              <Card 
                key={index} 
                className="animate-fade-in hover:shadow-lg transition-shadow duration-300"
                style={{animationDelay: `${index * 0.1}s`}}
              >
                <CardContent className="p-6">
                  <div className="border-b pb-3">
                    <h3 className="text-2xl font-semibold text-primary">{section.title}</h3>
                    <Link to="/ambassador" className="text-blue-600 hover:text-blue-800 text-sm">
                      See GreenPlate Ambassador for more details →
                    </Link>
                  </div>
                  <ul className="space-y-4 mt-4">
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
              Ari Romanoff, an eighth-grade student at Newark Academy in Livingston, NJ, is a dedicated 
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