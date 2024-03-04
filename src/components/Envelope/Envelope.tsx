import {
  MainCard,
  Props as MainCardProps,
} from '../MainHeader/components/MainCard/MainCard';
import s from './Envelope.module.scss';
import { timeOutPromise } from './utils';
import cx from 'classnames';
import React, { useRef, useState } from 'react';

type Props = {
  setEnvelopeOpened: (open: boolean) => void;
};

export const Envelope: React.FC<Props> = ({ setEnvelopeOpened }) => {
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
      envelope.style.backgroundColor = 'brown';
    }, 600);
    backlid.style.transition = 'transform 0.7s ease-in, opacity 0.3s linear';
    envelope.style.transition = 'transform 0.7s ease-in, opacity 0.3s linear';
    backlid.style.transform = 'rotateX(180deg) translateX(-1000px)';
    envelope.style.transform = ' translateX(-1000px)';
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
    <div className={s.envelopeModal}>
      <div
        className={cx(s.outerContainer, lidOpen && s.openScale)}
        ref={containerRef}
      >
        <div
          className={cx(s.envelopeContainer)}
          onClick={onClickEnvelope}
          ref={envelopeRef}
        >
          <div className={cx(s.envelopeCard)}></div>
          <div className={cx(s.lid, s.front, lidOpen && s.open)}></div>
          <div></div>
        </div>
        <div
          className={cx(s.lid, s.back, lidOpen && s.open)}
          ref={backlidRef}
        ></div>
        <div className={s.cardContainer} ref={cardRef}>
          <MainCard progress={0} scale={1} {...mainCardInit} />
        </div>
      </div>
    </div>
  );
};
