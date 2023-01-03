import React, { InputHTMLAttributes } from 'react';

interface Props extends InputHTMLAttributes<HTMLInputElement> {
  checked?: boolean;
  disabled?: boolean;
  id?: string;
  label: string;
  name: string;
}

export const Radio: React.FC<Props> = ({ checked, disabled, id, label, name }: Props) => {
  return (
    <div className='radio'>
      <input type='radio' name={name} id={id} disabled={disabled} checked={checked} />
      <label htmlFor={id}>{label}</label>
    </div>
  );
};
