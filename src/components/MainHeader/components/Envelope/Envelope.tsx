import React from 'react';
import s from './Envelope.module.scss';

type Props = {
  setEnvelopeOpen: (open: boolean) => void;
};

export const Envelope: React.FC<Props> = ({ setEnvelopeOpen }) => {
  const onClickEnvelope = () => {
    setEnvelopeOpen(true);
  };
  return (
    <div className={s.envelopeModal} onClick={onClickEnvelope}>
      <div></div>
    </div>
  );
};
