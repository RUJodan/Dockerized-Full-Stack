import React, { useEffect } from 'react';
import { useAuth } from 'react-oidc-context';
import { useNavigate } from 'react-router-dom';
import { PageLayout } from '../components/page-layout';
import { verifyGoogleToken } from '../services/api';

export function Callback() {
  const auth = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (!auth.isLoading && auth.user?.id_token) {
      // verify token with API
      verifyGoogleToken(auth.user.id_token)
        .then(async (response) => {
          if (!response?.data?.authenticated || response.error) {
            await auth.removeUser();
            await auth.revokeTokens();
          }

          navigate('/');
        })
        .catch((error) => {
          console.error(error);
        });
    }
  }, [auth.isLoading, auth.user?.access_token]);

  return (
    <PageLayout>
      <div className='content-layout'>
        <h1 id='page-title' className='content__title'>
          <div>Signing in...</div>
        </h1>
      </div>
    </PageLayout>
  );
}
