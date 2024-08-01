import airalejour from '../../../assets/images/aira-halimun.png';
import framePurpleBig from '../../../assets/images/framePurpleBig.png';
import framePurpleSmall from '../../../assets/images/framePurpleSmall.png';
import photoframe from '../../../assets/images/photoframe.png';
import sample from '../../../assets/images/sample.png';
import vigorlejour from '../../../assets/images/vigor-halimun.png';
import { FrameBase } from '../../Frame/FrameBase';
import { Title } from '../../Title/Title';
// import { NameText } from '../../NameText/NameText';
import s from './BrideAndGroom.module.scss';
import classNames from 'classnames';
import React from 'react';

type Props = {
  name: 'aira' | 'vigor';
};

export const BrideAndGroom: React.FC<Props> = ({ name }) => {
  const isAira = name === 'aira';
  return (
    <div className={s.container}>
      {isAira ? <Title>The Bride and Groom</Title> : ' '}
      <FrameBase className={s.frameBase}>
        <img
          src={framePurpleBig}
          className={classNames(s.framePurpleBig, isAira ? s.aira : s.vigor)}
        />
        <img
          src={framePurpleSmall}
          className={classNames(s.framePurpleSmall, isAira ? s.aira : s.vigor)}
        />

        <img src={photoframe} className={s.photoframe} />
        {/* TODO: use actual photo (dimension approx. 316 x 471 ) */}
        <div className={s.photoWrapper}>
          <img src={sample} className={s.photo} />
        </div>
      </FrameBase>
      {/* <NameText>{isAira ? 'Aira' : 'Vigor'}</NameText> */}
      {isAira ? (
        <img src={airalejour} className={s.name} />
      ) : (
        <img src={vigorlejour} className={s.name} />
      )}
      <div>{isAira ? 'Airadiba Hadad' : 'Vigor Akbar'}</div>
      <div>{isAira ? 'Putri' : 'Putra'} kedua dari</div>
      <div>
        {isAira
          ? 'Bapak Ashif Hadad & Ibu Yeni Heryani'
          : 'Bapak Dwiyarik Hafid Hidayat & Ibu Ratna Ningrum'}
      </div>
    </div>
  );
};
