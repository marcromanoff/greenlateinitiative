
import { TabsContent } from '@/components/ui/tabs';
import NominationCard from './NominationCard';

interface NominationsListProps {
  type: 'student' | 'admin';
  nominations: any[] | undefined;
  isLoading: boolean;
}

const NominationsList = ({ type, nominations, isLoading }: NominationsListProps) => {
  return (
    <TabsContent value={type}>
      {isLoading ? (
        <div>Loading...</div>
      ) : nominations?.length === 0 ? (
        <div className="text-center py-8 text-gray-500">
          No {type} nominations found
        </div>
      ) : (
        nominations?.map((nomination) => (
          <NominationCard key={nomination.id} nomination={nomination} />
        ))
      )}
    </TabsContent>
  );
};

export default NominationsList;
