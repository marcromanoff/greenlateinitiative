
import { useState } from "react";
import { GraduationCap, Clipboard } from "lucide-react";
import { useForm } from "react-hook-form";
import { supabase } from "@/integrations/supabase/client";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Form, FormField, FormItem, FormLabel, FormControl, FormMessage } from "@/components/ui/form";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { toast } from "sonner";

interface NominationFormValues {
  email: string;
  name: string;
  school: string;
  schoolType: string;
  schoolTypeOther?: string;
  position: string;
  positionOther?: string;
  townState: string;
}

const StudentAdminSection = () => {
  const [showStudentForm, setShowStudentForm] = useState(false);
  const [showAdminForm, setShowAdminForm] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const studentForm = useForm<NominationFormValues>({
    defaultValues: {
      email: "",
      name: "",
      school: "",
      schoolType: "",
      position: "",
      townState: ""
    }
  });

  const adminForm = useForm<NominationFormValues>({
    defaultValues: {
      email: "",
      name: "",
      school: "",
      schoolType: "",
      position: "",
      townState: ""
    }
  });

  const handleStudentSubmit = async (values: NominationFormValues) => {
    setIsSubmitting(true);
    try {
      const { error } = await supabase
        .from("student_nominations")
        .insert({
          email: values.email,
          name: values.name,
          school: values.school,
          school_type: values.schoolType as any,
          school_type_other: values.schoolType === "other" ? values.schoolTypeOther : null,
          position: values.position as any,
          position_other: values.position === "other" ? values.positionOther : null,
          town_state: values.townState
        });

      if (error) throw error;

      toast.success("Student nomination submitted successfully!");
      setShowStudentForm(false);
      studentForm.reset();
    } catch (error) {
      console.error("Error submitting student nomination:", error);
      toast.error("Failed to submit nomination. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleAdminSubmit = async (values: NominationFormValues) => {
    setIsSubmitting(true);
    try {
      const { error } = await supabase
        .from("admin_nominations")
        .insert({
          email: values.email,
          name: values.name,
          school: values.school,
          school_type: values.schoolType as any,
          school_type_other: values.schoolType === "other" ? values.schoolTypeOther : null,
          position: values.position as any,
          position_other: values.position === "other" ? values.positionOther : null,
          town_state: values.townState
        });

      if (error) throw error;

      toast.success("Administrator nomination submitted successfully!");
      setShowAdminForm(false);
      adminForm.reset();
    } catch (error) {
      console.error("Error submitting administrator nomination:", error);
      toast.error("Failed to submit nomination. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const NominationForm = ({ form, onSubmit, onCancel }: { 
    form: any;
    onSubmit: (values: NominationFormValues) => Promise<void>;
    onCancel: () => void;
  }) => {
    const schoolType = form.watch("schoolType");
    const position = form.watch("position");

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
            name="position"
            rules={{ required: "Position is required" }}
            render={({ field }) => (
              <FormItem>
                <FormLabel>Your Position</FormLabel>
                <Select onValueChange={field.onChange} value={field.value}>
                  <FormControl>
                    <SelectTrigger>
                      <SelectValue placeholder="Select your position" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    <SelectItem value="student">Student</SelectItem>
                    <SelectItem value="administrator">Administrator</SelectItem>
                    <SelectItem value="parent">Parent</SelectItem>
                    <SelectItem value="other">Other</SelectItem>
                  </SelectContent>
                </Select>
                <FormMessage />
              </FormItem>
            )}
          />

          {position === "other" && (
            <FormField
              control={form.control}
              name="positionOther"
              rules={{ required: "Please specify your position" }}
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Specify Position</FormLabel>
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

  return (
    <div className="grid md:grid-cols-2 gap-8 mb-16">
      <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-all duration-300">
        <h2 className="text-2xl font-semibold mb-4">For students</h2>
        {!showStudentForm ? (
          <>
            <p className="text-gray-700 mb-6">
              Nominate Your School for the GreenPlate Challenge. Put a spotlight on your school's sustainability efforts and make a real impact!
            </p>
            <div className="flex flex-col gap-4">
              <button
                onClick={() => setShowStudentForm(true)}
                className="inline-flex items-center justify-center gap-2 bg-primary text-white px-6 py-3 rounded-lg hover:bg-primary/90 transition-all duration-300"
              >
                <GraduationCap className="w-5 h-5" />
                <span>Student Nomination Form</span>
              </button>
              <p className="text-sm text-gray-600 text-center">
                Start making a difference at your school
              </p>
              <div className="mt-4 space-y-2">
                <div className="relative h-48 rounded-lg overflow-hidden">
                  <img 
                    src="/lovable-uploads/b1242c21-9120-419b-992a-f60f8e53669a.png"
                    alt="Plant-based jackfruit dish with rice and vegetables"
                    className="object-cover w-full h-full"
                  />
                </div>
                <p className="text-sm text-gray-500 italic">Photo credit: The Jackfruit Company</p>
              </div>
            </div>
          </>
        ) : (
          <NominationForm 
            form={studentForm} 
            onSubmit={handleStudentSubmit}
            onCancel={() => setShowStudentForm(false)}
          />
        )}
      </div>
      
      <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-all duration-300">
        <h2 className="text-2xl font-semibold mb-4">For Administrators</h2>
        {!showAdminForm ? (
          <>
            <p className="text-gray-700 mb-6">
              Join the GreenPlate Program. Showcase your school's commitment to health, sustainability, and the future.
            </p>
            <div className="flex flex-col gap-4">
              <button
                onClick={() => setShowAdminForm(true)}
                className="inline-flex items-center justify-center gap-2 bg-primary text-white px-6 py-3 rounded-lg hover:bg-primary/90 transition-all duration-300"
              >
                <Clipboard className="w-5 h-5" />
                <span>Administrator Nomination Form</span>
              </button>
              <p className="text-sm text-gray-600 text-center">
                Lead your school towards sustainability
              </p>
              <div className="mt-4 space-y-2">
                <div className="relative h-48 rounded-lg overflow-hidden">
                  <img 
                    src="/lovable-uploads/c0d754a9-3d47-4199-bf02-8ff636da57c2.png"
                    alt="Plant-based hot dog with vegetables"
                    className="object-cover w-full h-full"
                  />
                </div>
                <p className="text-sm text-gray-500 italic">Photo credit: Beyond Meat Inc.</p>
              </div>
            </div>
          </>
        ) : (
          <NominationForm 
            form={adminForm}
            onSubmit={handleAdminSubmit}
            onCancel={() => setShowAdminForm(false)}
          />
        )}
      </div>
    </div>
  );
};

export default StudentAdminSection;

