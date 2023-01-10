import React, { useState } from 'react';
import { toast } from 'react-toastify';
import { InfinitySpin } from 'react-loader-spinner';
import { Controller, useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';

// local imports
import { PageLayout } from '../components/page-layout';
import { Card } from '../components/card';
import { TextInput } from '../components/text-input';
import { Button } from '../components/button';

// services
import { loginUserAccount } from '../services/api';

// models
import { Login } from '../models/login';
import { Overlay } from '../components/overlay';

export const SignIn: React.FC = () => {
  const [signingIn, setSigningIn] = useState<boolean>(false);
  const navigate = useNavigate();
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<Login>({
    mode: 'onSubmit',
    reValidateMode: 'onChange',
    defaultValues: {
      email: '',
      password: '',
    },
  });

  async function onSubmit(loginData: Login) {
    setSigningIn(true);
    const { data, error } = await loginUserAccount(loginData);
    if (error?.status && error.message) {
      setSigningIn(false);
      toast(`${error.message}`);
    }

    if (data) {
      toast('You have successfully signed in.');
      localStorage.setItem('user', JSON.stringify(data));

      setTimeout(() => {
        navigate('/');
      }, 5000);
    }
  }

  return (
    <PageLayout>
      <div className='content-layout'>
        {signingIn && (
          <Overlay>
            <InfinitySpin color='#7368ee' />
          </Overlay>
        )}
        <Card title='Sign In'>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className='padding-bottom'>
              <Controller
                control={control}
                name='email'
                render={({ field: { onBlur, onChange, value } }) => (
                  <TextInput
                    label='Email'
                    name='email'
                    id='email'
                    onChange={onChange}
                    onBlur={onBlur}
                    value={value}
                    error={Boolean(errors.email?.message)}
                    errorMsg={errors.email?.message}
                  />
                )}
                rules={{
                  required: {
                    value: true,
                    message: 'Email is required.',
                  },
                }}
              />
            </div>
            <div className='padding-bottom'>
              <Controller
                control={control}
                name='password'
                render={({ field: { onBlur, onChange, value } }) => (
                  <TextInput
                    label='Password'
                    name='password'
                    id='password'
                    type='password'
                    onChange={onChange}
                    onBlur={onBlur}
                    value={value}
                    error={Boolean(errors.password?.message)}
                    errorMsg={errors?.password?.message}
                  />
                )}
                rules={{
                  required: {
                    value: true,
                    message: 'Password is required.',
                  },
                }}
              />
            </div>
            <Button type='submit' variant='primary' text='Sign In' disabled={signingIn} />
          </form>
        </Card>
      </div>
    </PageLayout>
  );
};
