
import React from 'react';
import { Form } from "@/components/ui/form";
import FormSection from './components/FormSection';
import UserInfoSection from './components/UserInfoSection';
import NominatorInfoSection from './components/NominatorInfoSection';
import ConsentSection from './components/ConsentSection';
import FormActions from './components/FormActions';

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
        <FormSection title="Your Information">
          <UserInfoSection control={form.control} validateSchoolEmail={validateSchoolEmail} />
        </FormSection>

        <FormSection title="Nominator's Information">
          <NominatorInfoSection control={form.control} validateSchoolEmail={validateSchoolEmail} />
        </FormSection>

        <ConsentSection control={form.control} />

        <FormActions onCancel={onCancel} isSubmitting={isSubmitting} />
      </form>
    </Form>
  );
};

export default NominationForm;
