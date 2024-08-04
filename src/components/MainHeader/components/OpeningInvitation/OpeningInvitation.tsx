import airavigorlejour from '../../../../assets/images/airavigor-halimun.png';
import frontframe from '../../../../assets/images/frontframe.png';
import sample from '../../../../assets/images/sample.png';
import { DEFAULT_ANCHOR } from '../../../../constants';
import { FrameBase } from '../../../Frame/FrameBase';
import { Initial } from '../../../Initial/Initial';
import s from './OpeningInvitation.module.scss';
import React, { useEffect, useRef } from 'react';

const ACTUAL_PADDING_TOP = 88;

export const OpeningInvitation: React.FC<{
  setContentTopGap: (gap: number) => void;
}> = ({ setContentTopGap }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef?.current;
    const content = contentRef?.current;
    if (container && content) {
      const containerStyle = window.getComputedStyle(container);
      const containerPaddingTop = containerStyle.paddingTop;

      const paddingTopNumber = parseFloat(containerPaddingTop);
      const topGap =
        content.offsetHeight + paddingTopNumber - container.offsetHeight;
      setContentTopGap(topGap + ACTUAL_PADDING_TOP);
    }
  }, [setContentTopGap]);

  return (
    <div
      className={s.openingInvitation}
      data-aos="fade"
      data-aos-anchor-placement="top-top"
      data-aos-offset="-100"
      ref={containerRef}
    >
      <div className={s.bg} data-aos="fade" />
      <div ref={contentRef}>
        <div className={s.weInvite} data-aos="fade-down" {...DEFAULT_ANCHOR}>
          We invite you to the wedding of
        </div>
        <img
          src={airavigorlejour}
          className={s.nameImg}
          data-aos="fade-down"
          {...DEFAULT_ANCHOR}
        />
        <div
          className={s.frameContainer}
          data-aos="fade-up"
          {...DEFAULT_ANCHOR}
        >
          <FrameBase className={s.frameWrapper}>
            <img src={frontframe} className={s.frontframe} />
            {/* TODO: use actual photo (dimension approx. 316 x 471 ) */}
            <div className={s.photoWrapper}>
              <img src={sample} className={s.photo} />
            </div>
          </FrameBase>
        </div>

        <div className={s.words} data-aos="fade-up" {...DEFAULT_ANCHOR}>
          With immense joy in our hearts, we invite you to witness and celebrate
          the next chapter of our love story as we embark on this journey
          together, towards forever
        </div>
        <Initial className={s.initial} data-aos="fade-up" {...DEFAULT_ANCHOR} />
        <div className={s.hashtag} data-aos="fade-up" {...DEFAULT_ANCHOR}>
          #AIhaveVIGureditout #IhaveFigureditout
        </div>
      </div>
    </div>
  );
};
