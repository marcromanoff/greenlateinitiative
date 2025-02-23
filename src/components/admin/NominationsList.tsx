
import { TabsContent } from '@/components/ui/tabs';
import NominationCard from './NominationCard';

interface NominationsListProps {
  type: 'student' | 'admin';
  nominations: any[] | undefined;
  isLoading: boolean;
  value: string;
}

const NominationsList = ({ type, nominations, isLoading, value }: NominationsListProps) => {
  return (
    <TabsContent value={value}>
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
