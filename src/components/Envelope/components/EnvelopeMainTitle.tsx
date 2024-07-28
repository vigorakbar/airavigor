import airavigorhalimun from '../../../assets/images/airavigor-halimun.png';
import s from './EnvelopeMainTitle.module.scss';
import React from 'react';

export const EnvelopeMainTitle: React.FC = () => {
  return (
    <div className={s.EnvelopeTitleContainer}>
      <div className={s.title}>Wedding Invitation</div>
      <img src={airavigorhalimun} className={s.name} />
      <div className={s.hashTag}>#AIhaveVIGureditout</div>
    </div>
  );
};
