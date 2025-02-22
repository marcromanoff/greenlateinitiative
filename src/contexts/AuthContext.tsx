
import { createContext, useContext, useEffect } from "react";
import type { User } from "@supabase/supabase-js";
import type { AppRole } from "@/types/auth";
import { useSupabaseAuth } from "@/hooks/useSupabaseAuth";
import { useUserRoles } from "@/hooks/useUserRoles";
import { signOut as supabaseSignOut } from "@/services/auth";
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
  const { user, isLoading, setIsLoading } = useSupabaseAuth();
  const { roles } = useUserRoles(user, setIsLoading);

  const signOut = async () => {
    setIsLoading(true);
    try {
      await supabaseSignOut();
    } catch (error) {
      console.error('Error signing out:', error);
      toast.error('Failed to sign out');
    } finally {
      setIsLoading(false);
    }
  };

  // Directly compute isAdmin from roles
  const isAdmin = roles.includes('admin');

  // Log state changes
  useEffect(() => {
    console.log('🔐 Auth state updated:', { 
      userId: user?.id,
      email: user?.email, 
      isAdmin,
      roles,
      isLoading,
      timestamp: new Date().toISOString()
    });
  }, [user, isAdmin, roles, isLoading]);

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
