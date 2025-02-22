
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
      console.error('❌ No userId provided for fetchUserRoles');
      return ['user'];
    }

    try {
      console.log('📊 Fetching roles from user_roles table...');
      
      const { data: userRoles, error: rolesError } = await supabase
        .from('user_roles')
        .select('role')
        .eq('user_id', userId);

      if (rolesError) {
        console.error('❌ Error fetching user roles:', rolesError);
        return ['user'];
      }

      if (!userRoles || userRoles.length === 0) {
        console.log('⚠️ No roles found, defaulting to user role');
        return ['user'];
      }

      const roles = userRoles.map(r => r.role as AppRole);
      console.log('✅ Fetched roles:', roles);

      return roles;

    } catch (error) {
      console.error('❌ Error in fetchUserRoles:', error);
      return ['user'];
    }
  };

  // Function to handle role updates
  const updateUserRoles = async (currentUser: User | null) => {
    console.log('🔄 Updating roles for user:', currentUser?.email);
    
    if (!currentUser) {
      console.log('ℹ️ No user, setting default role');
      setRoles(['user']);
      return;
    }

    try {
      const fetchedRoles = await fetchUserRoles(currentUser.id);
      console.log('✨ Setting roles:', fetchedRoles);
      setRoles(fetchedRoles);
    } catch (error) {
      console.error('❌ Error updating roles:', error);
      setRoles(['user']);
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
          await updateUserRoles(session.user);
        } else {
          console.log('ℹ️ No active session found');
          setUser(null);
          setRoles(['user']);
        }
      } catch (error) {
        console.error('❌ Error in initializeAuth:', error);
        if (mounted) {
          setRoles(['user']);
        }
      } finally {
        if (mounted) {
          setIsLoading(false);
        }
      }
    };

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
        await updateUserRoles(session.user);
      } else {
        console.log('👤 No user in updated session');
        setUser(null);
        setRoles(['user']);
      }
      
      setIsLoading(false);
    });

    // Run initial auth check
    initializeAuth();

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
      
      // Attempt Supabase signout
      const { error } = await supabase.auth.signOut();
      if (error) throw error;
      
      console.log('✅ Successfully signed out');
      window.location.href = '/auth';
      
    } catch (error) {
      console.error('❌ Sign out error:', error);
      toast.error('Error signing out');
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
