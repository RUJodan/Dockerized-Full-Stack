import React from 'react';

interface Props {
  children: React.ReactElement;
}

export function Overlay({ children }: Props) {
  return (
    <div>
      <div className='overlay-background' />
      <div className='overlay-container'>{children}</div>
    </div>
  );
}
