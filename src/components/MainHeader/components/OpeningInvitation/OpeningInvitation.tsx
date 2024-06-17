import airavigorlejour from '../../../../assets/images/airavigor-halimun.png';
import frontframe from '../../../../assets/images/frontframe.png';
import sample from '../../../../assets/images/sample.png';
import { FrameBase } from '../../../Frame/FrameBase';
import { Initial } from '../../../Initial/Initial';
import s from './OpeningInvitation.module.scss';
import React from 'react';

export const OpeningInvitation: React.FC = () => {
  return (
    <div
      className={s.openingInvitation}
      data-aos="fade"
      data-aos-anchor-placement="top-top"
      data-aos-offset="-100"
    >
      <div className={s.bg} data-aos="fade" />

      <div className={s.weInvite}>We invite you to the wedding of</div>
      {/* <NameText className={s.name}>Aira & Vigor</NameText> */}
      <img src={airavigorlejour} className={s.nameImg} />
      <div className={s.frameContainer}>
        <FrameBase className={s.frameWrapper}>
          <img src={frontframe} className={s.frontframe} />
          {/* TODO: use actual photo (dimension approx. 316 x 471 ) */}
          <div className={s.photoWrapper}>
            <img src={sample} className={s.photo} />
          </div>
        </FrameBase>
      </div>

      <div className={s.words}>
        With immense joy in our hearts, we invite you to witness and celebrate
        the next chapter of our love story as we embark on this journey
        together, towards forever
      </div>
      <Initial className={s.initial} data-aos="fade" data-aos-delay="300" />
      <div className={s.hashtag} data-aos="fade" data-aos-delay="300">
        #AIhaveVIGureditout #IhaveFigureditout
      </div>
    </div>
  );
};
