import { FrameBase } from '../../../Frame/FrameBase';
import { NameText } from '../../../NameText/NameText';
import s from './OpeningInvitation.module.scss';
import React from 'react';

export const OpeningInvitation: React.FC = () => {
  return (
    <div className={s.openingInvitation}>
      <NameText className={s.initial}>
        <span>A</span>
        <span>V</span>
      </NameText>
      <div className={s.frameContainer}>
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
            <span>FOTO</span>
          </div>
        </FrameBase>
      </div>
      <div className={s.weInvite}>We invite you to the wedding of</div>
      <NameText className={s.name}>Aira & Vigor</NameText>
      <div className={s.words}>
        With immense joy in our hearts, we invite you to witness and celebrate
        the next chapter of our love story as we embark on this journey
        together, towards forever
      </div>
      <div className={s.hashtag}>#AIhaveVIGureditout #IhaveFigureditout</div>
    </div>
  );
};
