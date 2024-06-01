import s from './Button.module.scss';
import cx from 'classnames';
import React from 'react';

type Props = React.ButtonHTMLAttributes<HTMLButtonElement>;

export const Button: React.FC<Props> = ({
  children,
  onClick,
  className,
  ...props
}) => {
  return (
    <button onClick={onClick} className={cx(s.button, className)} {...props}>
      {children}
    </button>
  );
};
