
import { createContext, useContext } from "react";
import type { User } from "@supabase/supabase-js";
import type { AppRole } from "@/types/auth";
import { useSupabaseAuth } from "@/hooks/useSupabaseAuth";
import { useUserRoles } from "@/hooks/useUserRoles";
import { signOut as supabaseSignOut } from "@/services/auth";

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
