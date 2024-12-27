import { Form, FormControl, FormField, FormItem, FormLabel } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import { useForm } from "react-hook-form";

export type CalculatorInputs = {
  mealsPerDay: number | '';
  wastePerMeal: number | '';
  foodCostPerMeal: number | '';
  usesCompostable: boolean;
  usesOrganic: boolean;
  hasRecycling: boolean;
  hasPlantBased: boolean;
};

interface CalculatorFormProps {
  onSubmit: (data: CalculatorInputs) => void;
}

export const CalculatorForm = ({ onSubmit }: CalculatorFormProps) => {
  const form = useForm<CalculatorInputs>({
    defaultValues: {
      mealsPerDay: '',
      wastePerMeal: '',
      foodCostPerMeal: 3.50,
      usesCompostable: false,
      usesOrganic: false,
      hasRecycling: false,
      hasPlantBased: false,
    },
  });

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
        <div className="space-y-6 bg-white p-6 rounded-lg shadow-sm">
          <h3 className="text-lg font-semibold text-primary mb-4">1. Inputs</h3>
          
          <FormField
            control={form.control}
            name="mealsPerDay"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Meals Served</FormLabel>
                <FormControl>
                  <Input
                    type="number"
                    placeholder="Enter number of meals"
                    {...field}
                    onChange={(e) => field.onChange(Number(e.target.value))}
                  />
                </FormControl>
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="wastePerMeal"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Waste per Meal (in ounces)</FormLabel>
                <FormControl>
                  <Input
                    type="number"
                    placeholder="Enter waste amount"
                    {...field}
                    onChange={(e) => field.onChange(Number(e.target.value))}
                  />
                </FormControl>
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="foodCostPerMeal"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Food Cost Per Meal ($)</FormLabel>
                <FormControl>
                  <Input
                    type="number"
                    placeholder="Enter cost per meal"
                    {...field}
                    onChange={(e) => field.onChange(Number(e.target.value))}
                    defaultValue={3.50}
                  />
                </FormControl>
              </FormItem>
            )}
          />
        </div>

        <div className="space-y-4 bg-white p-6 rounded-lg shadow-sm">
          <h3 className="text-lg font-semibold text-primary">Current Sustainability Practices</h3>
          
          <FormField
            control={form.control}
            name="usesCompostable"
            render={({ field }) => (
              <FormItem className="flex items-center space-x-2">
                <FormControl>
                  <Checkbox
                    checked={field.value}
                    onCheckedChange={field.onChange}
                  />
                </FormControl>
                <FormLabel className="!mt-0">Compostable Utensils/Dishes</FormLabel>
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="usesOrganic"
            render={({ field }) => (
              <FormItem className="flex items-center space-x-2">
                <FormControl>
                  <Checkbox
                    checked={field.value}
                    onCheckedChange={field.onChange}
                  />
                </FormControl>
                <FormLabel className="!mt-0">Organic or Locally Sourced Ingredients</FormLabel>
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="hasRecycling"
            render={({ field }) => (
              <FormItem className="flex items-center space-x-2">
                <FormControl>
                  <Checkbox
                    checked={field.value}
                    onCheckedChange={field.onChange}
                  />
                </FormControl>
                <FormLabel className="!mt-0">Recycling and Composting Programs</FormLabel>
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="hasPlantBased"
            render={({ field }) => (
              <FormItem className="flex items-center space-x-2">
                <FormControl>
                  <Checkbox
                    checked={field.value}
                    onCheckedChange={field.onChange}
                  />
                </FormControl>
                <FormLabel className="!mt-0">Plant-Based Meal Options</FormLabel>
              </FormItem>
            )}
          />
        </div>

        <button
          type="submit"
          className="w-full bg-primary text-white px-4 py-2 rounded hover:bg-primary/90 transition-colors"
        >
          Calculate GreenScore
        </button>
      </form>
    </Form>
  );
};