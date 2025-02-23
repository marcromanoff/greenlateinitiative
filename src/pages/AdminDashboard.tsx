
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

  const buildSearchQuery = (query: any) => {
    // Apply each filter individually using .ilike() for text searches
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
      console.log('Fetching student nominations with filters:', filters);
      try {
        let query = supabase
          .from('student_nominations')
          .select('*')
          .order('created_at', { ascending: false });

        query = buildSearchQuery(query);

        const { data, error } = await query;
        if (error) {
          console.error('Error fetching student nominations:', error);
          toast.error('Failed to fetch student nominations');
          throw error;
        }
        console.log('Student nominations fetched:', data?.length);
        return data;
      } catch (error) {
        console.error('Error in student nominations query:', error);
        toast.error('Failed to fetch student nominations');
        return [];
      }
    },
  });

  const { data: adminNominations, isLoading: loadingAdmins } = useQuery({
    queryKey: ['adminNominations', filters],
    queryFn: async () => {
      console.log('Fetching admin nominations with filters:', filters);
      try {
        let query = supabase
          .from('admin_nominations')
          .select('*')
          .order('created_at', { ascending: false });

        query = buildSearchQuery(query);

        const { data, error } = await query;
        if (error) {
          console.error('Error fetching admin nominations:', error);
          toast.error('Failed to fetch admin nominations');
          throw error;
        }
        console.log('Admin nominations fetched:', data?.length);
        return data;
      } catch (error) {
        console.error('Error in admin nominations query:', error);
        toast.error('Failed to fetch admin nominations');
        return [];
      }
    },
  });

  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />
      
      <div className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-6">
            Nominations Dashboard
          </h1>
          
          <NominationsFilters filters={filters} setFilters={setFilters} />

          <div className="space-y-8">
            <NominationsList 
              type="student"
              nominations={studentNominations}
              isLoading={loadingStudents}
            />

            <NominationsList 
              type="admin"
              nominations={adminNominations}
              isLoading={loadingAdmins}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;

