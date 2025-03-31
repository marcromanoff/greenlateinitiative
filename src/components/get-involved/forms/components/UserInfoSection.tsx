
import React from 'react';
import { FormField, FormItem, FormLabel, FormControl, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { User, School, Mail } from "lucide-react";

interface UserInfoSectionProps {
  control: any;
  validateSchoolEmail: (email: string) => true | string;
}

const UserInfoSection = ({ control, validateSchoolEmail }: UserInfoSectionProps) => {
  return (
    <>
      <FormField
        control={control}
        name="userNameWithInitial"
        rules={{ required: "Your name with initial is required" }}
        render={({ field }) => (
          <FormItem>
            <FormLabel>Your first name last initial</FormLabel>
            <FormControl>
              <div className="flex items-center">
                <User className="w-4 h-4 mr-2 text-gray-400" />
                <Input {...field} placeholder="e.g. Ari R." />
              </div>
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />

      <FormField
        control={control}
        name="userSchool"
        rules={{ required: "Your school name is required" }}
        render={({ field }) => (
          <FormItem>
            <FormLabel>Your school</FormLabel>
            <FormControl>
              <div className="flex items-center">
                <School className="w-4 h-4 mr-2 text-gray-400" />
                <Input {...field} placeholder="Enter your school name" />
              </div>
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />

      <FormField
        control={control}
        name="userSchoolEmail"
        rules={{ 
          required: "Your school email is required", 
          pattern: {
            value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
            message: "Invalid email address"
          },
          validate: validateSchoolEmail
        }}
        render={({ field }) => (
          <FormItem>
            <FormLabel>Your school email (no personal emails!)</FormLabel>
            <FormControl>
              <div className="flex items-center">
                <Mail className="w-4 h-4 mr-2 text-gray-400" />
                <Input {...field} type="email" placeholder="school@school.edu" />
              </div>
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />
    </>
  );
};

export default UserInfoSection;
