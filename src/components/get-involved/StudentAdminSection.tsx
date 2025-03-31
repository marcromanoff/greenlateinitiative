
import { useState } from "react";
import { GraduationCap, Clipboard } from "lucide-react";
import { useForm } from "react-hook-form";
import { supabase } from "@/integrations/supabase/client";
import { toast } from "sonner";
import NominationForm from "./forms/NominationForm";
import NominationSection from "./sections/NominationSection";
import { sendConfirmationEmail } from "./utils/emailUtils";

type SchoolType = "public" | "charter" | "private" | "parochial" | "religious" | "language_immersion" | "boarding" | "other";
type PositionType = "student" | "administrator" | "parent" | "other";

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

const StudentAdminSection = () => {
  const [showStudentForm, setShowStudentForm] = useState(false);
  const [showAdminForm, setShowAdminForm] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const studentForm = useForm<NominationFormValues>({
    defaultValues: {
      userNameWithInitial: "",
      userSchool: "",
      userSchoolEmail: "",
      nominatorName: "",
      nominatorSchool: "",
      nominatorPosition: "",
      nominatorSchoolEmail: "",
      consentToDisplay: false
    }
  });

  const adminForm = useForm<NominationFormValues>({
    defaultValues: {
      userNameWithInitial: "",
      userSchool: "",
      userSchoolEmail: "",
      nominatorName: "",
      nominatorSchool: "",
      nominatorPosition: "",
      nominatorSchoolEmail: "",
      consentToDisplay: false
    }
  });

  const handleStudentSubmit = async (values: NominationFormValues) => {
    setIsSubmitting(true);
    try {
      const { error: dbError } = await supabase
        .from("student_nominations")
        .insert({
          email: values.userSchoolEmail,
          name: values.userNameWithInitial,
          school: values.userSchool,
          school_type: "public" as SchoolType, // Default value, could add this back as a field if needed
          school_type_other: null,
          position: "student" as PositionType,
          town_state: `${values.nominatorName} - ${values.nominatorSchool}` // Using this field to store nominator info
        });

      if (dbError) throw dbError;

      await sendConfirmationEmail({
        email: values.userSchoolEmail,
        name: values.userNameWithInitial,
        school: values.userSchool
      });

      toast.success("Student nomination submitted successfully!");
      setShowStudentForm(false);
      studentForm.reset();
    } catch (error: any) {
      console.error("Error in student nomination process:", error);
      toast.error(error.message || "Failed to submit nomination. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleAdminSubmit = async (values: NominationFormValues) => {
    setIsSubmitting(true);
    try {
      const { error: dbError } = await supabase
        .from("admin_nominations")
        .insert({
          email: values.nominatorSchoolEmail,
          name: values.nominatorName,
          school: values.nominatorSchool,
          school_type: "public" as SchoolType, // Default value, could add this back as a field if needed
          school_type_other: null,
          position: values.nominatorPosition as PositionType || "administrator" as PositionType,
          town_state: `Referred by: ${values.userNameWithInitial} - ${values.userSchool}` // Using this field to store referrer info
        });

      if (dbError) throw dbError;

      await sendConfirmationEmail({
        email: values.userSchoolEmail,
        name: values.userNameWithInitial,
        school: values.userSchool
      });

      toast.success("Administrator nomination submitted successfully!");
      setShowAdminForm(false);
      adminForm.reset();
    } catch (error: any) {
      console.error("Error in administrator nomination process:", error);
      toast.error(error.message || "Failed to submit nomination. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="grid md:grid-cols-2 gap-8 mb-16">
      <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-all duration-300">
        {!showStudentForm ? (
          <NominationSection
            title="Quick Start"
            description="Submit an admin's contact info to earn 100 GreenPlate Points and boost your leaderboard rank. The more referrals, the bigger your impact."
            buttonText="Refer Now"
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
            title="GreenPlate Assessment"
            description="Earn 4,000 points and get your school officially scored. Your responses determine your school's sustainability grade—and help push it closer to national recognition and leaderboard dominance."
            buttonText="Start Form"
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
