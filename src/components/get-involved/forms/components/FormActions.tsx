
import React from 'react';
import { Button } from "@/components/ui/button";

interface FormActionsProps {
  onCancel: () => void;
  isSubmitting: boolean;
}

const FormActions = ({ onCancel, isSubmitting }: FormActionsProps) => {
  return (
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
  );
};

export default FormActions;
