
import { createContext, useContext, useEffect, useState } from "react";
import { supabase } from "@/integrations/supabase/client";
import type { User } from "@supabase/supabase-js";
import type { AppRole } from "@/types/auth";
import { toast } from "sonner";

interface AuthContextType {
  user: User | null;
  isLoading: boolean;
  signOut: () => Promise<void>;
  isAdmin: boolean;
  roles: AppRole[];
}

const AuthContext = createContext<AuthContextType>({
  user: null,
  isLoading: true,
  signOut: async () => {},
  isAdmin: false,
  roles: [],
});

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [user, setUser] = useState<User | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [roles, setRoles] = useState<AppRole[]>([]);

  const fetchUserRoles = async (userId: string): Promise<AppRole[]> => {
    console.log('🔍 Starting fetchUserRoles for userId:', userId);
    
    if (!userId) {
      console.error('❌ ERROR: fetchUserRoles called with an undefined userId. Stack:', new Error().stack);
      return ['user'];
    }

    try {
      console.log('📊 Attempting to fetch roles for user:', userId);
      
      // First try to get all roles directly from user_roles table
      const { data: userRoles, error: rolesError } = await supabase
        .from('user_roles')
        .select('*')  // Changed to select all columns for debugging
        .eq('user_id', userId);

      if (rolesError) {
        console.error('❌ Error fetching user roles:', rolesError);
        throw rolesError;
      }

      console.log('📋 Raw user roles data from database:', JSON.stringify(userRoles, null, 2));

      if (!userRoles || userRoles.length === 0) {
        console.log('⚠️ No roles found in database for user:', userId);
        return ['user'];
      }

      const processedRoles = userRoles.map(r => r.role as AppRole);
      console.log('🔄 Processed roles from DB:', processedRoles);

      // Double check admin role if present
      if (processedRoles.includes('admin')) {
        console.log('🔐 Verifying admin status via has_role function...');
        
        const { data: adminConfirmed, error: fnError } = await supabase
          .rpc('has_role', {
            _user_id: userId,
            _role: 'admin' as AppRole
          });

        console.log('🏷️ has_role function response:', { adminConfirmed, error: fnError });

        if (fnError) {
          console.error('❌ Error from has_role function:', fnError);
          toast.error('Error verifying admin role');
        } else if (!adminConfirmed) {
          console.warn('⚠️ Role mismatch detected: DB shows admin but function check failed');
          return processedRoles.filter(role => role !== 'admin');
        }
      }

      console.log('✅ Final processed roles:', processedRoles);
      return processedRoles;

    } catch (error) {
      console.error('❌ Detailed error in fetchUserRoles:', error);
      toast.error('Failed to fetch user roles');
      return ['user'];
    }
  };

  useEffect(() => {
    let mounted = true;

    const initializeAuth = async () => {
      try {
        console.log('🚀 Starting auth initialization...');
        const { data: { session } } = await supabase.auth.getSession();
        
        if (!mounted) return;

        if (session?.user) {
          console.log('👤 Session found for user:', session.user.email);
          setUser(session.user);
          
          console.log('🔄 Fetching initial roles...');
          const userRoles = await fetchUserRoles(session.user.id);
          console.log('✨ Initial roles set:', userRoles);
          setRoles(userRoles);
        } else {
          console.log('ℹ️ No active session found');
          setUser(null);
          setRoles(['user']);
        }
        
        setIsLoading(false);
      } catch (error) {
        console.error('❌ Error in initializeAuth:', error);
        if (mounted) {
          setIsLoading(false);
          setRoles(['user']);
          toast.error('Error initializing authentication');
        }
      }
    };

    // Run initial auth check
    initializeAuth();

    // Set up auth state listener
    const { data: { subscription } } = supabase.auth.onAuthStateChange(async (event, session) => {
      console.log('🔄 Auth state changed:', {
        event,
        user: session?.user?.email,
        userId: session?.user?.id
      });

      if (!mounted) return;

      if (session?.user) {
        console.log('👤 User session updated:', session.user.email);
        setUser(session.user);
        
        console.log('🔄 Fetching updated roles...');
        const userRoles = await fetchUserRoles(session.user.id);
        console.log('✨ Updated roles:', userRoles);
        setRoles(userRoles);
      } else {
        console.log('👤 No user in updated session');
        setUser(null);
        setRoles(['user']);
      }
      
      setIsLoading(false);
    });

    return () => {
      mounted = false;
      subscription.unsubscribe();
    };
  }, []);

  const signOut = async () => {
    console.log('🚪 Starting sign out process...');
    try {
      setIsLoading(true);
      
      // Clear state immediately
      setUser(null);
      setRoles(['user']);
      
      // Force clear the session from storage
      window.localStorage.removeItem('supabase.auth.token');
      
      // Attempt Supabase signout
      const { error } = await supabase.auth.signOut();
      if (error) {
        console.error('❌ Error signing out:', error);
        throw error;
      }
      
      console.log('✅ Successfully signed out');
      
      // Force a page reload to ensure clean state
      window.location.href = '/auth';
      
    } catch (error) {
      console.error('❌ Detailed sign out error:', error);
      toast.error('Error signing out');
      // Force reload even on error to ensure clean state
      window.location.href = '/auth';
    } finally {
      setIsLoading(false);
    }
  };

  const isAdmin = roles.includes('admin');
  console.log('🔑 Current auth state:', { 
    userId: user?.id,
    email: user?.email, 
    isAdmin,
    roles,
    isLoading
  });

  return (
    <AuthContext.Provider 
      value={{ 
        user, 
        isLoading, 
        signOut,
        roles,
        isAdmin 
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};

