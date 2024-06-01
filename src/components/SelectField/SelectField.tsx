import { ErrorField } from '../ErrorField/ErrorField';
import s from './SelectField.module.scss';
import classNames from 'classnames';
import { forwardRef } from 'react';

type Props = React.SelectHTMLAttributes<HTMLSelectElement> & {
  containerClassName?: string;
  errorMsg?: string;
  placeholder?: string;
  options: {
    label: string;
    value: string | number;
  }[];
};

export const SelectField = forwardRef<HTMLSelectElement, Props>(
  ({ options, containerClassName, errorMsg, placeholder, ...props }, ref) => {
    return (
      <div className={classNames(s.container, containerClassName)}>
        <select
          {...props}
          defaultValue={placeholder ? '' : props.defaultValue}
          ref={ref}
        >
          {placeholder && (
            <option className={s.placeholder} value="" disabled>
              {placeholder}
            </option>
          )}
          {options.map(({ label, value }) => (
            <option key={value} value={value}>
              {label}
            </option>
          ))}
        </select>
        {errorMsg && <ErrorField>{errorMsg}</ErrorField>}
      </div>
    );
  },
);
