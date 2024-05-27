import s from './Title.module.scss';
import classNames from 'classnames';
import React from 'react';

export const Title: React.FC<{
  children: React.ReactNode;
  className?: string;
}> = ({ children, className }) => {
  return <h1 className={classNames(s.title, className)}>{children}</h1>;
};
