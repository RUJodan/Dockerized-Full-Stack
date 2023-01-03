import React, { useEffect, useState } from 'react';
import { PageLayout } from '../components/page-layout';
import { getPublicResource } from '../services/api';
import { Card } from '../components/card';

export const Public: React.FC = () => {
  const [message, setMessage] = useState<string>('');

  useEffect(() => {
    let isMounted = true;

    const getMessage = async () => {
      const { data, error } = await getPublicResource();

      if (!isMounted) {
        return;
      }

      if (data) {
        setMessage(JSON.stringify(data, null, 2));
      }

      if (error) {
        setMessage(JSON.stringify(error, null, 2));
      }
    };

    getMessage();

    return () => {
      isMounted = false;
    };
  }, []);

  return (
    <PageLayout>
      <div className='content-layout'>
        <Card title='Public Page'>
          <div>{message}</div>
        </Card>
      </div>
    </PageLayout>
  );
};
