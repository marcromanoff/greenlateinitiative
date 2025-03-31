
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import NominationForm from '@/components/get-involved/forms/NominationForm';
import { useForm } from "react-hook-form";
import { ReactNode } from "react";
import { NominationFormValues } from "../hooks/useNomination";

interface NominationDialogProps {
  isOpen: boolean;
  onOpenChange: (open: boolean) => void;
  onSubmit: (values: NominationFormValues) => Promise<void>;
  title: string;
  description: string;
  children: ReactNode;
  isSubmitting: boolean;
}

export const NominationDialog = ({
  isOpen,
  onOpenChange,
  onSubmit,
  title,
  description,
  children,
  isSubmitting
}: NominationDialogProps) => {
  const form = useForm<NominationFormValues>({
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

  const handleSubmit = async (values: NominationFormValues) => {
    const success = await onSubmit(values);
    if (success) {
      onOpenChange(false);
      form.reset();
    }
  };

  return (
    <Dialog open={isOpen} onOpenChange={onOpenChange}>
      <DialogTrigger asChild>
        {children}
      </DialogTrigger>
      <DialogContent className="sm:max-w-md">
        <div className="p-4">
          <h2 className="text-xl font-bold mb-4">{title}</h2>
          <p className="mb-4 text-sm text-gray-600">
            {description}
          </p>
          <NominationForm 
            form={form} 
            onSubmit={handleSubmit} 
            onCancel={() => onOpenChange(false)} 
            isSubmitting={isSubmitting} 
          />
        </div>
      </DialogContent>
    </Dialog>
  );
};
