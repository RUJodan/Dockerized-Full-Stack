import { IconDefinition } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

interface Props {
  size?: 'sm' | 'md' | 'lg';
  variant?: 'primary' | 'secondary' | 'tertiary';
  text: string;
  navigation?: boolean;
  disabled?: boolean;
  onClick?: () => void;
  icon?: IconDefinition;
  iconPlacement?: 'start' | 'end';
}

export const Button: React.FC<Props> = ({
  size = 'sm',
  variant = 'primary',
  onClick,
  text,
  navigation,
  disabled = false,
  icon,
  iconPlacement,
}: Props) => {
  let navClass = '';
  if (navigation) {
    navClass = 'button-navbar';
  }

  return (
    <button
      disabled={disabled}
      type='button'
      className={`button button-${variant} button-${size} ${navClass}`}
      onClick={onClick}
    >
      {icon && iconPlacement === 'start' && <FontAwesomeIcon className='icon-start' icon={icon} />}
      {text}
      {icon && iconPlacement === 'end' && <FontAwesomeIcon className='icon-end' icon={icon} />}
    </button>
  );
};
