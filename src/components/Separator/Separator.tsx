import { DEFAULT_AOS } from '../../constants';
import s from './Separator.module.scss';
import cx from 'classnames';
import React from 'react';

type Props = {
  className?: string;
  children?: React.ReactNode;
};

export const Separator: React.FC<Props> = ({ children, className }) => {
  return (
    <div
      className={cx(s.container, className)}
      data-aos="fade"
      {...DEFAULT_AOS}
    >
      {children}
    </div>
  );
};
