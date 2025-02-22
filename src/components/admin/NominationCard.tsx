
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';

interface NominationCardProps {
  nomination: {
    id: string;
    name: string;
    created_at: string;
    email: string;
    school: string;
    school_type: string;
    school_type_other?: string;
    position: string;
    position_other?: string;
    town_state: string;
  };
}

export const formatDate = (dateString: string) => {
  return new Date(dateString).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
};

const NominationCard = ({ nomination }: NominationCardProps) => (
  <Card className="mb-4">
    <CardHeader>
      <CardTitle>{nomination.name}</CardTitle>
      <CardDescription>
        Submitted on {formatDate(nomination.created_at)}
      </CardDescription>
    </CardHeader>
    <CardContent>
      <div className="grid gap-2">
        <div>
          <strong>Email:</strong> {nomination.email}
        </div>
        <div>
          <strong>School:</strong> {nomination.school}
        </div>
        <div>
          <strong>School Type:</strong>{' '}
          {nomination.school_type === 'other'
            ? nomination.school_type_other
            : nomination.school_type}
        </div>
        <div>
          <strong>Position:</strong>{' '}
          {nomination.position === 'other'
            ? nomination.position_other
            : nomination.position}
        </div>
        <div>
          <strong>Location:</strong> {nomination.town_state}
        </div>
      </div>
    </CardContent>
  </Card>
);

export default NominationCard;
