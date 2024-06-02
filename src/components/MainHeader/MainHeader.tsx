import { useScrollAreaProgress } from '../../hooks/useScrollProgress';
import s from './MainHeader.module.scss';
import { MainCard } from './components/MainCard/MainCard';
import { OpeningInvitation } from './components/OpeningInvitation/OpeningInvitation';
import Aos from 'aos';
import debounce from 'lodash.debounce';
import { useEffect } from 'react';

export const MainHeader = ({
  setMainHeaderFinished,
  mainHeaderFinished,
}: {
  setMainHeaderFinished: (finished: boolean) => void;
  mainHeaderFinished: boolean;
}) => {
  const { progress, scrollAreaRef } = useScrollAreaProgress();
  const debouncedFinished = debounce(setMainHeaderFinished, 200);

  useEffect(() => {
    if (progress >= 0.85) {
      debouncedFinished(true);
    } else {
      debouncedFinished(false);
    }
  }, [progress, debouncedFinished, mainHeaderFinished]);

  useEffect(() => {
    Aos.refresh();
  }, [mainHeaderFinished]);

  return (
    <div className={s.scrollArea} ref={scrollAreaRef}>
      <div className={s.mainHeaderContainer}>
        <div className={s.innerContainer}>
          <MainCard progress={progress} />
        </div>
      </div>
      {mainHeaderFinished && <OpeningInvitation />}
    </div>
  );
};
