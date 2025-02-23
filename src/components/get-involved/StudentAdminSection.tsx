
import { useState } from "react";
import { GraduationCap, Clipboard } from "lucide-react";
import { useForm } from "react-hook-form";
import { supabase } from "@/integrations/supabase/client";
import { toast } from "sonner";
import NominationForm from "./forms/NominationForm";
import NominationSection from "./sections/NominationSection";
import { sendConfirmationEmail } from "./utils/emailUtils";

interface NominationFormValues {
  email: string;
  name: string;
  school: string;
  schoolType: string;
  schoolTypeOther?: string;
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
      townState: ""
    }
  });

  const adminForm = useForm<NominationFormValues>({
    defaultValues: {
      email: "",
      name: "",
      school: "",
      schoolType: "",
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
          position: 'student' as any,
          town_state: values.townState
        });

      if (error) throw error;

      await sendConfirmationEmail(values);

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
          position: 'administrator' as any,
          town_state: values.townState
        });

      if (error) throw error;

      await sendConfirmationEmail(values);

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

  return (
    <div className="grid md:grid-cols-2 gap-8 mb-16">
      <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-all duration-300">
        {!showStudentForm ? (
          <NominationSection
            title="For students"
            description="Nominate Your School for the GreenPlate Challenge. Put a spotlight on your school's sustainability efforts and make a real impact!"
            buttonText="Student Nomination Form"
            Icon={GraduationCap}
            onButtonClick={() => setShowStudentForm(true)}
            imageSrc="/lovable-uploads/b1242c21-9120-419b-992a-f60f8e53669a.png"
            imageAlt="Plant-based jackfruit dish with rice and vegetables"
            imageCredit="Photo credit: The Jackfruit Company"
          />
        ) : (
          <NominationForm 
            form={studentForm} 
            onSubmit={handleStudentSubmit}
            onCancel={() => setShowStudentForm(false)}
            isSubmitting={isSubmitting}
          />
        )}
      </div>
      
      <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-all duration-300">
        {!showAdminForm ? (
          <NominationSection
            title="For Administrators"
            description="Join the GreenPlate Program. Showcase your school's commitment to health, sustainability, and the future."
            buttonText="Administrator Nomination Form"
            Icon={Clipboard}
            onButtonClick={() => setShowAdminForm(true)}
            imageSrc="/lovable-uploads/c0d754a9-3d47-4199-bf02-8ff636da57c2.png"
            imageAlt="Plant-based hot dog with vegetables"
            imageCredit="Photo credit: Beyond Meat Inc."
          />
        ) : (
          <NominationForm 
            form={adminForm}
            onSubmit={handleAdminSubmit}
            onCancel={() => setShowAdminForm(false)}
            isSubmitting={isSubmitting}
          />
        )}
      </div>
    </div>
  );
};

export default StudentAdminSection;
