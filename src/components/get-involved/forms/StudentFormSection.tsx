
import { useState } from "react";
import { useForm } from "react-hook-form";
import NominationForm from "./NominationForm";
import NominationSection from "../sections/NominationSection";
import { GraduationCap } from "lucide-react";
import { NominationFormValues, useNominationSubmit } from "../hooks/useNominationSubmit";

const StudentFormSection = () => {
  const [showStudentForm, setShowStudentForm] = useState(false);
  const { isSubmitting, handleStudentSubmit } = useNominationSubmit();

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

  const onStudentSubmit = async (values: NominationFormValues) => {
    const success = await handleStudentSubmit(values);
    if (success) {
      setShowStudentForm(false);
      studentForm.reset();
    }
  };

  return (
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
          onSubmit={onStudentSubmit}
          onCancel={() => setShowStudentForm(false)}
          isSubmitting={isSubmitting}
        />
      )}
    </div>
  );
};

export default StudentFormSection;
