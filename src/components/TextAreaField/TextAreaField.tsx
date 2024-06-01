import { FormLabel } from '../FormLabel/FormLabel';
import s from './TextAreaField.module.scss';
import classNames from 'classnames';
import React, { forwardRef } from 'react';

type Props = React.TextareaHTMLAttributes<HTMLTextAreaElement> & {
  inputId?: string;
  inputLabel?: string;
  containerClassName?: string;
  errorMsg?: string;
};

export const TextAreaField = forwardRef<HTMLTextAreaElement, Props>(
  ({ inputId, inputLabel, containerClassName, errorMsg, ...props }, ref) => {
    return (
      <div className={classNames(s.container, containerClassName)}>
        {inputLabel && <FormLabel htmlFor={inputId}>{inputLabel}</FormLabel>}
        <textarea {...props} ref={ref} rows={4} id={inputId} />
        {errorMsg && <div>{errorMsg}</div>}
      </div>
    );
  },
);
