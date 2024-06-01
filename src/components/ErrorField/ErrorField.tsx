import s from './ErrorField.module.scss';
import classNames from 'classnames';
import React from 'react';

export const ErrorField = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => <div className={classNames(s.errMsg, className)}>{children}</div>;
