import airavigorhalimun from '../../../assets/images/airavigor-halimun.png';
import s from './EnvelopeMainTitle.module.scss';
import classNames from 'classnames';
import React from 'react';

export const EnvelopeMainTitle: React.FC<{ className?: string }> = ({
  className,
}) => {
  return (
    <div className={classNames(s.EnvelopeTitleContainer, className)}>
      <div className={s.title}>Wedding Invitation</div>
      <img src={airavigorhalimun} className={s.name} />
      <div className={s.hashTag}>#AIhaveVIGureditout</div>
    </div>
  );
};
