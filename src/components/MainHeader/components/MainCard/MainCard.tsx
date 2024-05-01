import s from './MainCard.module.scss';
import cx from 'classnames';
import React, { CSSProperties } from 'react';

export type Props = {
  progress: number;
  rotateZDeg?: number;
  scale?: number;
  initRotateX?: number;
};
export const MainCard: React.FC<Props> = ({
  progress,
  scale,
  rotateZDeg,
  initRotateX = 18,
}) => {
  const cardScale = scale ?? progress + 1;
  const cardRotateZ = rotateZDeg ?? (1 - progress) * 3;
  const scaleFill = {
    transform: 'scale(6)',
    transformOrigin: 'center',
    transitionDelay: '0',
  } as CSSProperties;
  return (
    <div
      className={s.cardContainer}
      style={progress > 0.85 ? scaleFill : { transform: `scale(${cardScale})` }}
    >
      <div
        className={s.mainCard}
        style={{
          transform: `rotateZ(${cardRotateZ}deg)`,
        }}
      >
        <div
          className={s.titleCard}
          style={{
            transform: `rotateX(${Math.min(initRotateX + progress * 180, 180)}deg)`,
          }}
        >
          <div className={cx(s.cardSurface, s.frontTitle)}>FRONT</div>
          <div className={cx(s.cardSurface, s.backTitle)}>BACK</div>
        </div>
        <div className={cx(s.cardSurface, s.backCard)}></div>
      </div>
    </div>
  );
};
