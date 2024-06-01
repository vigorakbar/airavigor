import s from './FormLabel.module.scss';
import classNames from 'classnames';
import React from 'react';

export const FormLabel: React.FC<
  React.LabelHTMLAttributes<HTMLLabelElement>
> = ({ children, className, ...props }) => {
  return (
    <label className={classNames(s.label, className)} {...props}>
      {children}
    </label>
  );
};
