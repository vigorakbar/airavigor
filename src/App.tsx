import s from './App.module.scss';
import airaVigorHalimun from './assets/images/airavigor-halimun.png';
import avLejour from './assets/images/av-lejour.png';
import envelbackenv from './assets/images/envel-backenv.png';
import envelbacklid from './assets/images/envel-backlid.png';
import envelfront from './assets/images/envel-front.png';
import envellid from './assets/images/envel-lid.png';
import frontframe from './assets/images/frontframe.png';
import paperBackground from './assets/images/paper-background.png';
import { EnvelopeSection } from './components/Envelope/EnvelopeSection';
import { MainHeader } from './components/MainHeader/MainHeader';
import { Separator } from './components/Separator/Separator';
import { BrideAndGroom } from './components/contents/BrideAndGroom/BrideAndGroom';
import { CountDown } from './components/contents/Countdown/Countdown';
import { Gifts } from './components/contents/Gifts/Gifts';
import { OurStory } from './components/contents/OurStory/OurStory';
import { RSVP } from './components/contents/RSVP/RSVP';
import { Thanks } from './components/contents/Thanks/Thanks';
import { TimeAndVenue } from './components/contents/TimeAndVenue/TimeAndVenue';
import { Verse1, Verse2 } from './components/contents/Verse/Verse';
import { Wishes } from './components/contents/Wishes/Wishes';
import { loadRemoteImage } from './utils/common';
import AOS from 'aos';
import 'aos/dist/aos.css';
import classNames from 'classnames';
import cx from 'classnames';
import React, { useEffect, useRef, useState } from 'react';
import { Toaster } from 'react-hot-toast';

const imagesNeedLoad = [
  envelbackenv,
  envelbacklid,
  envelfront,
  envellid,
  airaVigorHalimun,
  avLejour,
  frontframe,
];

const App: React.FC = () => {
  const [envelopeOpened, setEnvelopeOpened] = useState(false);
  const [mainHeaderFinished, setMainHeaderFinished] = useState(false);

  const [loadingImg, setLoadingImg] = useState(true);

  const [contentTopGap, setContentTopGap] = useState(0);

  useEffect(() => {
    AOS.init({ once: true });
  }, []);

  useEffect(() => {
    const loadImages = async () => {
      const imagesPromise = imagesNeedLoad.map(imgUrl =>
        loadRemoteImage(imgUrl),
      );
      try {
        await Promise.all(imagesPromise);
      } catch (e) {
        setLoadingImg(false);
      }

      setLoadingImg(false);
    };

    loadRemoteImage(paperBackground);
    loadImages();
  }, []);

  useEffect(() => {
    if (!envelopeOpened) {
      document.body.style.height = '100%';
      document.body.style.position = 'fixed';
      document.body.style.overflowY = 'scroll';
    } else {
      document.body.style.height = 'initial';
      document.body.style.position = 'initial';
      document.body.style.overflow = 'initial';
    }
  }, [envelopeOpened]);

  const contentRef = useRef<HTMLDivElement>(null);

  return (
    <div>
      {envelopeOpened ? (
        <div
          className={classNames(
            s.container,
            mainHeaderFinished && s.containerBg,
          )}
        >
          <MainHeader
            setMainHeaderFinished={setMainHeaderFinished}
            mainHeaderFinished={mainHeaderFinished}
            setContentTopGap={setContentTopGap}
          />
          <div
            ref={contentRef}
            className={cx(
              !mainHeaderFinished && s.hideContent,
              mainHeaderFinished && s.contentContainer,
              mainHeaderFinished && s.containerImg,
            )}
          >
            <div>
              <Verse1 contentTopGap={contentTopGap} />
              <BrideAndGroom name="aira" />
              <Separator className={s.bngSeparator}>&</Separator>
              <BrideAndGroom name="vigor" />
              <Verse2 />
              <OurStory />
              <CountDown />
              <TimeAndVenue />
              <Gifts />
              <RSVP />
              <Wishes />
              <Thanks />
            </div>
          </div>
        </div>
      ) : (
        <>
          <EnvelopeSection
            loadingImg={loadingImg}
            setEnvelopeOpened={setEnvelopeOpened}
          />
          {loadingImg && (
            <div className={s.loadingContainer}>
              <div className={s.loadingIndicator} />
            </div>
          )}
        </>
      )}
      <Toaster containerStyle={{ fontSize: 16 }} />
    </div>
  );
};

export default App;
