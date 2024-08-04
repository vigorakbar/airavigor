import s from './AnimationWrapper.module.scss';
import classNames from 'classnames';
import React from 'react';

export const AnimationWrapper: React.FC<{
  children: React.ReactNode;
  className?: string;
}> = ({ children, className, ...props }) => {
  return (
    <div className={classNames(s.wrapper, className)} {...props}>
      {children}
    </div>
  );
};
