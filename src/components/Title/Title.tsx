import s from './Title.module.scss';
import React from 'react';

export const Title: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  return <h1 className={s.title}>{children}</h1>;
};
