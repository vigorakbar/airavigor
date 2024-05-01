import s from './App.module.scss';
import { BrideAndGroom } from './components/BrideAndGroom/BrideAndGroom';
import { Envelope } from './components/Envelope/Envelope';
import { MainHeader } from './components/MainHeader/MainHeader';
import React, { useState } from 'react';

const App: React.FC = () => {
  const [envelopeOpened, setEnvelopeOpened] = useState(false);
  const [mainHeaderFinished, setMainHeaderFinished] = useState(false);
  return (
    <>
      {envelopeOpened ? (
        <div className={s.container}>
          <MainHeader setMainHeaderFinished={setMainHeaderFinished} />
          {mainHeaderFinished && <BrideAndGroom />}
        </div>
      ) : (
        <Envelope setEnvelopeOpened={setEnvelopeOpened} />
      )}
    </>
  );
};

export default App;
