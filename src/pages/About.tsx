import Navigation from "../components/Navigation";
import ScrollingFact from "../components/ScrollingFact";

const About = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      
      <main className="container mx-auto px-4 py-16">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-4xl font-bold mb-8 text-primary">About Me</h1>
          
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

        <ScrollingFact fact="91% of parents support healthier, more sustainable school meals. (Pew Research)" />
        <ScrollingFact fact="Schools with sustainability programs see a 40% increase in community approval. (Education Sustainability Report)" />
      </main>
    </div>
  );
};

export default About;