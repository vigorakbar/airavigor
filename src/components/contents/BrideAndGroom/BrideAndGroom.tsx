import Aira from '../../../assets/images/Aira.jpg';
import airalejour from '../../../assets/images/aira-halimun.png';
import framePurpleBig from '../../../assets/images/framePurpleBig.png';
import framePurpleSmall from '../../../assets/images/framePurpleSmall.png';
import photoframe from '../../../assets/images/photoframe.png';
import sample from '../../../assets/images/sample.png';
import vigorlejour from '../../../assets/images/vigor-halimun.png';
import { DEFAULT_ANCHOR } from '../../../constants';
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
      {isAira ? <Title data-aos="fade-up">The Bride and Groom</Title> : ' '}
      <FrameBase className={s.frameBase}>
        <AnimationWrapper
          data-aos={isAira ? 'fade-up-left' : 'fade-down-left'}
          data-aos-delay="700"
          {...DEFAULT_ANCHOR}
          className={s.z5}
        >
          <img
            src={framePurpleBig}
            className={classNames(s.framePurpleBig, isAira ? s.aira : s.vigor)}
          />
        </AnimationWrapper>
        <AnimationWrapper
          data-aos={isAira ? 'fade-down-right' : 'fade-up-right'}
          data-aos-delay="700"
          {...DEFAULT_ANCHOR}
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
          src={photoframe}
          className={s.photoframe}
          data-aos="fade-down"
          {...DEFAULT_ANCHOR}
        />
        {/* TODO: use actual photo (dimension approx. 316 x 471 ) */}
        <div
          className={s.photoWrapper}
          data-aos="fade"
          data-aos-delay="800"
          {...DEFAULT_ANCHOR}
        >
          <img src={isAira ? Aira : sample} className={s.photo} />
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
