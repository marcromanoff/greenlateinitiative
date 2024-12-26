import { useState } from "react";
import Navigation from "../components/Navigation";
import { Calculator as CalculatorIcon, Leaf, ChartBar } from "lucide-react";
import { useForm } from "react-hook-form";
import { useToast } from "@/components/ui/use-toast";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

type CalculatorInputs = {
  mealsPerDay: number;
  wastePerMeal: number;
  disposableUtensils: number;
  foodCostPerMeal: number;
};

const Calculator = () => {
  const [results, setResults] = useState<{
    annualWasteSavings: number;
    annualCostSavings: number;
    environmentalImpact: number;
  } | null>(null);
  
  const { toast } = useToast();
  const form = useForm<CalculatorInputs>({
    defaultValues: {
      mealsPerDay: 0,
      wastePerMeal: 0,
      disposableUtensils: 0,
      foodCostPerMeal: 0,
    },
  });

  const calculateSavings = (data: CalculatorInputs) => {
    const schoolDays = 180; // Average number of school days per year
    
    // Calculate annual waste reduction (30% average reduction based on GreenPlate practices)
    const annualWasteSavings = 
      data.wastePerMeal * data.mealsPerDay * schoolDays * 0.3;
    
    // Calculate cost savings (25% average reduction in food waste costs)
    const annualCostSavings = 
      (data.foodCostPerMeal * data.mealsPerDay * schoolDays * 0.25) +
      (data.disposableUtensils * 0.1 * data.mealsPerDay * schoolDays); // 10 cents per utensil saved
    
    // Environmental impact (CO2 equivalent in kg - approximate calculation)
    const environmentalImpact = annualWasteSavings * 2.5; // 2.5 kg CO2 per kg of food waste

    return {
      annualWasteSavings,
      annualCostSavings,
      environmentalImpact,
    };
  };

  const onSubmit = (data: CalculatorInputs) => {
    console.log("Calculator form submitted:", data);
    const savings = calculateSavings(data);
    setResults(savings);
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

            <TabsContent value="calculator" className="space-y-8">
              <div className="bg-gray-50 p-6 rounded-lg">
                <Form {...form}>
                  <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                    <FormField
                      control={form.control}
                      name="mealsPerDay"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Average Meals Served Per Day</FormLabel>
                          <FormControl>
                            <Input type="number" placeholder="0" {...field} 
                              onChange={e => field.onChange(Number(e.target.value))}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="wastePerMeal"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Average Food Waste Per Meal (in ounces)</FormLabel>
                          <FormControl>
                            <Input type="number" placeholder="0" {...field}
                              onChange={e => field.onChange(Number(e.target.value))}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="disposableUtensils"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Disposable Utensils Used Per Day</FormLabel>
                          <FormControl>
                            <Input type="number" placeholder="0" {...field}
                              onChange={e => field.onChange(Number(e.target.value))}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="foodCostPerMeal"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Average Food Cost Per Meal ($)</FormLabel>
                          <FormControl>
                            <Input type="number" placeholder="0" {...field}
                              onChange={e => field.onChange(Number(e.target.value))}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <Button type="submit" className="w-full">
                      Calculate Savings
                    </Button>
                  </form>
                </Form>
              </div>
            </TabsContent>

            <TabsContent value="results">
              {results ? (
                <div className="grid md:grid-cols-3 gap-6">
                  <div className="bg-green-50 p-6 rounded-lg">
                    <div className="flex items-center gap-2 mb-4">
                      <Leaf className="h-6 w-6 text-primary" />
                      <h3 className="text-lg font-semibold">Annual Waste Reduction</h3>
                    </div>
                    <p className="text-3xl font-bold text-primary">
                      {results.annualWasteSavings.toFixed(0)} lbs
                    </p>
                    <p className="text-sm text-gray-600 mt-2">
                      Potential reduction in food waste
                    </p>
                  </div>

                  <div className="bg-green-50 p-6 rounded-lg">
                    <div className="flex items-center gap-2 mb-4">
                      <ChartBar className="h-6 w-6 text-primary" />
                      <h3 className="text-lg font-semibold">Cost Savings</h3>
                    </div>
                    <p className="text-3xl font-bold text-primary">
                      ${results.annualCostSavings.toFixed(0)}
                    </p>
                    <p className="text-sm text-gray-600 mt-2">
                      Estimated annual savings
                    </p>
                  </div>

                  <div className="bg-green-50 p-6 rounded-lg">
                    <div className="flex items-center gap-2 mb-4">
                      <Leaf className="h-6 w-6 text-primary" />
                      <h3 className="text-lg font-semibold">Environmental Impact</h3>
                    </div>
                    <p className="text-3xl font-bold text-primary">
                      {results.environmentalImpact.toFixed(0)} kg
                    </p>
                    <p className="text-sm text-gray-600 mt-2">
                      CO₂ emissions reduced
                    </p>
                  </div>
                </div>
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