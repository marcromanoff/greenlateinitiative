
import { useForm } from "react-hook-form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Form, FormField, FormItem, FormLabel, FormControl, FormMessage } from "@/components/ui/form";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

interface NominationFormValues {
  email: string;
  name: string;
  school: string;
  schoolType: string;
  schoolTypeOther?: string;
  townState: string;
}

interface NominationFormProps {
  form: any;
  onSubmit: (values: NominationFormValues) => Promise<void>;
  onCancel: () => void;
  isSubmitting: boolean;
}

const NominationForm = ({ form, onSubmit, onCancel, isSubmitting }: NominationFormProps) => {
  const schoolType = form.watch("schoolType");

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
        <FormField
          control={form.control}
          name="email"
          rules={{ required: "Email is required", pattern: {
            value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
            message: "Invalid email address"
          }}}
          render={({ field }) => (
            <FormItem>
              <FormLabel>Email</FormLabel>
              <FormControl>
                <Input {...field} type="email" />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="name"
          rules={{ required: "Name is required" }}
          render={({ field }) => (
            <FormItem>
              <FormLabel>Your Name</FormLabel>
              <FormControl>
                <Input {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="school"
          rules={{ required: "School name is required" }}
          render={({ field }) => (
            <FormItem>
              <FormLabel>School Name</FormLabel>
              <FormControl>
                <Input {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="schoolType"
          rules={{ required: "School type is required" }}
          render={({ field }) => (
            <FormItem>
              <FormLabel>School Type</FormLabel>
              <Select onValueChange={field.onChange} value={field.value}>
                <FormControl>
                  <SelectTrigger>
                    <SelectValue placeholder="Select school type" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  <SelectItem value="public">Public</SelectItem>
                  <SelectItem value="charter">Charter</SelectItem>
                  <SelectItem value="private">Private</SelectItem>
                  <SelectItem value="parochial">Parochial</SelectItem>
                  <SelectItem value="religious">Religious</SelectItem>
                  <SelectItem value="language_immersion">Language Immersion</SelectItem>
                  <SelectItem value="boarding">Boarding</SelectItem>
                  <SelectItem value="other">Other</SelectItem>
                </SelectContent>
              </Select>
              <FormMessage />
            </FormItem>
          )}
        />

        {schoolType === "other" && (
          <FormField
            control={form.control}
            name="schoolTypeOther"
            rules={{ required: "Please specify the school type" }}
            render={({ field }) => (
              <FormItem>
                <FormLabel>Specify School Type</FormLabel>
                <FormControl>
                  <Input {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        )}

        <FormField
          control={form.control}
          name="townState"
          rules={{ required: "Town and state are required" }}
          render={({ field }) => (
            <FormItem>
              <FormLabel>Town and State</FormLabel>
              <FormControl>
                <Input {...field} placeholder="e.g., Boston, MA" />
              </FormControl>
              <FormMessage />
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
