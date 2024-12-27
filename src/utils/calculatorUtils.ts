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

  // Calculate potential savings
  let savingsMultiplier = 0.25; // Base savings rate
  
  // Adjust savings based on current practices
  if (!data.usesCompostable) savingsMultiplier += 0.05;
  if (!data.usesOrganic) savingsMultiplier += 0.05;
  if (!data.hasRecycling) savingsMultiplier += 0.05;
  if (!data.hasPlantBased) savingsMultiplier += 0.05;

  const potentialSavings = 
    foodCostPerMeal * mealsPerDay * SCHOOL_DAYS * savingsMultiplier;

  return {
    annualWaste,
    carbonFootprint,
    potentialSavings,
  };
};