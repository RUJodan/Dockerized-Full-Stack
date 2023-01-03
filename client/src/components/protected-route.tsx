import React from 'react';
import { useAuth } from 'react-oidc-context';
import { Navigate } from 'react-router-dom';

interface Props {
  children: JSX.Element;
}

export const ProtectedRoute = ({ children }: Props) => {
  const auth = useAuth();

  if (!auth.isAuthenticated) {
    // user is not authenticated
    auth.removeUser();
    auth.revokeTokens();
    return <Navigate to='/' />;
  }

  return children;
};
