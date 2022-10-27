import React from 'react';
import { useAuth } from 'react-oidc-context';

export const LogoutButton: React.FC = () => {
  const auth = useAuth();
  return (
    <button className='button__logout' onClick={() => void auth.removeUser()}>
      Log Out
    </button>
  );
};
