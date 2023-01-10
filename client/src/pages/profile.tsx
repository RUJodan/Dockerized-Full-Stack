import React from 'react';
import { PageLayout } from '../components/page-layout';
import { Button } from '../components/button';
import { Card } from '../components/card';
import { faHeart } from '@fortawesome/free-solid-svg-icons';

export const Profile: React.FC = () => {
  return (
    <PageLayout>
      <div className='content-layout'>
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
      </div>
    </PageLayout>
  );
};
