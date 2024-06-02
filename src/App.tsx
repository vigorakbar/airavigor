import s from './App.module.scss';
// import { CardMainContent } from './components/CardMainContent/CardMainContent';
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
import AOS from 'aos';
import 'aos/dist/aos.css';
import cx from 'classnames';
import React, { useEffect, useRef, useState } from 'react';
import { Toaster } from 'react-hot-toast';

const App: React.FC = () => {
  const [envelopeOpened, setEnvelopeOpened] = useState(false);
  const [mainHeaderFinished, setMainHeaderFinished] = useState(false);

  useEffect(() => {
    AOS.init();
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
        <div className={s.container}>
          <MainHeader
            setMainHeaderFinished={setMainHeaderFinished}
            mainHeaderFinished={mainHeaderFinished}
          />
          <div
            ref={contentRef}
            className={cx(!mainHeaderFinished && s.hideContent)}
          >
            <Verse1 />
            <BrideAndGroom name="aira" />
            <Separator>&</Separator>
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
      ) : (
        <EnvelopeSection setEnvelopeOpened={setEnvelopeOpened} />
      )}
      <Toaster containerStyle={{ fontSize: 16 }} />
    </div>
  );
};

export default App;
