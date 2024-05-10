import {
  MainCard,
  MainCardProps,
} from '../../MainHeader/components/MainCard/MainCard';
import { NameText } from '../../NameText/NameText';
import s from './Envelope.module.scss';
import cx from 'classnames';
import React from 'react';

type Props = {
  lidOpen: boolean;
  backlidRef: React.RefObject<HTMLDivElement>;
  cardRef: React.RefObject<HTMLDivElement>;
  containerRef: React.RefObject<HTMLDivElement>;
  envelopeRef: React.RefObject<HTMLDivElement>;
  onClickEnvelope: () => Promise<void>;
  mainCardInit: Pick<MainCardProps, 'initRotateX' | 'rotateZDeg'>;
};

export const Envelope: React.FC<Props> = ({
  lidOpen,
  backlidRef,
  cardRef,
  containerRef,
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
        <div className={cx(s.envelopeCard)}></div>
        <div className={cx(s.lid, s.front, lidOpen && s.open)}>
          <NameText className={s.initial}>
            <span>A</span>
            <span>V</span>
          </NameText>
        </div>
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
  );
};
