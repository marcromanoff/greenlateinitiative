import Navigation from "../components/Navigation";
import ScrollingFact from "../components/ScrollingFact";
import { Card, CardContent } from "../components/ui/card";

const About = () => {
  const reasons = [
    {
      title: "Achieve the Gold Standard",
      students: [
        "Pride in Excellence: Be part of a school recognized for achieving the highest sustainability standards.",
        "Raise Awareness: Use certification to encourage other schools to adopt similar initiatives.",
      ],
      administrators: [
        "Visible Achievement: Display certification to demonstrate commitment to excellence.",
        "Benchmark for Success: Clear, actionable steps to improve dining programs.",
      ],
    },
    {
      title: "Showcase Leadership",
      students: [
        "Be a Role Model: Inspire other schools and peers to adopt sustainable practices.",
        "Amplify Your Voice: Collaborate with other schools and share experiences.",
      ],
      administrators: [
        "Lead the Pack: Set the bar for sustainability as an early adopter.",
        "Inspire Partnerships: Open doors to collaborations with eco-friendly vendors and organizations.",
      ],
    },
    {
      title: "Gain a Competitive Edge",
      students: [
        "Be the Change-Maker: Show leadership in sustainability for college applications.",
        "Better Food, Better Environment: Improve meal quality and reduce waste.",
      ],
      administrators: [
        "Attract Students and Families: Stand out in the competitive education market.",
        "Boost School Rankings: Attract media attention and recognition.",
      ],
    },
    {
      title: "Join a Movement That Matters",
      students: [
        "Make an Impact: Contribute to real solutions for food waste and climate change.",
        "Build a Legacy: Create lasting improvements in your school's dining program.",
      ],
      administrators: [
        "Lead with Purpose: Align with global sustainability goals.",
        "Future-Proof Your Institution: Prepare for future expectations.",
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      
      <main className="container mx-auto px-4 py-16">
        <div className="max-w-3xl mx-auto mb-16">
          <h1 className="text-4xl font-bold mb-8 text-primary">About Ari</h1>
          
          <div className="prose prose-lg">
            <p className="text-xl leading-relaxed text-gray-700">
              Ari Romanoff, an eighth-grade student at Newark Academy in Livingston, is a dedicated 
              pescetarian with a strong commitment to environmental sustainability. Ari founded the 
              GreenPlate Initiative to promote transparency in school dining services. By developing 
              a structured grading system, the initiative seeks to encourage schools to prioritize 
              health, inclusivity, and sustainability in their food programs.
            </p>
          </div>
        </div>

        <div className="mb-16">
          <h2 className="text-3xl font-bold mb-8 text-center text-primary">Why Join GreenPlate?</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {reasons.map((reason, index) => (
              <Card key={index} className="animate-fade-in" style={{animationDelay: `${index * 0.1}s`}}>
                <CardContent className="p-6">
                  <h3 className="text-2xl font-semibold mb-4 text-primary">{reason.title}</h3>
                  
                  <div className="space-y-6">
                    <div>
                      <h4 className="text-lg font-semibold mb-2 text-secondary">For Students</h4>
                      <ul className="list-disc pl-5 space-y-2">
                        {reason.students.map((item, i) => (
                          <li key={i} className="text-gray-700">{item}</li>
                        ))}
                      </ul>
                    </div>
                    
                    <div>
                      <h4 className="text-lg font-semibold mb-2 text-secondary">For Administrators</h4>
                      <ul className="list-disc pl-5 space-y-2">
                        {reason.administrators.map((item, i) => (
                          <li key={i} className="text-gray-700">{item}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        <ScrollingFact fact="91% of parents support healthier, more sustainable school meals. (Pew Research)" />
        <ScrollingFact fact="Schools with sustainability programs see a 40% increase in community approval. (Education Sustainability Report)" />
      </main>
    </div>
  );
};

export default About;