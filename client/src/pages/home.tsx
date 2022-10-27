import React from 'react';
import { PageLayout } from '../components/page-layout';
import { useAuth } from 'react-oidc-context';

export const Home: React.FC = () => {
  const auth = useAuth();

  return (
    <PageLayout>
      <div className='content-layout'>
        <h1 id='page-title' className='content__title'>
          Home Page
        </h1>
        <div className='content__body'>
          {auth.isAuthenticated && (
            <div>
              Hello {auth.user?.profile.sub} {auth.user?.profile.email}
            </div>
          )}
        </div>
      </div>
    </PageLayout>
  );
};
