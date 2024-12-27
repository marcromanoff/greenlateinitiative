import Navigation from "../components/Navigation";
import ScrollingFact from "../components/ScrollingFact";
import GradingScale from "../components/grading/GradingScale";
import GradingExplanation from "../components/grading/GradingExplanation";
import GradingCriteria from "../components/grading/GradingCriteria";

const Grading = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      
      <main className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold mb-8 text-primary">Grading System</h1>
          
          <GradingScale />
          <GradingExplanation />
          <GradingCriteria />
        </div>

        <ScrollingFact fact="1 in 5 children in the U.S. struggles with obesity, but balanced school meals can significantly reduce this risk. (CDC)" />
        <ScrollingFact fact="5.6 million children in the U.S. have food allergies. Clear labeling ensures they stay safe. (FARE)" />
      </main>
    </div>
  );
};

export default Grading;