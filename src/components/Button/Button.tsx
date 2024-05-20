import s from './Button.module.scss';
import cx from 'classnames';
import React from 'react';

export const Button: React.FC<{
  children?: React.ReactNode;
  onClick?: () => void;
  className?: string;
}> = ({ children, onClick, className }) => {
  return (
    <div onClick={onClick} className={cx(s.button, className)}>
      {children}
    </div>
  );
};
