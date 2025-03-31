
import React from 'react';
import { FormField, FormItem, FormLabel, FormControl, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { User, School, Mail } from "lucide-react";

interface NominatorInfoSectionProps {
  control: any;
  validateSchoolEmail: (email: string) => true | string;
}

const NominatorInfoSection = ({ control, validateSchoolEmail }: NominatorInfoSectionProps) => {
  return (
    <>
      <FormField
        control={control}
        name="nominatorName"
        rules={{ required: "Nominator's name is required" }}
        render={({ field }) => (
          <FormItem>
            <FormLabel>Nominator's full name</FormLabel>
            <FormControl>
              <div className="flex items-center">
                <User className="w-4 h-4 mr-2 text-gray-400" />
                <Input {...field} placeholder="e.g. Bob Jonathan" />
              </div>
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />

      <FormField
        control={control}
        name="nominatorSchool"
        rules={{ required: "Nominator's school is required" }}
        render={({ field }) => (
          <FormItem>
            <FormLabel>Nominator's school</FormLabel>
            <FormControl>
              <div className="flex items-center">
                <School className="w-4 h-4 mr-2 text-gray-400" />
                <Input {...field} placeholder="Enter school name" />
              </div>
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />

      <FormField
        control={control}
        name="nominatorPosition"
        rules={{ required: "Nominator's position is required" }}
        render={({ field }) => (
          <FormItem>
            <FormLabel>Nominator's position</FormLabel>
            <Select 
              onValueChange={field.onChange} 
              defaultValue={field.value}
            >
              <FormControl>
                <SelectTrigger className="w-full bg-white">
                  <SelectValue placeholder="Select position" />
                </SelectTrigger>
              </FormControl>
              <SelectContent position="popper" className="bg-white">
                <SelectItem value="teacher">Teacher</SelectItem>
                <SelectItem value="principal">Principal</SelectItem>
                <SelectItem value="admin">Administrator</SelectItem>
                <SelectItem value="counselor">Counselor</SelectItem>
                <SelectItem value="food_service">Food Service Director</SelectItem>
                <SelectItem value="sustainability">Sustainability Coordinator</SelectItem>
                <SelectItem value="other">Other</SelectItem>
              </SelectContent>
            </Select>
            <FormMessage />
          </FormItem>
        )}
      />

      <FormField
        control={control}
        name="nominatorSchoolEmail"
        rules={{ 
          required: "Nominator's school email is required", 
          pattern: {
            value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
            message: "Invalid email address"
          },
          validate: validateSchoolEmail
        }}
        render={({ field }) => (
          <FormItem>
            <FormLabel>Nominator's school email (no personal emails!)</FormLabel>
            <FormControl>
              <div className="flex items-center">
                <Mail className="w-4 h-4 mr-2 text-gray-400" />
                <Input {...field} type="email" placeholder="admin@school.edu" />
              </div>
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />
    </>
  );
};

export default NominatorInfoSection;
