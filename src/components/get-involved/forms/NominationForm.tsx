
import { useForm } from "react-hook-form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Form, FormField, FormItem, FormLabel, FormControl, FormMessage } from "@/components/ui/form";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { School, Mail, User } from "lucide-react";

interface NominationFormValues {
  userNameWithInitial: string;
  userSchool: string;
  userSchoolEmail: string;
  nominatorName: string;
  nominatorSchool: string;
  nominatorPosition: string;
  nominatorSchoolEmail: string;
  consentToDisplay: boolean;
}

interface NominationFormProps {
  form: any;
  onSubmit: (values: NominationFormValues) => Promise<void>;
  onCancel: () => void;
  isSubmitting: boolean;
}

const NominationForm = ({ form, onSubmit, onCancel, isSubmitting }: NominationFormProps) => {
  const validateSchoolEmail = (email: string) => {
    // Common school email domains
    const schoolDomains = ['.edu', '.k12', '.school', '.sch', '.ac'];
    // Personal email domains to block
    const personalDomains = ['@gmail.com', '@yahoo.com', '@hotmail.com', '@outlook.com', '@aol.com', '@icloud.com'];
    
    // Check if email contains any personal domains
    const isPersonalEmail = personalDomains.some(domain => email.toLowerCase().endsWith(domain));
    if (isPersonalEmail) {
      return "Please use a school email address, not a personal one";
    }
    
    // Check if email likely contains a school domain
    const isLikelySchoolEmail = schoolDomains.some(domain => email.toLowerCase().includes(domain));
    if (!isLikelySchoolEmail) {
      return "This doesn't appear to be a school email. Please use your school email address";
    }
    
    return true;
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
        <div className="mb-6 border-b pb-4">
          <h3 className="text-lg font-medium mb-2">Your Information</h3>
          
          <FormField
            control={form.control}
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
            control={form.control}
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
            control={form.control}
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
        </div>

        <div className="mb-6 border-b pb-4">
          <h3 className="text-lg font-medium mb-2">Nominator's Information</h3>
          
          <FormField
            control={form.control}
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
            control={form.control}
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
            control={form.control}
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
            control={form.control}
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
        </div>

        <FormField
          control={form.control}
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

        <div className="flex gap-4 pt-4">
          <Button 
            type="button" 
            variant="outline"
            onClick={onCancel}
          >
            Cancel
          </Button>
          <Button 
            type="submit"
            disabled={isSubmitting}
          >
            Submit Nomination
          </Button>
        </div>
      </form>
    </Form>
  );
};

export default NominationForm;
