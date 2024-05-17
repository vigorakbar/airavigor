import { FrameBase } from '../../Frame/FrameBase';
import { NameText } from '../../NameText/NameText';
import s from './BrideAndGroom.module.scss';
import React from 'react';

type Props = {
  name: 'aira' | 'vigor';
};

export const BrideAndGroom: React.FC<Props> = ({ name }) => (
  <div className={s.container}>
    <div className={s.title}>
      {name === 'aira' ? 'The Bride and Groom' : ' '}
    </div>
    <FrameBase>
      <div
        style={{
          width: '100%',
          height: '100%',
          background: 'pink',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }} // TODO:
      >
        {name === 'aira' ? <span>FOTO AIRA</span> : <span>FOTO VIGOR</span>}
      </div>
    </FrameBase>
    <NameText>{name === 'aira' ? 'Aira' : 'Vigor'}</NameText>
    <div>{name === 'aira' ? 'Airadiba Hadad' : 'Vigor Akbar'}</div>
    <div>{name === 'aira' ? 'Putri' : 'Putra'} kedua dari</div>
    <div>
      {name === 'aira'
        ? 'Bapak Ashif Hadad & Ibu Yeni Heryani'
        : 'Bapak Dwi Yarik Hafid Hidayat & Ibu Ratna Ningrum'}
    </div>
  </div>
);
