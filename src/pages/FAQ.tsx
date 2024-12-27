import Navigation from "../components/Navigation";
import ScrollingFact from "../components/ScrollingFact";
import FAQSection from "../components/faq/FAQSection";

const FAQ = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      
      <main className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold mb-8 text-primary">Frequently Asked Questions</h1>
          
          <ScrollingFact fact="Students with access to healthier school meals are 25% more likely to perform better academically. (CDC)" />

          <FAQSection />
        </div>
      </main>
    </div>
  );
};

export default FAQ;