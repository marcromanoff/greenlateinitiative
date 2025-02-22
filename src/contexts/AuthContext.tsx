
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

  const fetchUserRoles = async (userId: string) => {
    console.log('Starting fetchUserRoles for userId:', userId);
    
    try {
      // First try to verify if the user has admin role using the has_role function
      const { data: hasAdminRole, error: fnError } = await supabase
        .rpc('has_role', {
          _user_id: userId,
          _role: 'admin'
        });

      if (fnError) {
        console.error('Error checking admin role:', fnError);
        throw fnError;
      }

      console.log('has_role function result:', hasAdminRole);

      // Direct query to user_roles table with detailed logging
      const { data: roleData, error: queryError } = await supabase
        .from("user_roles")
        .select("*");  // Select all columns for debugging

      console.log('Full user_roles query result:', roleData);
      
      // Now try with the user_id filter
      const { data: userRoles, error: filteredError } = await supabase
        .from("user_roles")
        .select("*")
        .eq("user_id", userId);

      if (filteredError) {
        console.error('Error fetching filtered user roles:', filteredError);
        throw filteredError;
      }

      console.log('Filtered user roles for current user:', userRoles);
      
      if (!userRoles || userRoles.length === 0) {
        console.log('No roles found for user in database');
        return [];
      }

      const processedRoles = userRoles.map((r) => r.role as AppRole);
      console.log('Processed user roles:', processedRoles);
      return processedRoles;
      
    } catch (error) {
      console.error('Error in fetchUserRoles:', error);
      toast.error('Failed to fetch user roles');
      return [];
    }
  };

  useEffect(() => {
    // Check active sessions and sets the user
    supabase.auth.getSession().then(({ data: { session } }) => {
      console.log('Initial session check:', session?.user ?? 'No user');
      setUser(session?.user ?? null);
      if (session?.user) {
        fetchUserRoles(session.user.id).then(setRoles);
      } else {
        setRoles([]);
      }
      setIsLoading(false);
    });

    // Listen for changes on auth state
    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange(async (_event, session) => {
      console.log('Auth state changed:', session?.user ?? 'No user');
      setUser(session?.user ?? null);
      if (session?.user) {
        const userRoles = await fetchUserRoles(session.user.id);
        setRoles(userRoles);
      } else {
        setRoles([]);
      }
      setIsLoading(false);
    });

    return () => subscription.unsubscribe();
  }, []);

  const signOut = async () => {
    console.log('Starting sign out process...');
    try {
      // Force clear the session from storage first
      window.localStorage.removeItem('supabase.auth.token');
      
      // Clear state immediately
      setUser(null);
      setRoles([]);
      
      // Then attempt Supabase signout
      const { error } = await supabase.auth.signOut();
      if (error) {
        console.error("Error signing out:", error);
        throw error;
      }
      
      console.log('Successfully signed out from Supabase');
      
      // Force a page reload to ensure clean state
      window.location.href = '/auth';
      
    } catch (error) {
      console.error('Detailed sign out error:', error);
      // Even if there's an error, we want to force a clean state
      window.location.href = '/auth';
      throw error;
    }
  };

  const isAdmin = roles.includes('admin');
  console.log('Current auth state:', { 
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

