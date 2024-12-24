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
              I'm Ari Romanoff, an eighth-grade student at Newark Academy in Livingston. 
              As a pescetarian who cares deeply about the environment, I created the 
              GreenPlate Initiative to bring transparency to school dining services. 
              Through a structured grading system, I aim to inspire schools to prioritize 
              health, inclusivity, and sustainability.
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