import s from './CardMainContent.module.scss';
import React from 'react';

export const CardMainContent: React.FC = () => {
  return (
    <div className={s.container}>
      <div>We invite you to the wedding of</div>
      <div>Aira & Vigor</div>
    </div>
  );
};
