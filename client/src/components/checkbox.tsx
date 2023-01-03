import React, { InputHTMLAttributes } from 'react';

interface Props extends InputHTMLAttributes<HTMLInputElement> {
  checked?: boolean;
  disabled?: boolean;
  id?: string;
  label: string;
  name: string;
}

export const Checkbox: React.FC<Props> = ({ checked, disabled, id, label, name }: Props) => {
  return (
    <div className='checkbox-wrapper'>
      <input
        className='checkbox'
        type='checkbox'
        id={id}
        name={name}
        disabled={disabled}
        checked={checked}
      />
      <label htmlFor={id}>
        <span></span>
        {label}
      </label>
    </div>
  );
};
