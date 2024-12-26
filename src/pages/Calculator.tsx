import { useState } from "react";
import Navigation from "../components/Navigation";
import { Calculator as CalculatorIcon } from "lucide-react";
import { CalculatorForm, type CalculatorInputs } from "@/components/calculator/CalculatorForm";
import { CalculatorResults } from "@/components/calculator/CalculatorResults";
import { calculateSustainabilityMetrics } from "@/utils/calculatorUtils";
import { useToast } from "@/components/ui/use-toast";

const Calculator = () => {
  const [results, setResults] = useState<{
    annualWaste: number;
    carbonFootprint: number;
    potentialSavings: number;
  } | null>(null);
  
  const { toast } = useToast();

  const handleCalculate = (data: CalculatorInputs) => {
    console.log("Calculator form submitted:", data);
    const metrics = calculateSustainabilityMetrics(data);
    setResults(metrics);
    toast({
      title: "Calculations Complete",
      description: "Your sustainability metrics have been calculated!",
    });
  };

  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      
      <main className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center gap-3 mb-8">
            <CalculatorIcon className="h-8 w-8 text-primary" />
            <h1 className="text-4xl font-bold text-primary">Sustainability Calculator</h1>
          </div>

          <div className="space-y-8">
            <div className="bg-gray-50 p-6 rounded-lg">
              <CalculatorForm onSubmit={handleCalculate} />
            </div>

            {results && <CalculatorResults {...results} />}
          </div>
        </div>
      </main>
    </div>
  );
};

export default Calculator;