
import React from 'react';

interface FormSectionProps {
  title: string;
  children: React.ReactNode;
}

const FormSection = ({ title, children }: FormSectionProps) => {
  return (
    <div className="mb-6 border-b pb-4">
      <h3 className="text-lg font-medium mb-2">{title}</h3>
      {children}
    </div>
  );
};

export default FormSection;
