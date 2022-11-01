import React from 'react';

interface NavbarButtonProps {
  text: string;
  secondary?: boolean;
  danger?: boolean;
  authAction: () => void;
}
export const NavbarButton: React.FC<NavbarButtonProps> = ({
  text,
  authAction,
  secondary,
  danger,
}: NavbarButtonProps) => {
  let buttonClass = 'primary';
  if (secondary) {
    buttonClass = 'secondary';
  }
  if (danger) {
    buttonClass = 'danger';
  }
  return (
    <button
      className={`button button--${buttonClass} button--navbar`}
      onClick={() => void authAction()}
    >
      {text}
    </button>
  );
};
