import { faHeart } from '@fortawesome/free-solid-svg-icons';
import React from 'react';
import { useForm } from 'react-hook-form';
import { Button } from '../components/button';
import { Checkbox } from '../components/checkbox';
import { Radio } from '../components/radio';
import { TextInput } from '../components/text-input';

interface Props {
  activated: boolean;
}

type FormData = {
  username: string;
};

export const ProfileContent: React.FC<Props> = ({ activated }: Props) => {
  let layout;
  const { register, handleSubmit } = useForm<FormData>();

  const onSubmit = handleSubmit((data) => console.log(data));
  if (!activated) {
    layout = (
      <>
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
        {/* md */}
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
        {/* lg */}
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
        <div>
          <TextInput label='Text Input' name='text-input' />
          <TextInput label='Text Input' name='text-input' disabled />
        </div>
        <div>
          <Checkbox id='checkbox-1' name='checkbox-test' label='Checkbox 1' />
          <Checkbox id='checkbox-2' name='checkbox-test' label='Checkbox 2' disabled />
          <Checkbox id='checkbox-3' name='checkbox-test' label='Checkbox 3' disabled checked />
        </div>
        <div>
          <Radio id='radio-1' name='radio' label='Radio 1' />
          <Radio id='radio-2' name='radio' label='Radio 2' />
          <Radio id='radio-3' name='radio' label='Radio 3' />
        </div>
        <div>
          <Radio
            id='radio-disabled-1'
            name='radio-disabled'
            label='Radio Disabled 1'
            disabled
            checked
          />
          <Radio id='radio-disabled-2' name='radio-disabled' label='Radio Disabled 2' disabled />
          <Radio id='radio-disabled-3' name='radio-disabled' label='Radio Disabled 3' disabled />
        </div>
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
        {/* md */}
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
        {/* lg */}
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
      </>
    );
  } else {
    layout = <div>Welcome to your profile!</div>;
  }
  return layout;
};
