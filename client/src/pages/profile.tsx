import React, { useEffect, useState } from 'react';
import { InfinitySpin } from 'react-loader-spinner';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import { toast } from 'react-toastify';

// local imports
import { PageLayout } from '../components/page-layout';
import { Button } from '../components/button';
import { Card } from '../components/card';
import { Overlay } from '../components/overlay';

// services
import { getUser } from '../services/get-user';

// models
import { User } from '../models/user';

// hooks
import useSession from '../hooks/useSession';

export const Profile: React.FC = () => {
  const { session } = useSession();
  const [user, setUser] = useState<User | undefined>();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getUserProfile = async () => {
      const response = await getUser(session.id, session.access_token);
      setUser(response.data as User);
      setLoading(false);
    };

    getUserProfile().catch((error) => toast(error));
  }, []);

  if (!loading && user) {
    return (
      <PageLayout>
        <div className='content-layout'>
          <Card title={user?.username} singleCard>
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
        </div>
      </PageLayout>
    );
  }

  return (
    <PageLayout>
      <div className='content-layout'>
        <Overlay>
          <InfinitySpin color='#7368ee' />
        </Overlay>
      </div>
    </PageLayout>
  );
};
