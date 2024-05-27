import s from './SectionContainer.module.scss';
import classNames from 'classnames';
import React from 'react';

type Props = { className?: string; children: React.ReactNode };

export const SectionContainer: React.FC<Props> = ({ children, className }) => {
  return <div className={classNames(s.container, className)}>{children}</div>;
};
