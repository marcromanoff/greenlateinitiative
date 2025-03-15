
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
      return ['user'];
    }

    try {
      console.log('📊 Fetching roles using direct query instead of RPC...');
      
      // Use a direct query to check user roles instead of RPC
      // This avoids potential recursion in RLS policies
      const { data: roleData, error: rolesError } = await supabase
        .from('user_roles')
        .select('role')
        .eq('user_id', userId);

      if (rolesError) {
        console.error('❌ Error checking user roles:', rolesError);
        toast.error('Error checking user permissions. Default to user role.');
        return ['user'];
      }

      if (roleData && roleData.length > 0) {
        // Extract the roles from the response
        const userRoles = roleData.map(r => r.role as AppRole);
        
        // Always include 'user' role as a fallback
        if (!userRoles.includes('user')) {
          userRoles.push('user');
        }
        
        console.log('✅ User roles retrieved:', {
          userId,
          roles: userRoles,
          timestamp: new Date().toISOString()
        });
        
        return userRoles;
      }

      console.log('ℹ️ No roles found, defaulting to user role');
      return ['user'];
    } catch (error) {
      console.error('❌ Error in fetchUserRoles:', error);
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
          toast.error('Failed to load user permissions. Using default role.');
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
  }, [user, fetchUserRoles, setIsLoading]);

  return { roles };
};
