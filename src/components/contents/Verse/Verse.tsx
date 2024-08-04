import { DEFAULT_AOS } from '../../../constants';
import s from './Verse.module.scss';
import React from 'react';

export const Verse1: React.FC<{
  contentTopGap: number;
}> = ({ contentTopGap }) => {
  return (
    <div
      className={s.container}
      style={{ paddingTop: contentTopGap }}
      data-aos="fade-down"
      data-aos-delay="800"
      data-aos-anchor-placement="bottom-bottom"
      data-aos-duration="900"
    >
      <p className={s.salam}>Assalamualaikum warahmatullahi wabarakatuh</p>
      <p>
        Dengan nama Allah Yang Maha Pengasih, Yang Maha Penyayang, Dengan rahmat
        dan ridha-Nya, Kami mengundang Bapak / Ibu dalam pernikahan Kami
      </p>
    </div>
  );
};

export const Verse2: React.FC = () => {
  return (
    <div className={s.container2} data-aos="fade-up" {...DEFAULT_AOS}>
      <p>
        'Dan di antara tanda-tanda kekuasaan-Nya ialah Dia menciptakan untukmu
        pasangan hidup dari jenismu sendiri, supaya kamu mendapat ketenangan
        hati dan Dia menjadikan kasih sayang dan rahmat di antara kamu.
        Sesungguhnya pada yang demikian itu benar-benar terdapat tanda-tanda
        bagi&nbsp;kaum&nbsp;yang&nbsp;berfikir.'
        <br />
        <br />
        (Q.S. Ar-Rum: 21)
      </p>
    </div>
  );
};
