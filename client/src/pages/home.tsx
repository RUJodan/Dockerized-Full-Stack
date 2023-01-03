import React from 'react';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import { PageLayout } from '../components/page-layout';
import { useAuth } from 'react-oidc-context';
import { Button } from '../components/button';
import { TextInput } from '../components/text-input';
import { Checkbox } from '../components/checkbox';
import { Radio } from '../components/radio';
import { Card } from '../components/card';
import { SelectWrapper } from '../components/select';

const options = [
  { value: 'chocolate', label: 'Chocolate' },
  { value: 'strawberry', label: 'Strawberry' },
  { value: 'vanilla', label: 'Vanilla' },
];

export const Home: React.FC = () => {
  const auth = useAuth();

  return (
    <PageLayout>
      <div className='content-layout'>
        <div className='content-body'>
          {auth.isAuthenticated && (
            <div className='cards'>
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
              {/* md */}
              <Card title='Medium Buttons'>
                <div>
                  <Button
                    size='md'
                    variant='primary'
                    onClick={() => console.log('click')}
                    text='Button'
                    icon={faHeart}
                    iconPlacement='start'
                  />
                  <Button
                    disabled
                    size='md'
                    variant='primary'
                    onClick={() => console.log('click')}
                    text='Button'
                    icon={faHeart}
                    iconPlacement='end'
                  />
                </div>
                <div>
                  <Button
                    size='md'
                    variant='secondary'
                    onClick={() => console.log('click')}
                    text='Button'
                    icon={faHeart}
                    iconPlacement='start'
                  />
                  <Button
                    disabled
                    size='md'
                    variant='secondary'
                    onClick={() => console.log('click')}
                    text='Button'
                    icon={faHeart}
                    iconPlacement='end'
                  />
                </div>
                <div>
                  <Button
                    size='md'
                    variant='tertiary'
                    onClick={() => console.log('click')}
                    text='Button'
                    icon={faHeart}
                    iconPlacement='start'
                  />
                  <Button
                    disabled
                    size='md'
                    variant='tertiary'
                    onClick={() => console.log('click')}
                    text='Button'
                    icon={faHeart}
                    iconPlacement='end'
                  />
                </div>
              </Card>
              {/* lg */}
              <Card title='Large Buttons'>
                <div>
                  <Button
                    size='lg'
                    variant='primary'
                    onClick={() => console.log('click')}
                    text='Button'
                    icon={faHeart}
                    iconPlacement='start'
                  />
                  <Button
                    disabled
                    size='lg'
                    variant='primary'
                    onClick={() => console.log('click')}
                    text='Button'
                    icon={faHeart}
                    iconPlacement='end'
                  />
                </div>
                <div>
                  <Button
                    size='lg'
                    variant='secondary'
                    onClick={() => console.log('click')}
                    text='Button'
                    icon={faHeart}
                    iconPlacement='start'
                  />
                  <Button
                    disabled
                    size='lg'
                    variant='secondary'
                    onClick={() => console.log('click')}
                    text='Button'
                    icon={faHeart}
                    iconPlacement='end'
                  />
                </div>
                <div>
                  <Button
                    size='lg'
                    variant='tertiary'
                    onClick={() => console.log('click')}
                    text='Button'
                    icon={faHeart}
                    iconPlacement='start'
                  />
                  <Button
                    disabled
                    size='lg'
                    variant='tertiary'
                    onClick={() => console.log('click')}
                    text='Button'
                    icon={faHeart}
                    iconPlacement='end'
                  />
                </div>
              </Card>
              <Card title='Text Inputs'>
                <TextInput label='Text Input' name='text-input' />
                <TextInput label='Text Input' name='text-input' disabled />
              </Card>
              <Card title='Checkboxes'>
                <Checkbox id='checkbox-1' name='checkbox-test' label='Checkbox 1' />
                <Checkbox id='checkbox-2' name='checkbox-test' label='Checkbox 2' disabled />
                <Checkbox
                  id='checkbox-3'
                  name='checkbox-test'
                  label='Checkbox 3'
                  disabled
                  checked
                />
              </Card>
              <Card title='Radio Buttons'>
                <Radio id='radio-1' name='radio' label='Radio 1' />
                <Radio id='radio-2' name='radio' label='Radio 2' />
                <Radio id='radio-3' name='radio' label='Radio 3' />
              </Card>
              <Card title='Radio Buttons (Disabled)'>
                <Radio
                  id='radio-disabled-1'
                  name='radio-disabled'
                  label='Radio Disabled 1'
                  disabled
                  checked
                />
                <Radio
                  id='radio-disabled-2'
                  name='radio-disabled'
                  label='Radio Disabled 2'
                  disabled
                />
                <Radio
                  id='radio-disabled-3'
                  name='radio-disabled'
                  label='Radio Disabled 3'
                  disabled
                />
              </Card>
              <Card title='Select Input'>
                <SelectWrapper options={options} closeMenuOnSelect />
                <SelectWrapper options={options} closeMenuOnSelect disabled />
              </Card>
              <Card title='Select Multi Input'>
                <SelectWrapper options={options} closeMenuOnSelect={false} multi />
                <SelectWrapper options={options} closeMenuOnSelect={false} multi disabled />
              </Card>
            </div>
          )}
        </div>
      </div>
    </PageLayout>
  );
};
