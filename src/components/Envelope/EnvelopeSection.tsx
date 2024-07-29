import { getInvitationName } from '../../utils/common';
import { Button } from '../Button/Button';
import { MainCardProps } from '../MainHeader/components/MainCard/MainCard';
import s from './EnvelopeSection.module.scss';
import { Envelope } from './components/Envelope';
import { EnvelopeMainTitle } from './components/EnvelopeMainTitle';
import { timeOutPromise } from './utils';
import classNames from 'classnames';
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
  const envelBackRef = useRef<HTMLImageElement>(null);

  const onClickEnvelope = async () => {
    setLidOpen(true);
    const card = cardRef.current;
    const envelope = envelopeRef.current;
    const backlid = backlidRef.current;
    const outerContainer = containerRef.current;
    const envelBack = envelBackRef.current;
    if (!card || !envelope || !backlid || !outerContainer || !envelBack) return;

    card.style.transition = 'transform 0.6s ease-in-out';
    await timeOutPromise(() => {
      card.style.transform = 'translateY(-230px)';
    }, 400);
    await timeOutPromise(() => {
      outerContainer.style.backgroundColor = 'transparent';
    }, 600);
    backlid.style.transition = 'transform 0.7s ease-in, opacity 0.3s linear';
    envelope.style.transition = 'transform 0.7s ease-in, opacity 0.3s linear';
    envelBack.style.transition = 'transform 0.7s ease-in, opacity 0.3s linear';
    backlid.style.transform = 'rotateX(180deg) translateX(-1500px)';
    envelope.style.transform = 'translateX(-1500px)';
    envelBack.style.transform = 'translateX(-1500px)';
    timeOutPromise(() => {
      backlid.style.opacity = '0';
      envelope.style.opacity = '0';
    }, 1000);
    timeOutPromise(() => {
      card.style.transform = 'translateY(-5px)';
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
        <EnvelopeMainTitle className={classNames(lidOpen && s.fadeOutAnim)} />
        <Envelope
          lidOpen={lidOpen}
          onClickEnvelope={onClickEnvelope}
          mainCardInit={mainCardInit}
          backlidRef={backlidRef}
          cardRef={cardRef}
          containerRef={containerRef}
          envelopeRef={envelopeRef}
          envelBackRef={envelBackRef}
        />
        <div
          className={classNames(s.guestNameContainer, lidOpen && s.fadeOutAnim)}
        >
          <div>Dear, {getInvitationName() || 'Guest'}</div>
          <Button onClick={onClickEnvelope}>Open Invitation</Button>
        </div>
      </div>
    </div>
  );
};
