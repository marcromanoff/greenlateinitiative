
import { useState } from "react";
import { useForm } from "react-hook-form";
import NominationForm from "./NominationForm";
import NominationSection from "../sections/NominationSection";
import { Clipboard } from "lucide-react";
import { NominationFormValues, useNominationSubmit } from "../hooks/useNominationSubmit";

const AdminFormSection = () => {
  const [showAdminForm, setShowAdminForm] = useState(false);
  const { isSubmitting, handleAdminSubmit } = useNominationSubmit();

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

  const onAdminSubmit = async (values: NominationFormValues) => {
    const success = await handleAdminSubmit(values);
    if (success) {
      setShowAdminForm(false);
      adminForm.reset();
    }
  };

  return (
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
          onSubmit={onAdminSubmit}
          onCancel={() => setShowAdminForm(false)}
          isSubmitting={isSubmitting}
        />
      )}
    </div>
  );
};

export default AdminFormSection;
