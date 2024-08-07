import s from './Title.module.scss';
import classNames from 'classnames';
import React from 'react';

export const Title: React.FC<{
  children: React.ReactNode;
  className?: string;
}> = ({ children, className, ...props }) => {
  return (
    <h1 className={classNames(s.title, className)} {...props}>
      {children}
    </h1>
  );
};
