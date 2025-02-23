
import { TabsContent } from '@/components/ui/tabs';
import NominationCard from './NominationCard';

interface NominationsListProps {
  type: 'student' | 'admin';
  nominations: any[] | undefined;
  isLoading: boolean;
}

const NominationsList = ({ type, nominations, isLoading }: NominationsListProps) => {
  if (isLoading) {
    return (
      <div className="text-center py-8">
        Loading {type} nominations...
      </div>
    );
  }

  if (!nominations || nominations.length === 0) {
    return (
      <div className="text-center py-8 text-gray-500">
        No {type} nominations found
      </div>
    );
  }

  return (
    <div className="space-y-4">
      <h2 className="text-xl font-semibold capitalize mb-4">
        {type} Nominations
      </h2>
      {nominations.map((nomination) => (
        <NominationCard key={nomination.id} nomination={nomination} />
      ))}
    </div>
  );
};

export default NominationsList;

