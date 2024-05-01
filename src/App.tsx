import s from './App.module.scss';
import { Envelope } from './components/Envelope/Envelope';
import { MainHeader } from './components/MainHeader/MainHeader';
import { BrideAndGroom } from './components/contents/1BrideAndGroom/BrideAndGroom';
import { OurStory } from './components/contents/2OurStory/OurStory';
import { TableTransition } from './components/contents/3TableTransition/TableTransition';
import { Gifts } from './components/contents/5Gifts/Gifts';
import { Wishes } from './components/contents/6Wishes/Wishes';
import { Thanks } from './components/contents/10Thanks/Thanks';
import cx from 'classnames';
import React, { useState } from 'react';

const App: React.FC = () => {
  const [envelopeOpened, setEnvelopeOpened] = useState(false);
  const [mainHeaderFinished, setMainHeaderFinished] = useState(false);
  return (
    <>
      {envelopeOpened ? (
        <div className={s.container}>
          <MainHeader setMainHeaderFinished={setMainHeaderFinished} />
          <div className={cx(!mainHeaderFinished && s.hideContent)}>
            <BrideAndGroom />
            <OurStory />
            <TableTransition />
            <Gifts />
            <Wishes />
            <Thanks />
          </div>
        </div>
      ) : (
        <Envelope setEnvelopeOpened={setEnvelopeOpened} />
      )}
    </>
  );
};

export default App;
