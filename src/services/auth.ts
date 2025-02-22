
import { supabase } from "@/integrations/supabase/client";
import { toast } from "sonner";

export const signOut = async () => {
  console.log('🚪 Starting sign out process...');
  try {
    const { error } = await supabase.auth.signOut();
    if (error) throw error;
    
    console.log('✅ Successfully signed out');
    window.location.href = '/auth';
  } catch (error) {
    console.error('❌ Sign out error:', error);
    toast.error('Error signing out');
    throw error;
  }
};
