
import { useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import { supabase } from '@/integrations/supabase/client';
import Navigation from '@/components/Navigation';
import { Tabs, TabsList, TabsTrigger } from '@/components/ui/tabs';
import NominationsFilters from '@/components/admin/NominationsFilters';
import NominationsList from '@/components/admin/NominationsList';
import { toast } from 'sonner';

const AdminDashboard = () => {
  const [filters, setFilters] = useState({
    email: '',
    name: '',
    school: '',
    schoolType: '',
    position: '',
    townState: ''
  });
  const [activeTab, setActiveTab] = useState<'student' | 'admin'>('student');

  const buildSearchQuery = (query: any) => {
    console.log('Building search query with filters:', filters);
    if (filters.email) {
      query = query.ilike('email', `%${filters.email.toLowerCase()}%`);
    }
    if (filters.name) {
      query = query.ilike('name', `%${filters.name}%`);
    }
    if (filters.school) {
      query = query.ilike('school', `%${filters.school}%`);
    }
    if (filters.schoolType && filters.schoolType !== 'all') {
      query = query.eq('school_type', filters.schoolType);
    }
    if (filters.position && filters.position !== 'all') {
      query = query.eq('position', filters.position);
    }
    if (filters.townState) {
      query = query.ilike('town_state', `%${filters.townState}%`);
    }
    return query;
  };

  const { data: studentNominations, isLoading: loadingStudents } = useQuery({
    queryKey: ['studentNominations', filters],
    queryFn: async () => {
      console.log('Fetching student nominations...');
      try {
        let query = supabase
          .from('student_nominations')
          .select('*')
          .order('created_at', { ascending: false });

        query = buildSearchQuery(query);
        
        const { data, error } = await query;
        
        if (error) {
          console.error('Error fetching student nominations:', error);
          toast.error('Error fetching student nominations');
          throw error;
        }
        
        console.log('Student nominations fetched successfully:', data?.length);
        return data;
      } catch (error: any) {
        console.error('Error in student nominations query:', error);
        toast.error(`Failed to fetch student nominations: ${error.message}`);
        return [];
      }
    },
  });

  const { data: adminNominations, isLoading: loadingAdmins } = useQuery({
    queryKey: ['adminNominations', filters],
    queryFn: async () => {
      console.log('Fetching admin nominations...');
      try {
        let query = supabase
          .from('admin_nominations')
          .select('*')
          .order('created_at', { ascending: false });

        query = buildSearchQuery(query);
        
        const { data, error } = await query;
        
        if (error) {
          console.error('Error fetching admin nominations:', error);
          toast.error('Error fetching admin nominations');
          throw error;
        }
        
        console.log('Admin nominations fetched successfully:', data?.length);
        return data;
      } catch (error: any) {
        console.error('Error in admin nominations query:', error);
        toast.error(`Failed to fetch admin nominations: ${error.message}`);
        return [];
      }
    },
  });

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#DBE6F6] via-[#E8F4E2] to-[#F2FAFC]">
      <Navigation />
      
      <div className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-6">
            Nominations Dashboard
          </h1>
          
          <NominationsFilters filters={filters} setFilters={setFilters} />

          <Tabs value={activeTab} onValueChange={(value) => setActiveTab(value as 'student' | 'admin')}>
            <TabsList className="mb-4">
              <TabsTrigger value="student">
                Student Nominations
              </TabsTrigger>
              <TabsTrigger value="admin">
                Administrator Nominations
              </TabsTrigger>
            </TabsList>

            <NominationsList 
              type="student"
              value="student"
              nominations={studentNominations}
              isLoading={loadingStudents}
            />

            <NominationsList 
              type="admin"
              value="admin"
              nominations={adminNominations}
              isLoading={loadingAdmins}
            />
          </Tabs>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
