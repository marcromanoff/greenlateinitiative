
import { useState, useCallback } from "react";
import { supabase } from "@/integrations/supabase/client";
import type { User } from "@supabase/supabase-js";
import type { AppRole } from "@/types/auth";

export const useUserRoles = (user: User | null, setIsLoading: (loading: boolean) => void) => {
  const [roles, setRoles] = useState<AppRole[]>([]);

  const fetchUserRoles = useCallback(async (userId: string): Promise<AppRole[]> => {
    console.log('🔍 Starting fetchUserRoles for userId:', userId);
    
    if (!userId) {
      console.error('❌ No userId provided for fetchUserRoles');
      return [];
    }

    try {
      console.log('📊 Fetching roles from user_roles table...');
      
      const { data: userRoles, error: rolesError } = await supabase
        .from('user_roles')
        .select('role')
        .eq('user_id', userId);

      if (rolesError) {
        console.error('❌ Error fetching user roles:', rolesError);
        throw rolesError;
      }

      if (!userRoles || userRoles.length === 0) {
        console.log('⚠️ No roles found for user:', userId);
        return [];
      }

      const fetchedRoles = userRoles.map(r => r.role as AppRole);
      console.log('✅ Fetched roles:', fetchedRoles);
      return fetchedRoles;

    } catch (error) {
      console.error('❌ Error in fetchUserRoles:', error);
      throw error;
    }
  }, []);

  const updateUserRoles = useCallback(async (currentUser: User | null) => {
    console.log('🔄 Updating roles for user:', currentUser?.email);
    
    if (!currentUser) {
      console.log('ℹ️ No user, setting empty roles array');
      setRoles([]);
      setIsLoading(false);
      return;
    }

    try {
      const fetchedRoles = await fetchUserRoles(currentUser.id);
      console.log('✨ Setting roles for user:', { email: currentUser.email, roles: fetchedRoles });
      setRoles(fetchedRoles);
    } catch (error) {
      console.error('❌ Error updating roles:', error);
      setRoles([]);
    } finally {
      setIsLoading(false);
    }
  }, [fetchUserRoles, setIsLoading]);

  return { roles, updateUserRoles };
};
