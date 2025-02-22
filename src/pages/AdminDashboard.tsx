
import { useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import { supabase } from '@/integrations/supabase/client';
import Navigation from '@/components/Navigation';
import { Tabs, TabsList, TabsTrigger } from '@/components/ui/tabs';
import NominationsFilters from '@/components/admin/NominationsFilters';
import NominationsList from '@/components/admin/NominationsList';

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
    let conditions = [];
    
    if (filters.email) {
      conditions.push(`email.ilike.%${filters.email}%`);
    }
    if (filters.name) {
      conditions.push(`name.ilike.%${filters.name}%`);
    }
    if (filters.school) {
      conditions.push(`school.ilike.%${filters.school}%`);
    }
    if (filters.schoolType) {
      conditions.push(`school_type.eq.${filters.schoolType}`);
    }
    if (filters.position) {
      conditions.push(`position.eq.${filters.position}`);
    }
    if (filters.townState) {
      conditions.push(`town_state.ilike.%${filters.townState}%`);
    }

    if (conditions.length > 0) {
      query.or(conditions.join(','));
    }

    return query;
  };

  const { data: studentNominations, isLoading: loadingStudents } = useQuery({
    queryKey: ['studentNominations', filters],
    queryFn: async () => {
      let query = supabase
        .from('student_nominations')
        .select('*')
        .order('created_at', { ascending: false });

      query = buildSearchQuery(query);

      const { data, error } = await query;
      if (error) throw error;
      return data;
    },
  });

  const { data: adminNominations, isLoading: loadingAdmins } = useQuery({
    queryKey: ['adminNominations', filters],
    queryFn: async () => {
      let query = supabase
        .from('admin_nominations')
        .select('*')
        .order('created_at', { ascending: false });

      query = buildSearchQuery(query);

      const { data, error } = await query;
      if (error) throw error;
      return data;
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
          </Tabs>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
