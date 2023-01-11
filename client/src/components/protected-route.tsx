import React from 'react';
import { Navigate } from 'react-router-dom';

// hooks
import useSession from '../hooks/useSession';

interface Props {
  children: React.ReactElement;
}

export const ProtectedRoute: React.FC<Props> = ({ children }) => {
  const { session } = useSession();
  if (!session || !session.access_token) {
    return <Navigate to='/login' replace />;
  }

  return children;
};
