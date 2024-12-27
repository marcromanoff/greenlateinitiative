import { CalculatorInputs } from "@/components/calculator/CalculatorForm";

export const calculateSustainabilityMetrics = (data: CalculatorInputs) => {
  const SCHOOL_DAYS = 180; // Average number of school days per year
  const WASTE_REDUCTION_FACTOR = 0.3; // 30% reduction with GreenPlate practices
  const CO2_PER_POUND_WASTE = 0.0022; // Metric tons of CO2 per pound of food waste

  // Convert input values to numbers and handle empty strings
  const mealsPerDay = typeof data.mealsPerDay === 'number' ? data.mealsPerDay : 0;
  const wastePerMeal = typeof data.wastePerMeal === 'number' ? data.wastePerMeal : 0;
  const foodCostPerMeal = typeof data.foodCostPerMeal === 'number' ? data.foodCostPerMeal : 0;

  // Calculate annual waste
  const dailyWaste = mealsPerDay * wastePerMeal / 16; // Convert ounces to pounds
  const annualWaste = dailyWaste * SCHOOL_DAYS;

  // Calculate carbon footprint (in metric tons)
  const carbonFootprint = annualWaste * CO2_PER_POUND_WASTE;

  // Calculate potential savings with a fixed savings multiplier
  const savingsMultiplier = 0.25; // Base savings rate
  const potentialSavings = foodCostPerMeal * mealsPerDay * SCHOOL_DAYS * savingsMultiplier;

  return {
    annualWaste,
    carbonFootprint,
    potentialSavings,
  };
};