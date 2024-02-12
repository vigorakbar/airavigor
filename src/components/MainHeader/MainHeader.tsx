import { useState } from 'react';
import cx from 'classnames';
import { useScrollAreaProgress } from '../../hooks/useScrollProgress';
import { MainCard } from './components/MainCard/MainCard';
import { Envelope } from './components/Envelope/Envelope';

import s from './MainHeader.module.scss';

export const MainHeader = () => {
  const { progress, scrollAreaRef } = useScrollAreaProgress();
  const [envelopeOpen, setEnvelopeOpen] = useState(false);
  console.log('var progress', progress);
  return (
    <>
      {!envelopeOpen && <Envelope setEnvelopeOpen={setEnvelopeOpen} />}
      <div className={cx(!envelopeOpen && s.withModal)}>
        <div className={s.scrollArea} ref={scrollAreaRef}>
          <div className={s.mainHeaderContainer}>
            <MainCard progress={progress} />
          </div>
        </div>
      </div>
    </>
  );
};
