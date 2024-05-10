import s from './App.module.scss';
// import { CardMainContent } from './components/CardMainContent/CardMainContent';
import { EnvelopeSection } from './components/Envelope/EnvelopeSection';
import { MainHeader } from './components/MainHeader/MainHeader';
import { BrideAndGroom } from './components/contents/BrideAndGroom/BrideAndGroom';
import { Gifts } from './components/contents/Gifts/Gifts';
import { OurStory } from './components/contents/OurStory/OurStory';
import { TableTransition } from './components/contents/TableTransition/TableTransition';
import { Thanks } from './components/contents/Thanks/Thanks';
import { Wishes } from './components/contents/Wishes/Wishes';
import { debounce } from './utils/debounce';
import { disableScrollTemporary } from './utils/scroll';
import cx from 'classnames';
import React, { useCallback, useEffect, useRef, useState } from 'react';

const App: React.FC = () => {
  const [envelopeOpened, setEnvelopeOpened] = useState(false);
  const [mainHeaderFinished, setMainHeaderFinished] = useState(false);

  const contentRef = useRef<HTMLDivElement>(null);

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const debouncedScroll = useCallback(
    debounce(
      (type: 'content' | 'top', scrollRef: React.RefObject<HTMLDivElement>) => {
        if (type === 'content') {
          setTimeout(() => {
            scrollRef?.current?.scrollIntoView();
            disableScrollTemporary(200);
          }, 100);
        } else {
          scrollTo(0, 0);
          disableScrollTemporary(200);
        }
      },
      100,
    ),
    [],
  );

  useEffect(() => {
    if (mainHeaderFinished && contentRef?.current) {
      debouncedScroll('content', contentRef);
    } else {
      debouncedScroll('top');
    }
  }, [debouncedScroll, mainHeaderFinished]);

  return (
    <>
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
            <BrideAndGroom />
            <OurStory />
            <TableTransition />
            <Gifts />
            <Wishes />
            <Thanks />
          </div>
        </div>
      ) : (
        <EnvelopeSection setEnvelopeOpened={setEnvelopeOpened} />
      )}
    </>
  );
};

export default App;
