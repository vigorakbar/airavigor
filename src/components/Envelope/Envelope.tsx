import { MainCard } from '../MainHeader/components/MainCard/MainCard';
import s from './Envelope.module.scss';
import cx from 'classnames';
import React, { useRef, useState } from 'react';

type Props = {
  setEnvelopeOpen: (open: boolean) => void;
};

export const Envelope: React.FC<Props> = ({ setEnvelopeOpen }) => {
  const [lidOpen, setLidOpen] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);
  const envelopeRef = useRef<HTMLDivElement>(null);

  const onClickEnvelope = () => {
    setLidOpen(true);
    const card = cardRef.current;
    const envelope = envelopeRef.current;
    if (!card || !envelope) return;

    // card.style.transl

    // setEnvelopeOpen(true);
  };
  return (
    <div className={s.envelopeModal}>
      <div className={cx(s.outerContainer, lidOpen && s.openScale)}>
        <div
          className={cx(s.envelopeContainer)}
          onClick={onClickEnvelope}
          ref={envelopeRef}
        >
          <div className={cx(s.envelopeCard)}></div>
          <div className={cx(s.lid, s.front, lidOpen && s.open)}></div>
          <div className={cx(s.lid, s.back, lidOpen && s.open)}></div>
          <div></div>
        </div>
        <div className={s.cardContainer} ref={cardRef}>
          <MainCard progress={0} scale={1} rotateZDeg={0} initRotateX={0} />
        </div>
      </div>
    </div>
  );
};
