
import { Navigate } from 'react-router-dom';
import { useAuth } from '@/contexts/AuthContext';
import type { AppRole } from '@/types/auth';

interface PrivateRouteProps {
  children: React.ReactNode;
  allowedRoles?: AppRole[];
}

const PrivateRoute = ({ children, allowedRoles = [] }: PrivateRouteProps) => {
  const { user, isLoading, roles } = useAuth();

  console.log('🔒 PrivateRoute render:', {
    isAuthenticated: !!user,
    userEmail: user?.email,
    userRoles: roles,
    allowedRoles,
    isLoading,
    hasAccess: allowedRoles.length === 0 || allowedRoles.some(role => roles.includes(role))
  });

  if (isLoading) {
    console.log('⌛ PrivateRoute: Loading state...');
    return <div className="flex items-center justify-center min-h-screen">
      <div className="text-lg">Loading...</div>
    </div>;
  }

  if (!user) {
    console.log('🚫 PrivateRoute: No user, redirecting to auth');
    return <Navigate to="/auth" replace />;
  }

  const hasAccess = allowedRoles.length === 0 || allowedRoles.some(role => roles.includes(role));
  
  console.log('🔑 Access check:', {
    userRoles: roles,
    requiredRoles: allowedRoles,
    hasAccess
  });

  if (!hasAccess) {
    console.log('🚫 PrivateRoute: Access denied');
    return <Navigate to="/" replace />;
  }

  console.log('✅ PrivateRoute: Access granted');
  return <>{children}</>;
};

export default PrivateRoute;
