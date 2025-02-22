
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
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Label } from '@/components/ui/label';

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
          <h1 className="text-3xl font-bold text-gray-900 mb-6">
            Nominations Dashboard
          </h1>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-6">
            <div>
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                placeholder="Search by email..."
                value={filters.email}
                onChange={(e) => setFilters(prev => ({ ...prev, email: e.target.value }))}
              />
            </div>
            
            <div>
              <Label htmlFor="name">Name</Label>
              <Input
                id="name"
                placeholder="Search by name..."
                value={filters.name}
                onChange={(e) => setFilters(prev => ({ ...prev, name: e.target.value }))}
              />
            </div>
            
            <div>
              <Label htmlFor="school">School</Label>
              <Input
                id="school"
                placeholder="Search by school..."
                value={filters.school}
                onChange={(e) => setFilters(prev => ({ ...prev, school: e.target.value }))}
              />
            </div>
            
            <div>
              <Label htmlFor="schoolType">School Type</Label>
              <Select
                value={filters.schoolType}
                onValueChange={(value) => setFilters(prev => ({ ...prev, schoolType: value }))}
              >
                <SelectTrigger id="schoolType">
                  <SelectValue placeholder="Select school type" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="">All Types</SelectItem>
                  <SelectItem value="public">Public</SelectItem>
                  <SelectItem value="charter">Charter</SelectItem>
                  <SelectItem value="private">Private</SelectItem>
                  <SelectItem value="parochial">Parochial</SelectItem>
                  <SelectItem value="religious">Religious</SelectItem>
                  <SelectItem value="language_immersion">Language Immersion</SelectItem>
                  <SelectItem value="boarding">Boarding</SelectItem>
                  <SelectItem value="other">Other</SelectItem>
                </SelectContent>
              </Select>
            </div>
            
            <div>
              <Label htmlFor="position">Position</Label>
              <Select
                value={filters.position}
                onValueChange={(value) => setFilters(prev => ({ ...prev, position: value }))}
              >
                <SelectTrigger id="position">
                  <SelectValue placeholder="Select position" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="">All Positions</SelectItem>
                  <SelectItem value="student">Student</SelectItem>
                  <SelectItem value="administrator">Administrator</SelectItem>
                  <SelectItem value="parent">Parent</SelectItem>
                  <SelectItem value="other">Other</SelectItem>
                </SelectContent>
              </Select>
            </div>
            
            <div>
              <Label htmlFor="townState">Town and State</Label>
              <Input
                id="townState"
                placeholder="Search by location..."
                value={filters.townState}
                onChange={(e) => setFilters(prev => ({ ...prev, townState: e.target.value }))}
              />
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
    </div>
  );
};

export default AdminDashboard;
