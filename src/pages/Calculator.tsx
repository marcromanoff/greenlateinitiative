import { useState } from "react";
import Navigation from "../components/Navigation";
import { Calculator as CalculatorIcon } from "lucide-react";
import { CalculatorForm, type CalculatorInputs } from "@/components/calculator/CalculatorForm";
import { CalculatorResults } from "@/components/calculator/CalculatorResults";
import { calculateSustainabilityMetrics } from "@/utils/calculatorUtils";
import { useToast } from "@/components/ui/use-toast";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

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

          <Tabs defaultValue="calculator" className="space-y-8">
            <TabsList>
              <TabsTrigger value="calculator">Calculator</TabsTrigger>
              <TabsTrigger value="results">Results</TabsTrigger>
            </TabsList>

            <TabsContent value="calculator">
              <div className="bg-gray-50 p-6 rounded-lg">
                <CalculatorForm onSubmit={handleCalculate} />
              </div>
            </TabsContent>

            <TabsContent value="results">
              {results ? (
                <CalculatorResults {...results} />
              ) : (
                <div className="text-center py-12 text-gray-500">
                  Complete the calculator form to see your potential savings and impact
                </div>
              )}
            </TabsContent>
          </Tabs>
        </div>
      </main>
    </div>
  );
};

export default Calculator;