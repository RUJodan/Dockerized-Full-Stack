import React from 'react';
import { useAuth } from 'react-oidc-context';

export const SignupButton: React.FC = () => {
  const auth = useAuth();
  return (
    <button
      className='button__sign-up'
      onClick={async () => {
        auth.signinRedirect();
      }}
    >
      Sign Up
    </button>
  );
};
