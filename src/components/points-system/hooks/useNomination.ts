
import { useState } from 'react';
import { supabase } from "@/integrations/supabase/client";
import { toast } from "sonner";
import { sendConfirmationEmail } from "@/components/get-involved/utils/emailUtils";

type SchoolType = "public" | "charter" | "private" | "parochial" | "religious" | "language_immersion" | "boarding" | "other";
type PositionType = "student" | "administrator" | "parent" | "other";

export interface NominationFormValues {
  userNameWithInitial: string;
  userSchool: string;
  userSchoolEmail: string;
  nominatorName: string;
  nominatorSchool: string;
  nominatorPosition: string;
  nominatorSchoolEmail: string;
  consentToDisplay: boolean;
}

export const useNomination = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleStudentSubmit = async (values: NominationFormValues) => {
    setIsSubmitting(true);
    try {
      const { error: dbError } = await supabase
        .from("student_nominations")
        .insert({
          email: values.userSchoolEmail,
          name: values.userNameWithInitial,
          school: values.userSchool,
          school_type: "public" as SchoolType, // Default value
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
      return true;
    } catch (error: any) {
      console.error("Error in student nomination process:", error);
      toast.error(error.message || "Failed to submit nomination. Please try again.");
      return false;
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
          school_type: "public" as SchoolType, // Default value
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
      return true;
    } catch (error: any) {
      console.error("Error in administrator nomination process:", error);
      toast.error(error.message || "Failed to submit nomination. Please try again.");
      return false;
    } finally {
      setIsSubmitting(false);
    }
  };

  return {
    isSubmitting,
    handleStudentSubmit,
    handleAdminSubmit
  };
};
