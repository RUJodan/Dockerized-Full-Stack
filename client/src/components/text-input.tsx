import { IconDefinition } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { InputHTMLAttributes } from 'react';

interface Props extends InputHTMLAttributes<HTMLInputElement> {
  disabled?: boolean;
  id: string;
  icon?: IconDefinition;
  iconPlacement?: 'start' | 'end';
  label: string;
  name: string;
  error?: boolean;
  errorMsg?: string;
  onChange: () => void;
  value: string;
  type?: 'text' | 'password';
}

export const TextInput: React.FC<Props> = ({
  disabled,
  id,
  icon,
  iconPlacement,
  label,
  name,
  error,
  errorMsg,
  onChange,
  value,
  type,
}: Props) => {
  return (
    <div className={`text-input-wrapper ${error ? 'error' : ''}`}>
      {icon && iconPlacement === 'start' && <FontAwesomeIcon className='icon-start' icon={icon} />}
      <input onChange={onChange} name={name} id={id} type={type || 'text'} disabled={disabled} />
      {icon && iconPlacement === 'end' && <FontAwesomeIcon className='icon-end' icon={icon} />}
      <label
        onClick={() => {
          document.getElementById(id)?.focus();
        }}
        className={`${value ? 'has-value' : ''}`}
        htmlFor={name}
      >
        {label}
      </label>
      {errorMsg && <div className='error-message'>{errorMsg}</div>}
    </div>
  );
};
