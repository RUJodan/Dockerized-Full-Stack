import React, { useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import { useAuth } from 'react-oidc-context';
import { Navigate, useNavigate } from 'react-router-dom';
import { InfinitySpin } from 'react-loader-spinner';
import { PageLayout } from '../components/page-layout';
import { getUser } from '../services/api';
import { User } from '../models/user';
import { Button } from '../components/button';
import { Card } from '../components/card';
import { faHeart } from '@fortawesome/free-solid-svg-icons';

export const Profile: React.FC = () => {
  const auth = useAuth();
  const navigate = useNavigate();
  const [user, setUser] = useState<User | undefined>(undefined);
  const [userActivated, setUserActivated] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    let isMounted = true;
    const getUserFromApi = async (userId: string | undefined, token: string | undefined) => {
      const { data, error } = await getUser(userId, token);

      if (!isMounted) {
        return;
      }

      if (data) {
        setUser(data as User);
        setUserActivated(data.activated);
      }

      if (error) {
        console.log(error);
        toast(`${error.message}`);
        navigate('/');
      }
    };

    if (auth.user?.id_token && auth?.user?.profile.sub) {
      getUserFromApi(auth?.user?.profile.sub, auth.user?.id_token);
    }

    setLoading(false);

    return () => {
      isMounted = false;
    };
  }, [auth.user]);

  if (!auth.isAuthenticated) {
    return <Navigate to='/' />;
  }

  return (
    <PageLayout>
      <div className='content-layout'>
        {loading && (
          <div className='content-loading'>
            <InfinitySpin width='200' color='#fff' />
          </div>
        )}
        {!loading && (
          <Card title='Small Buttons'>
            <div>
              <Button
                size='sm'
                variant='primary'
                onClick={() => console.log('click')}
                text='Button'
                icon={faHeart}
                iconPlacement='start'
              />
              <Button
                disabled
                size='sm'
                variant='primary'
                onClick={() => console.log('click')}
                text='Button'
                icon={faHeart}
                iconPlacement='end'
              />
            </div>
            <div>
              <Button
                size='sm'
                variant='secondary'
                onClick={() => console.log('click')}
                text='Button'
                icon={faHeart}
                iconPlacement='start'
              />
              <Button
                disabled
                size='sm'
                variant='secondary'
                onClick={() => console.log('click')}
                text='Button'
                icon={faHeart}
                iconPlacement='end'
              />
            </div>
            <div>
              <Button
                size='sm'
                variant='tertiary'
                onClick={() => console.log('click')}
                text='Button'
                icon={faHeart}
                iconPlacement='start'
              />
              <Button
                disabled
                size='sm'
                variant='tertiary'
                onClick={() => console.log('click')}
                text='Button'
                icon={faHeart}
                iconPlacement='end'
              />
            </div>
          </Card>
        )}
      </div>
    </PageLayout>
  );
};
