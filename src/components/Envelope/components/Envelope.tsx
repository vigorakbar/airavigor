import envelBack from '../../../assets/images/envel-backenv.png';
import envelBackLid from '../../../assets/images/envel-backlid.png';
import envelFront from '../../../assets/images/envel-front.png';
import envelLid from '../../../assets/images/envel-lid.png';
import { Initial } from '../../Initial/Initial';
import {
  MainCard,
  MainCardProps,
} from '../../MainHeader/components/MainCard/MainCard';
import s from './Envelope.module.scss';
import cx from 'classnames';
import React from 'react';

type Props = {
  lidOpen: boolean;
  backlidRef: React.RefObject<HTMLDivElement>;
  cardRef: React.RefObject<HTMLDivElement>;
  containerRef: React.RefObject<HTMLDivElement>;
  envelopeRef: React.RefObject<HTMLDivElement>;
  envelBackRef: React.RefObject<HTMLImageElement>;
  onClickEnvelope: () => Promise<void>;
  mainCardInit: Pick<MainCardProps, 'initRotateX' | 'rotateZDeg'>;
};

export const Envelope: React.FC<Props> = ({
  lidOpen,
  backlidRef,
  cardRef,
  containerRef,
  envelBackRef,
  onClickEnvelope,
  envelopeRef,
  mainCardInit,
}) => {
  return (
    <div
      className={cx(s.outerContainer, lidOpen && s.openScale)}
      ref={containerRef}
    >
      <div
        className={cx(s.envelopeContainer)}
        onClick={onClickEnvelope}
        ref={envelopeRef}
      >
        <div className={cx(s.envelopeCard)}>
          <img src={envelFront} className={s.envelFront} />
        </div>
        <div className={cx(s.lid, s.front, lidOpen && s.open)}>
          <img src={envelLid} className={s.envelLid} />
          <Initial className={s.initial} />
        </div>
        <div></div>
      </div>
      <div className={cx(s.lid, s.back, lidOpen && s.open)} ref={backlidRef}>
        <img src={envelBackLid} className={s.envelBackLid} />
      </div>
      <img ref={envelBackRef} src={envelBack} className={s.envelBack} />
      <div className={s.cardContainer} ref={cardRef}>
        <MainCard progress={0} scale={1} {...mainCardInit} />
      </div>
    </div>
  );
};
