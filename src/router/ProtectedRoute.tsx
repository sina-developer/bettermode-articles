// ProtectedRoute.tsx
import React from 'react';
import { Navigate } from 'react-router-dom';
import { useAuth } from '../providers/auth-provider';

interface ProtectedRouteProps {
  element: React.ReactElement;
  isGaurded?: boolean;
}

const ProtectedRoute: React.FC<ProtectedRouteProps> = ({
  element,
  isGaurded,
}) => {
  const { isAuthenticated } = useAuth();

  if (isGaurded && !isAuthenticated) {
    return <Navigate to='/login' />;
  }

  return element;
};

export default ProtectedRoute;
