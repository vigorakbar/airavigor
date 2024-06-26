import { Button } from '../Button/Button';
import { MainCardProps } from '../MainHeader/components/MainCard/MainCard';
import s from './EnvelopeSection.module.scss';
import { Envelope } from './components/Envelope';
import { EnvelopeMainTitle } from './components/EnvelopeMainTitle';
import { timeOutPromise } from './utils';
import React, { useRef, useState } from 'react';

type Props = {
  setEnvelopeOpened: (open: boolean) => void;
};

export const EnvelopeSection: React.FC<Props> = ({ setEnvelopeOpened }) => {
  const [lidOpen, setLidOpen] = useState(false);

  const [mainCardInit, setMainCardInit] = useState<
    Pick<MainCardProps, 'initRotateX' | 'rotateZDeg'>
  >({
    rotateZDeg: 0,
    initRotateX: 0,
  });

  const cardRef = useRef<HTMLDivElement>(null);
  const envelopeRef = useRef<HTMLDivElement>(null);
  const backlidRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  const onClickEnvelope = async () => {
    setLidOpen(true);
    const card = cardRef.current;
    const envelope = envelopeRef.current;
    const backlid = backlidRef.current;
    const outerContainer = containerRef.current;
    if (!card || !envelope || !backlid || !outerContainer) return;

    card.style.transition = 'transform 0.6s ease-in-out';
    await timeOutPromise(() => {
      card.style.transform = 'translateY(-230px)';
    }, 400);
    await timeOutPromise(() => {
      outerContainer.style.backgroundColor = 'transparent';
      envelope.style.backgroundColor = '#fcc7bf';
    }, 600);
    backlid.style.transition = 'transform 0.7s ease-in, opacity 0.3s linear';
    envelope.style.transition = 'transform 0.7s ease-in, opacity 0.3s linear';
    backlid.style.transform = 'rotateX(180deg) translateX(-1500px)';
    envelope.style.transform = ' translateX(-1500px)';
    timeOutPromise(() => {
      backlid.style.opacity = '0';
      envelope.style.opacity = '0';
    }, 1000);
    timeOutPromise(() => {
      card.style.transform = 'translateY(-5px)';
      setLidOpen(false);
    }, 500);

    await timeOutPromise(() => {
      setMainCardInit({ rotateZDeg: undefined, initRotateX: undefined });
      outerContainer.style.transform = 'scale(1)';
    }, 600);
    await timeOutPromise(() => {
      setEnvelopeOpened(true);
    }, 1000);
  };

  return (
    <div className={s.envelopeSectionContainer}>
      <div className={s.innerContainer}>
        <EnvelopeMainTitle />
        <Envelope
          lidOpen={lidOpen}
          onClickEnvelope={onClickEnvelope}
          mainCardInit={mainCardInit}
          backlidRef={backlidRef}
          cardRef={cardRef}
          containerRef={containerRef}
          envelopeRef={envelopeRef}
        />
        <div className={s.guestNameContainer}>
          <div>Dear, XXXX</div>
          <Button onClick={onClickEnvelope}>Open Invitation</Button>
        </div>
      </div>
    </div>
  );
};
