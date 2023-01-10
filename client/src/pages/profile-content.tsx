import React from 'react';

interface Props {
  activated: boolean;
}

export const ProfileContent: React.FC<Props> = ({ activated }: Props) => {
  let layout;

  if (!activated) {
    layout = (
      <>
        <div>Profile!</div>
      </>
    );
  } else {
    layout = <div>Welcome to your profile!</div>;
  }
  return layout;
};
