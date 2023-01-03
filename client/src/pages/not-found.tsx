import React from 'react';
import { PageLayout } from '../components/page-layout';

export const NotFound: React.FC = () => {
  return (
    <PageLayout>
      <div className='content-layout'>
        <h1 id='page-title' className='content-title'>
          Not Found
        </h1>
      </div>
    </PageLayout>
  );
};
