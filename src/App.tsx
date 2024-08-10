import s from './App.module.scss';
import airaVigor from './assets/images/AiraVigor.jpg';
import airaVigorHalimun from './assets/images/airavigor-halimun.png';
import avLejour from './assets/images/av-lejour.png';
import backgroundAmplop from './assets/images/background-amplop.png';
import envelbackenv from './assets/images/envel-backenv.png';
import envelbacklid from './assets/images/envel-backlid.png';
import envelfront from './assets/images/envel-front.png';
import envellid from './assets/images/envel-lid.png';
import frontframe from './assets/images/frontframe.png';
import letterTexture from './assets/images/letter-texture.png';
import { BgMusic } from './components/BgMusic/BgMusic';
import { EnvelopeSection } from './components/Envelope/EnvelopeSection';
import { MainHeader } from './components/MainHeader/MainHeader';
import { Separator } from './components/Separator/Separator';
import { BrideAndGroom } from './components/contents/BrideAndGroom/BrideAndGroom';
import { CountDown } from './components/contents/Countdown/Countdown';
import { Gifts } from './components/contents/Gifts/Gifts';
import { OurStory } from './components/contents/OurStory/OurStory';
import { PortraitOfUs } from './components/contents/PortraitOfUs/PortraitOfUs';
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
  airaVigor,
  letterTexture,
];

const App: React.FC = () => {
  const [envelopeOpened, setEnvelopeOpened] = useState(false);
  const [mainHeaderFinished, setMainHeaderFinished] = useState(false);

  const [loadingImg, setLoadingImg] = useState(true);

  const [contentTopGap, setContentTopGap] = useState(0);

  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement>(null);

  const toggleMusic = () => {
    if (!audioRef?.current) return;
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  useEffect(() => {
    AOS.init({
      once: true,
    });
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

    loadRemoteImage(backgroundAmplop);
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
              <PortraitOfUs />
              <Thanks />
            </div>
          </div>
        </div>
      ) : (
        <>
          <EnvelopeSection
            loadingImg={loadingImg}
            setEnvelopeOpened={setEnvelopeOpened}
            toggleMusic={toggleMusic}
          />
          {loadingImg && (
            <div className={s.loadingContainer}>
              <div className={s.loadingIndicator} />
            </div>
          )}
        </>
      )}
      <Toaster containerStyle={{ fontSize: 16 }} />
      <BgMusic
        isPlaying={isPlaying}
        toggleMusic={toggleMusic}
        audioRef={audioRef}
      />
    </div>
  );
};

export default App;
