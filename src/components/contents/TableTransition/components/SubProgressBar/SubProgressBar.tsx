import s from './SubProgressBar.module.scss';
import React, { CSSProperties } from 'react';

export const SubProgressBar = React.forwardRef<
  HTMLDivElement,
  { style?: CSSProperties }
>(({ style }, ref) => {
  return <div ref={ref} className={s.subProgressBar} style={style} />;
});
