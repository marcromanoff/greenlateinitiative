
import React, { useState } from 'react';
import { Upload } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import GPSymbol from './GPSymbol';
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { useForm } from "react-hook-form";
import NominationForm from '../get-involved/forms/NominationForm';
import { supabase } from "@/integrations/supabase/client";
import { toast } from "sonner";
import { sendConfirmationEmail } from "../get-involved/utils/emailUtils";

type SchoolType = "public" | "charter" | "private" | "parochial" | "religious" | "language_immersion" | "boarding" | "other";
type PositionType = "student" | "administrator" | "parent" | "other";

interface NominationFormValues {
  email: string;
  name: string;
  school: string;
  schoolType: SchoolType;
  schoolTypeOther?: string;
  townState: string;
}

const NominationPointsCard = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const form = useForm<NominationFormValues>({
    defaultValues: {
      email: "",
      name: "",
      school: "",
      schoolType: "public",
      townState: ""
    }
  });

  const handleStudentSubmit = async (values: NominationFormValues) => {
    setIsSubmitting(true);
    try {
      const { error: dbError } = await supabase
        .from("student_nominations")
        .insert({
          email: values.email,
          name: values.name,
          school: values.school,
          school_type: values.schoolType as SchoolType,
          school_type_other: values.schoolType === "other" ? values.schoolTypeOther : null,
          position: "student" as PositionType,
          town_state: values.townState
        });

      if (dbError) throw dbError;

      await sendConfirmationEmail(values);

      toast.success("Student nomination submitted successfully!");
      setIsDialogOpen(false);
      form.reset();
    } catch (error: any) {
      console.error("Error in student nomination process:", error);
      toast.error(error.message || "Failed to submit nomination. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };
  
  return (
    <Card className="overflow-hidden">
      <div className="bg-primary text-white p-4 flex items-center gap-3">
        <Upload className="h-6 w-6" />
        <h2 className="text-xl font-semibold">Nominate a School</h2>
      </div>
      <CardContent className="pt-6">
        <ul className="space-y-3">
          <li className="flex items-start gap-2">
            <Badge variant="outline" className="mt-1 bg-green-50">100 <GPSymbol /></Badge>
            <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
              <DialogTrigger asChild>
                <button className="text-left hover:text-primary hover:underline transition-colors">
                  Submit a verified school contact
                </button>
              </DialogTrigger>
              <DialogContent className="sm:max-w-md">
                <div className="p-4">
                  <h2 className="text-xl font-bold mb-4">Quick Start: Refer a School Admin</h2>
                  <p className="mb-4 text-sm text-gray-600">
                    Submit an admin's contact info to earn 100 GreenPlate Points and boost your leaderboard rank.
                  </p>
                  <NominationForm 
                    form={form} 
                    onSubmit={handleStudentSubmit}
                    onCancel={() => setIsDialogOpen(false)}
                    isSubmitting={isSubmitting}
                  />
                </div>
              </DialogContent>
            </Dialog>
          </li>
          <li className="flex items-start gap-2">
            <Badge variant="outline" className="mt-1 bg-green-50">4,000 <GPSymbol /></Badge>
            <span>School completes assessment <span className="text-sm text-gray-500">(1,000 <GPSymbol /> for the referrer)</span></span>
          </li>
          <li className="flex items-start gap-2">
            <Badge variant="outline" className="mt-1 bg-green-50">10,000 <GPSymbol /></Badge>
            <span>School joins officially</span>
          </li>
        </ul>
      </CardContent>
    </Card>
  );
};

export default NominationPointsCard;
