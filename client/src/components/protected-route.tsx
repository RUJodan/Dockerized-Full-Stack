import React from 'react';
import { Navigate } from 'react-router-dom';

interface Props {
  children: React.ReactElement;
}

export const ProtectedRoute: React.FC<Props> = ({ children }) => {
  const user = JSON.parse(localStorage.getItem('user') || '');
  if (!user || !user.access_token) {
    return <Navigate to='/login' replace />;
  }

  return children;
};
