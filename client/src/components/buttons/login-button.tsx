import React from 'react';
import { useAuth } from 'react-oidc-context';

export const LoginButton: React.FC = () => {
  const auth = useAuth();
  return (
    <button className='button__login' onClick={() => void auth.signinRedirect()}>
      Log In
    </button>
  );
};
