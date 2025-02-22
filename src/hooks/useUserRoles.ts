
import { useState, useCallback, useEffect } from "react";
import { supabase } from "@/integrations/supabase/client";
import type { User } from "@supabase/supabase-js";
import type { AppRole } from "@/types/auth";
import { toast } from "sonner";

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
      
      // First, try to get from user_roles table
      const { data: userRoles, error: rolesError } = await supabase
        .from('user_roles')
        .select('role')
        .eq('user_id', userId);

      if (rolesError) {
        console.error('❌ Error fetching user roles:', rolesError);
        toast.error('Error fetching user roles');
        throw rolesError;
      }

      // Check if any roles were found
      if (!userRoles || userRoles.length === 0) {
        console.log('⚠️ No roles found in database for user:', userId);
        // Default to user role if no roles found
        return ['user'];
      }

      const fetchedRoles = userRoles.map(r => r.role as AppRole);
      console.log('✅ Fetched roles for user:', {
        userId,
        roles: fetchedRoles,
        timestamp: new Date().toISOString()
      });
      return fetchedRoles;

    } catch (error) {
      console.error('❌ Error in fetchUserRoles:', error);
      // Default to user role on error
      return ['user'];
    }
  }, []);

  useEffect(() => {
    let mounted = true;
    console.log('🔄 useUserRoles effect triggered:', { 
      hasUser: !!user,
      userId: user?.id,
      currentRoles: roles 
    });

    const updateRoles = async () => {
      if (!user) {
        console.log('ℹ️ No user, setting empty roles array');
        if (mounted) {
          setRoles([]);
        }
        setIsLoading(false);
        return;
      }

      try {
        const fetchedRoles = await fetchUserRoles(user.id);
        console.log('✨ Fetched roles update:', {
          userId: user.id,
          email: user.email,
          roles: fetchedRoles,
          timestamp: new Date().toISOString()
        });

        if (mounted) {
          setRoles(fetchedRoles);
          console.log('💫 Roles state updated:', fetchedRoles);
        }
      } catch (error) {
        console.error('❌ Error updating roles:', error);
        if (mounted) {
          setRoles(['user']); // Default to user role on error
        }
      } finally {
        if (mounted) {
          setIsLoading(false);
        }
      }
    };

    // Add a small delay to ensure auth is complete
    const timeoutId = setTimeout(() => {
      updateRoles();
    }, 100);

    return () => {
      mounted = false;
      clearTimeout(timeoutId);
    };
  }, [user, fetchUserRoles, setIsLoading, roles]);

  return { roles };
};
