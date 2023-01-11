import React from 'react';

interface Props {
  title: string;
  children: JSX.Element | JSX.Element[];
  singleCard?: boolean;
}

export const Card: React.FC<Props> = ({ title, children, singleCard }) => (
  <div className='card'>
    <span className={`card-title ${singleCard ? 'xl' : ''}`}>{title}</span>
    <div className='card-content'>{children}</div>
  </div>
);
