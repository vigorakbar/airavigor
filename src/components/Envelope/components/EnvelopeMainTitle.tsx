import { NameText } from '../../NameText/NameText';
import s from './EnvelopeMainTitle.module.scss';
import React from 'react';

export const EnvelopeMainTitle: React.FC = () => {
  return (
    <div className={s.EnvelopeTitleContainer}>
      <div className={s.title}>Wedding Invitation</div>
      <NameText className={s.name}>Aira & Vigor</NameText>
      <div className={s.hashTag}>#AIhaveVIGureditout</div>
    </div>
  );
};
