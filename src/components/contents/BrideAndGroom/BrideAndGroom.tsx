import airalejour from '../../../assets/images/aira-halimun.png';
import photoframe from '../../../assets/images/photoframe.png';
import sample from '../../../assets/images/sample.png';
import vigorlejour from '../../../assets/images/vigor-halimun.png';
import { FrameBase } from '../../Frame/FrameBase';
import { Title } from '../../Title/Title';
// import { NameText } from '../../NameText/NameText';
import s from './BrideAndGroom.module.scss';
import React from 'react';

type Props = {
  name: 'aira' | 'vigor';
};

export const BrideAndGroom: React.FC<Props> = ({ name }) => (
  <div className={s.container}>
    {name === 'aira' ? <Title>The Bride and Groom</Title> : ' '}
    <FrameBase className={s.frameBase}>
      <img src={photoframe} className={s.photoframe} />
      {/* TODO: use actual photo (dimension approx. 316 x 471 ) */}
      <div className={s.photoWrapper}>
        <img src={sample} className={s.photo} />
      </div>
    </FrameBase>
    {/* <NameText>{name === 'aira' ? 'Aira' : 'Vigor'}</NameText> */}
    {name === 'aira' ? (
      <img src={airalejour} className={s.name} />
    ) : (
      <img src={vigorlejour} className={s.name} />
    )}
    <div>{name === 'aira' ? 'Airadiba Hadad' : 'Vigor Akbar'}</div>
    <div>{name === 'aira' ? 'Putri' : 'Putra'} kedua dari</div>
    <div>
      {name === 'aira'
        ? 'Bapak Ashif Hadad & Ibu Yeni Heryani'
        : 'Bapak Dwi Yarik Hafid Hidayat & Ibu Ratna Ningrum'}
    </div>
  </div>
);
