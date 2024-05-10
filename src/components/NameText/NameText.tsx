import s from './NameText.module.scss';
import cx from 'classnames';
import React from 'react';

type Props = {
  initial?: boolean;
  initialClassNames?: {
    a?: string;
    and?: string;
    v?: string;
  };
  className?: string;
  children?: React.ReactNode;
};

export const NameText: React.FC<Props> = ({ className, children }) => {
  return (
    <div className={cx(s.nameText, className)}>
      {/* {initial ? (
        <>
          <span className={cx(initialClassNames?.a)}>A</span>
          <span className={cx(initialClassNames?.and)}>&</span>
          <span className={cx(initialClassNames?.v)}>V</span>
        </>
      ) : (
        'Aira & Vigor'
      )} */}
      {children}
    </div>
  );
};
