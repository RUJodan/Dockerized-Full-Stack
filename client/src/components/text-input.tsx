import { IconDefinition } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { InputHTMLAttributes, useState } from 'react';

interface Props extends InputHTMLAttributes<HTMLInputElement> {
  disabled?: boolean;
  id?: string;
  icon?: IconDefinition;
  iconPlacement?: 'start' | 'end';
  label: string;
  name: string;
}

export const TextInput: React.FC<Props> = ({
  disabled,
  id,
  icon,
  iconPlacement,
  label,
  name,
}: Props) => {
  const [value, setValue] = useState<string>('');

  function handleInputChange(event: React.ChangeEvent<HTMLInputElement>) {
    setValue(event.target.value);
  }

  return (
    <div className='text-input-wrapper'>
      {icon && iconPlacement === 'start' && <FontAwesomeIcon className='icon-start' icon={icon} />}
      <input onChange={handleInputChange} name={name} id={id} type='text' disabled={disabled} />
      {icon && iconPlacement === 'end' && <FontAwesomeIcon className='icon-end' icon={icon} />}
      <label className={`${value ? 'has-value' : ''}`} htmlFor={name}>
        {label}
      </label>
    </div>
  );
};
