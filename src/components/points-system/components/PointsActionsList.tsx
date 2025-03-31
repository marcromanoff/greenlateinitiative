
import { useState } from 'react';
import { PointsActionItem } from './PointsActionItem';
import { NominationDialog } from './NominationDialog';
import { useNomination, NominationFormValues } from '../hooks/useNomination';

export const PointsActionsList = () => {
  const [isStudentDialogOpen, setIsStudentDialogOpen] = useState(false);
  const [isAdminDialogOpen, setIsAdminDialogOpen] = useState(false);
  const { isSubmitting, handleStudentSubmit, handleAdminSubmit } = useNomination();

  return (
    <ul className="space-y-3">
      <PointsActionItem points={100} description="">
        <NominationDialog
          isOpen={isStudentDialogOpen}
          onOpenChange={setIsStudentDialogOpen}
          onSubmit={handleStudentSubmit}
          title="Quick Start: Refer a School Admin"
          description="Submit an admin's contact info to earn 100 GreenPlate Points and boost your leaderboard rank."
          isSubmitting={isSubmitting}
        >
          <button className="text-left hover:text-primary hover:underline transition-colors text-green-800">
            Refer an administrator/school sustainability contact
          </button>
        </NominationDialog>
      </PointsActionItem>
      
      <PointsActionItem 
        points={4000} 
        additionalInfo="(1,000 <GPSymbol /> for the referrer)"
        description=""
      >
        <NominationDialog
          isOpen={isAdminDialogOpen}
          onOpenChange={setIsAdminDialogOpen}
          onSubmit={handleAdminSubmit}
          title="GreenPlate Assessment"
          description="Earn 4,000 points and get your school officially scored. Your responses determine your school's sustainability grade—and help push it closer to national recognition."
          isSubmitting={isSubmitting}
        >
          <button className="text-left hover:text-primary hover:underline transition-colors text-green-800">
            Complete GreenPlate Assessment
          </button>
        </NominationDialog>
      </PointsActionItem>
      
      <PointsActionItem points={2000} description="Post on Instagram (tag official_greenplate_initiative)" />
      
      <PointsActionItem points={1500} description="Post on Facebook Group about GreenPlate" />
      
      <PointsActionItem points={6000} description="YouTube Explainer Video about GreenPlate" />
      
      <PointsActionItem points={5000} description="Write a Blog or Article about GreenPlate" />
      
      <PointsActionItem points={50000} description="Secure Local News Coverage about GreenPlate" />
      
      <PointsActionItem points={20000} description="Submit a Testimonial Video about GreenPlate" />
    </ul>
  );
};
