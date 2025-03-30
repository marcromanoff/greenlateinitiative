import React, { useState } from 'react';
import { GraduationCap } from "lucide-react";
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
  const [isStudentDialogOpen, setIsStudentDialogOpen] = useState(false);
  const [isAdminDialogOpen, setIsAdminDialogOpen] = useState(false);
  const studentForm = useForm<NominationFormValues>({
    defaultValues: {
      email: "",
      name: "",
      school: "",
      schoolType: "public",
      townState: ""
    }
  });
  const adminForm = useForm<NominationFormValues>({
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
      const {
        error: dbError
      } = await supabase.from("student_nominations").insert({
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
      setIsStudentDialogOpen(false);
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
      const {
        error: dbError
      } = await supabase.from("admin_nominations").insert({
        email: values.email,
        name: values.name,
        school: values.school,
        school_type: values.schoolType as SchoolType,
        school_type_other: values.schoolType === "other" ? values.schoolTypeOther : null,
        position: "administrator" as PositionType,
        town_state: values.townState
      });
      if (dbError) throw dbError;
      await sendConfirmationEmail(values);
      toast.success("Administrator nomination submitted successfully!");
      setIsAdminDialogOpen(false);
      adminForm.reset();
    } catch (error: any) {
      console.error("Error in administrator nomination process:", error);
      toast.error(error.message || "Failed to submit nomination. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };
  return <Card className="overflow-hidden">
      <div className="bg-primary text-white p-4 flex items-center gap-3">
        <GraduationCap className="h-6 w-6" />
        <h2 className="text-xl font-semibold">Advocate Actions</h2>
      </div>
      <CardContent className="pt-6">
        <ul className="space-y-3">
          <li className="flex items-start gap-2 bg-green-50 rounded-md p-2">
            <Badge variant="outline" className="mt-1 bg-green-50">100 <GPSymbol /></Badge>
            <Dialog open={isStudentDialogOpen} onOpenChange={setIsStudentDialogOpen}>
              <DialogTrigger asChild>
                <button className="text-left hover:text-primary hover:underline transition-colors text-green-800">
                  Submit a verified school contact
                </button>
              </DialogTrigger>
              <DialogContent className="sm:max-w-md">
                <div className="p-4">
                  <h2 className="text-xl font-bold mb-4">Quick Start: Refer a School Admin</h2>
                  <p className="mb-4 text-sm text-gray-600">
                    Submit an admin's contact info to earn 100 GreenPlate Points and boost your leaderboard rank.
                  </p>
                  <NominationForm form={studentForm} onSubmit={handleStudentSubmit} onCancel={() => setIsStudentDialogOpen(false)} isSubmitting={isSubmitting} />
                </div>
              </DialogContent>
            </Dialog>
          </li>
          <li className="flex items-start gap-2 bg-green-50 rounded-md p-2">
            <Badge variant="outline" className="mt-1 bg-green-50">4,000 <GPSymbol /></Badge>
            <Dialog open={isAdminDialogOpen} onOpenChange={setIsAdminDialogOpen}>
              <DialogTrigger asChild>
                <button className="text-left hover:text-primary hover:underline transition-colors text-green-800">Complete GreenPlate Assessment</button>
              </DialogTrigger>
              <DialogContent className="sm:max-w-md">
                <div className="p-4">
                  <h2 className="text-xl font-bold mb-4">GreenPlate Assessment</h2>
                  <p className="mb-4 text-sm text-gray-600">
                    Earn 4,000 points and get your school officially scored. Your responses determine your school's sustainability grade—and help push it closer to national recognition.
                  </p>
                  <NominationForm form={adminForm} onSubmit={handleAdminSubmit} onCancel={() => setIsAdminDialogOpen(false)} isSubmitting={isSubmitting} />
                </div>
              </DialogContent>
            </Dialog>
            <span className="text-sm text-gray-500">(1,000 <GPSymbol /> for the referrer)</span>
          </li>
          
          <li className="flex items-start gap-2">
            <Badge variant="outline" className="mt-1 bg-green-50">2,000 <GPSymbol /></Badge>
            <span>Post on Instagram (tag official_greenplate_initiative)</span>
          </li>
          <li className="flex items-start gap-2">
            <Badge variant="outline" className="mt-1 bg-green-50">1,500 <GPSymbol /></Badge>
            <span>Post on Facebook Group about GreenPlate</span>
          </li>
          <li className="flex items-start gap-2">
            <Badge variant="outline" className="mt-1 bg-green-50">6,000 <GPSymbol /></Badge>
            <span>YouTube Explainer Video about GreenPlate</span>
          </li>
          <li className="flex items-start gap-2">
            <Badge variant="outline" className="mt-1 bg-green-50">5,000 <GPSymbol /></Badge>
            <span>Write a Blog or Article about GreenPlate</span>
          </li>
          <li className="flex items-start gap-2">
            <Badge variant="outline" className="mt-1 bg-green-50">50,000 <GPSymbol /></Badge>
            <span>Secure Local News Coverage about GreenPlate</span>
          </li>
          <li className="flex items-start gap-2">
            <Badge variant="outline" className="mt-1 bg-green-50">20,000 <GPSymbol /></Badge>
            <span>Submit a Testimonial Video about GreenPlate</span>
          </li>
        </ul>
      </CardContent>
    </Card>;
};
export default NominationPointsCard;