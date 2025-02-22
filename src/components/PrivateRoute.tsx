
import { Navigate } from 'react-router-dom';
import { useAuth } from '@/contexts/AuthContext';
import type { AppRole } from '@/types/auth';

interface PrivateRouteProps {
  children: React.ReactNode;
  allowedRoles?: AppRole[];
}

const PrivateRoute = ({ children, allowedRoles = [] }: PrivateRouteProps) => {
  const { user, isLoading, roles } = useAuth();

  console.log('PrivateRoute render state:', {
    userId: user?.id,
    isLoading,
    roles,
    allowedRoles,
    hasAccess: allowedRoles.length === 0 || allowedRoles.some(role => roles.includes(role))
  });

  if (isLoading) {
    console.log('PrivateRoute: Loading state...');
    return <div>Loading...</div>;
  }

  if (!user) {
    console.log('PrivateRoute: No user, redirecting to auth');
    return <Navigate to="/auth" replace />;
  }

  if (allowedRoles.length > 0 && !allowedRoles.some(role => roles.includes(role))) {
    console.log('PrivateRoute: User lacks required roles:', {
      userRoles: roles,
      requiredRoles: allowedRoles
    });
    return <Navigate to="/" replace />;
  }

  console.log('PrivateRoute: Access granted', {
    userRoles: roles,
    requiredRoles: allowedRoles
  });
  
  return <>{children}</>;
};

export default PrivateRoute;

