
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
      console.log('📊 Fetching roles using rpc...');
      
      // Use our has_role function to check admin status (using SECURITY DEFINER)
      const { data: isAdmin, error: adminCheckError } = await supabase
        .rpc('has_role', { 
          _user_id: userId,
          _role: 'admin'
        });

      if (adminCheckError) {
        console.error('❌ Error checking admin role:', adminCheckError);
        return ['user'];
      }

      if (isAdmin) {
        console.log('✅ User is admin:', {
          userId,
          timestamp: new Date().toISOString()
        });
        return ['admin', 'user'];
      }

      console.log('ℹ️ User is not admin, defaulting to user role');
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
