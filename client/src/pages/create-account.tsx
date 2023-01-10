import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Controller, useForm } from 'react-hook-form';
import { toast } from 'react-toastify';

// services
import { createUserAccount } from '../services/api';

// local imports
import { PageLayout } from '../components/page-layout';
import { Card } from '../components/card';
import { TextInput } from '../components/text-input';
import { Button } from '../components/button';

// types
import { User } from '../models/user';

export const CreateAccount: React.FC = () => {
  const navigate = useNavigate();
  const {
    control,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<User>({
    mode: 'onSubmit',
    reValidateMode: 'onChange',
    defaultValues: {
      email: '',
      username: '',
      password: '',
      passwordConfirm: '',
    },
  });

  const pwd = watch('password');

  async function onSubmit(accountData: User) {
    const { data, error } = await createUserAccount(accountData);
    if (error?.status && error.message) {
      toast(`${error.message}`);
    }

    if (data?.data) {
      toast(data.data);

      setTimeout(() => {
        navigate('/login');
      }, 5000);
    }
  }

  return (
    <PageLayout>
      <div className='content-layout'>
        <Card title='Create an Account'>
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
                    message: 'Email is required for registration.',
                  },
                  validate: (value) =>
                    /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value) ||
                    'Enter a valid Email Address.',
                }}
              />
            </div>
            <div className='padding-bottom'>
              <Controller
                control={control}
                name='username'
                render={({ field: { onBlur, onChange, value } }) => (
                  <TextInput
                    label='Username'
                    name='username'
                    id='username'
                    onChange={onChange}
                    onBlur={onBlur}
                    value={value}
                    error={Boolean(errors.username?.message)}
                    errorMsg={errors?.username?.message}
                  />
                )}
                rules={{
                  required: {
                    value: true,
                    message: 'Username is required for registration.',
                  },
                  minLength: {
                    value: 3,
                    message: 'Username must be at least 3 characters.',
                  },
                  maxLength: {
                    value: 30,
                    message: 'Username must be less than or equal to 30 characters.',
                  },
                  validate: (value) =>
                    /^[a-z0-9]+$/i.test(value) || 'Username must be alpha-numeric.',
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
                    message: 'Password is required for registration.',
                  },
                  minLength: {
                    value: 8,
                    message: 'Password must be at least 8 characters.',
                  },
                  maxLength: {
                    value: 30,
                    message: 'Password must be less than or equal to 30 characters.',
                  },
                  validate: (value) =>
                    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[#$@!%&*?])[A-Za-z\d#$@!%&*?]{8,30}$/.test(
                      value,
                    ) ||
                    'Password minimum rules: 1 uppercase letter, 1 lowercase letter, 1 special character, and 1 number.',
                }}
              />
            </div>
            <div className='padding-bottom'>
              <Controller
                control={control}
                name='passwordConfirm'
                render={({ field: { onBlur, onChange, value } }) => (
                  <TextInput
                    label='Confirm Password'
                    name='password-confirm'
                    id='password-confirm'
                    type='password'
                    onChange={onChange}
                    onBlur={onBlur}
                    value={value}
                    error={Boolean(errors.passwordConfirm?.message)}
                    errorMsg={errors?.passwordConfirm?.message}
                  />
                )}
                rules={{
                  required: {
                    value: true,
                    message: 'Password confirmation is required for registration',
                  },
                  validate: (value) => value === pwd || 'Passwords do not match.',
                }}
              />
            </div>
            <Button type='submit' variant='primary' text='Create Account' />
          </form>
        </Card>
      </div>
    </PageLayout>
  );
};
