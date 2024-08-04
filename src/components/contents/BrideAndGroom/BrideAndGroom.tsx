import Aira from '../../../assets/images/Aira.jpg';
import Vigor from '../../../assets/images/Vigor.jpg';
import airalejour from '../../../assets/images/aira-halimun.png';
import framePurpleBig from '../../../assets/images/framePurpleBig.png';
import framePurpleSmall from '../../../assets/images/framePurpleSmall.png';
import photoframe from '../../../assets/images/photoframe.png';
import vigorlejour from '../../../assets/images/vigor-halimun.png';
import { DEFAULT_AOS } from '../../../constants';
import { AnimationWrapper } from '../../AnimationWrapper/AnimationWrapper';
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
      {isAira ? (
        <Title {...DEFAULT_AOS} data-aos="fade-up">
          The Bride and Groom
        </Title>
      ) : (
        ' '
      )}
      <FrameBase className={s.frameBase}>
        <AnimationWrapper
          {...DEFAULT_AOS}
          data-aos={isAira ? 'fade-up-left' : 'fade-down-left'}
          data-aos-delay="700"
          className={s.z5}
        >
          <img
            src={framePurpleBig}
            className={classNames(s.framePurpleBig, isAira ? s.aira : s.vigor)}
          />
        </AnimationWrapper>
        <AnimationWrapper
          {...DEFAULT_AOS}
          data-aos={isAira ? 'fade-down-right' : 'fade-up-right'}
          data-aos-delay="700"
          className={s.z5}
        >
          <img
            src={framePurpleSmall}
            className={classNames(
              s.framePurpleSmall,
              isAira ? s.aira : s.vigor,
            )}
          />
        </AnimationWrapper>

        <img
          {...DEFAULT_AOS}
          src={photoframe}
          className={s.photoframe}
          data-aos="fade-down"
        />
        <div
          {...DEFAULT_AOS}
          className={s.photoWrapper}
          data-aos="fade"
          data-aos-delay="700"
        >
          <img
            src={isAira ? Aira : Vigor}
            className={s.photo}
            style={isAira ? { width: '101%' } : undefined}
          />
        </div>
      </FrameBase>
      <div {...DEFAULT_AOS} data-aos={isAira ? 'fade-left' : 'fade-right'}>
        {isAira ? (
          <img src={airalejour} className={s.name} />
        ) : (
          <img src={vigorlejour} className={s.name} />
        )}
      </div>
      <div {...DEFAULT_AOS} data-aos={isAira ? 'fade-left' : 'fade-right'}>
        <div>{isAira ? 'Airadiba Hadad' : 'Vigor Akbar'}</div>
        <div>{isAira ? 'Putri' : 'Putra'} kedua dari</div>
        <div>
          {isAira
            ? 'Bapak Ashif Hadad & Ibu Yeni Heryani'
            : 'Bapak Dwiyarik Hafid Hidayat & Ibu Ratna Ningrum'}
        </div>
      </div>
    </div>
  );
};
