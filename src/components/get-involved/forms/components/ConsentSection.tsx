
import React from 'react';
import { FormField, FormItem, FormLabel, FormControl, FormMessage } from "@/components/ui/form";
import { Checkbox } from "@/components/ui/checkbox";

interface ConsentSectionProps {
  control: any;
}

const ConsentSection = ({ control }: ConsentSectionProps) => {
  return (
    <FormField
      control={control}
      name="consentToDisplay"
      rules={{ required: "You must consent to continue" }}
      render={({ field }) => (
        <FormItem className="flex flex-row items-start space-x-3 space-y-0 rounded-md border p-4">
          <FormControl>
            <Checkbox
              checked={field.value}
              onCheckedChange={field.onChange}
            />
          </FormControl>
          <div className="space-y-1 leading-none">
            <FormLabel>
              I confirm that I permit GreenPlate Initiative to publicly display my score, first name, last initial, and school.
              <span className="block text-sm text-gray-500 mt-1">ex. Tim K. from School Academy 1,000 points</span>
            </FormLabel>
            <FormMessage />
          </div>
        </FormItem>
      )}
    />
  );
};

export default ConsentSection;
