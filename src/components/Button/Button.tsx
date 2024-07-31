import s from './Button.module.scss';
import cx from 'classnames';
import React from 'react';

type Props = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  size?: 'md' | 'sm';
};

export const Button: React.FC<Props> = ({
  children,
  onClick,
  className,
  size = 'md',
  ...props
}) => {
  return (
    <button
      onClick={onClick}
      className={cx(s.button, s[`${size}Button`], className)}
      {...props}
    >
      {children}
    </button>
  );
};
