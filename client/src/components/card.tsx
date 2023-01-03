import React from 'react';

interface Props {
  title: string;
  children: JSX.Element | JSX.Element[];
}

export const Card: React.FC<Props> = ({ title, children }) => (
  <div className='card'>
    <span className='card-title'>{title}</span>
    <div className='card-content'>{children}</div>
  </div>
);
