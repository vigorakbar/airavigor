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

export const NameText: React.FC<Props> = ({
  className,
  children,
  ...props
}) => {
  return (
    <div className={cx(s.nameText, className)} {...props}>
      {children}
    </div>
  );
};
