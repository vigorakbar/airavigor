import { ErrorField } from '../ErrorField/ErrorField';
import { FormLabel } from '../FormLabel/FormLabel';
import s from './InputField.module.scss';
import classNames from 'classnames';
import React, { forwardRef } from 'react';

type Props = React.InputHTMLAttributes<HTMLInputElement> & {
  inputId?: string;
  inputLabel?: string;
  containerClassName?: string;
  errorMsg?: string;
};

export const InputField = forwardRef<HTMLInputElement, Props>(
  ({ inputId, inputLabel, containerClassName, errorMsg, ...props }, ref) => {
    return (
      <div className={classNames(s.container, containerClassName)}>
        {inputLabel && <FormLabel htmlFor={inputId}>{inputLabel}</FormLabel>}
        <input ref={ref} className={s.input} {...props} id={inputId} />
        {errorMsg && <ErrorField>{errorMsg}</ErrorField>}
      </div>
    );
  },
);
