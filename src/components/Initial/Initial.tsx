import avlejour from '../../assets/images/av-lejour.png';
import React from 'react';

type Props = {
  className?: string;
};

export const Initial: React.FC<Props> = ({ className, ...props }) => {
  return <img src={avlejour} className={className} {...props} />;
};
