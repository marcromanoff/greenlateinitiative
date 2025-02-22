
import { useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import { supabase } from '@/integrations/supabase/client';
import Navigation from '@/components/Navigation';
import { Input } from '@/components/ui/input';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Search } from 'lucide-react';

const AdminDashboard = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [activeTab, setActiveTab] = useState<'student' | 'admin'>('student');

  const { data: studentNominations, isLoading: loadingStudents } = useQuery({
    queryKey: ['studentNominations', searchTerm],
    queryFn: async () => {
      const query = supabase
        .from('student_nominations')
        .select('*')
        .order('created_at', { ascending: false });

      if (searchTerm) {
        query.or(`name.ilike.%${searchTerm}%,school.ilike.%${searchTerm}%,email.ilike.%${searchTerm}%`);
      }

      const { data, error } = await query;
      if (error) throw error;
      return data;
    },
  });

  const { data: adminNominations, isLoading: loadingAdmins } = useQuery({
    queryKey: ['adminNominations', searchTerm],
    queryFn: async () => {
      const query = supabase
        .from('admin_nominations')
        .select('*')
        .order('created_at', { ascending: false });

      if (searchTerm) {
        query.or(`name.ilike.%${searchTerm}%,school.ilike.%${searchTerm}%,email.ilike.%${searchTerm}%`);
      }

      const { data, error } = await query;
      if (error) throw error;
      return data;
    },
  });

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    });
  };

  const NominationCard = ({ nomination }: { nomination: any }) => (
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

  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />
      
      <div className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">
            Nominations Dashboard
          </h1>
          <div className="relative">
            <Input
              type="text"
              placeholder="Search by name, school, or email..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10"
            />
            <Search className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
          </div>
        </div>

        <Tabs
          value={activeTab}
          onValueChange={(value) => setActiveTab(value as 'student' | 'admin')}
        >
          <TabsList className="mb-4">
            <TabsTrigger value="student">
              Student Nominations
            </TabsTrigger>
            <TabsTrigger value="admin">
              Administrator Nominations
            </TabsTrigger>
          </TabsList>

          <TabsContent value="student">
            {loadingStudents ? (
              <div>Loading...</div>
            ) : studentNominations?.length === 0 ? (
              <div className="text-center py-8 text-gray-500">
                No student nominations found
              </div>
            ) : (
              studentNominations?.map((nomination) => (
                <NominationCard key={nomination.id} nomination={nomination} />
              ))
            )}
          </TabsContent>

          <TabsContent value="admin">
            {loadingAdmins ? (
              <div>Loading...</div>
            ) : adminNominations?.length === 0 ? (
              <div className="text-center py-8 text-gray-500">
                No administrator nominations found
              </div>
            ) : (
              adminNominations?.map((nomination) => (
                <NominationCard key={nomination.id} nomination={nomination} />
              ))
            )}
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default AdminDashboard;

