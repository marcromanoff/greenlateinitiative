
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
    
    try {
      // First check admin role using has_role function
      const { data: isAdminRole, error: fnError } = await supabase
        .rpc('has_role', {
          _user_id: userId,
          _role: 'admin' as AppRole
        });

      if (fnError) {
        console.error('❌ Error checking admin role:', fnError);
        throw fnError;
      }

      console.log('✅ has_role function result for admin:', isAdminRole);

      // If has_role returns true, we know the user is an admin
      if (isAdminRole) {
        console.log('🎉 User confirmed as admin via has_role function');
        return ['admin' as AppRole];
      }

      // If not admin, fetch all roles directly
      const { data: userRoles, error: rolesError } = await supabase
        .from('user_roles')
        .select('role')
        .eq('user_id', userId);

      if (rolesError) {
        console.error('❌ Error fetching user roles:', rolesError);
        throw rolesError;
      }

      console.log('📋 User roles from database:', userRoles);

      if (!userRoles || userRoles.length === 0) {
        console.log('ℹ️ No roles found for user, defaulting to user role');
        return ['user' as AppRole]; // Default role
      }

      const processedRoles = userRoles.map(r => r.role as AppRole);
      console.log('✨ Processed roles:', processedRoles);
      return processedRoles;

    } catch (error) {
      console.error('❌ Error in fetchUserRoles:', error);
      toast.error('Failed to fetch user roles');
      return ['user' as AppRole]; // Default to user role on error
    }
  };

  useEffect(() => {
    // Check active sessions and sets the user
    supabase.auth.getSession().then(({ data: { session } }) => {
      console.log('🔄 Initial session check:', session?.user ?? 'No user');
      setUser(session?.user ?? null);
      if (session?.user) {
        fetchUserRoles(session.user.id).then(fetchedRoles => {
          console.log('👥 Setting initial roles:', fetchedRoles);
          setRoles(fetchedRoles);
        });
      } else {
        console.log('👤 No user session, setting default role');
        setRoles(['user' as AppRole]); // Default role for logged out users
      }
      setIsLoading(false);
    });

    // Listen for changes on auth state
    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange(async (_event, session) => {
      console.log('🔄 Auth state changed:', session?.user ?? 'No user');
      setUser(session?.user ?? null);
      if (session?.user) {
        const userRoles = await fetchUserRoles(session.user.id);
        console.log('👥 Setting updated roles:', userRoles);
        setRoles(userRoles);
      } else {
        console.log('👤 User logged out, setting default role');
        setRoles(['user' as AppRole]);
      }
      setIsLoading(false);
    });

    return () => subscription.unsubscribe();
  }, []);

  const signOut = async () => {
    console.log('🚪 Starting sign out process...');
    try {
      // Force clear the session from storage first
      window.localStorage.removeItem('supabase.auth.token');
      
      // Clear state immediately
      setUser(null);
      setRoles(['user' as AppRole]);
      
      // Then attempt Supabase signout
      const { error } = await supabase.auth.signOut();
      if (error) {
        console.error("❌ Error signing out:", error);
        throw error;
      }
      
      console.log('✅ Successfully signed out from Supabase');
      
      // Force a page reload to ensure clean state
      window.location.href = '/auth';
      
    } catch (error) {
      console.error('❌ Detailed sign out error:', error);
      // Even if there's an error, we want to force a clean state
      window.location.href = '/auth';
      throw error;
    }
  };

  const isAdmin = roles.includes('admin');
  console.log('🔑 Current auth state:', { 
    user: !!user, 
    isAdmin, 
    roles,
    userId: user?.id,
    email: user?.email 
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

