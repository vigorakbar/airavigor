import s from './FrameBase.module.scss';
import cx from 'classnames';
import React from 'react';

type Props = {
  children: React.ReactNode;
  className?: string;
};

export const FrameBase: React.FC<Props> = ({ children, className }) => {
  return <div className={cx(s.container, className)}>{children}</div>;
};
