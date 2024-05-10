import { useScrollAreaProgress } from '../../hooks/useScrollProgress';
import { debounce } from '../../utils/debounce';
import s from './MainHeader.module.scss';
import { MainCard } from './components/MainCard/MainCard';
import { OpeningInvitation } from './components/OpeningInvitation/OpeningInvitation';
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

  return (
    <div className={s.scrollArea} ref={scrollAreaRef}>
      <div className={s.mainHeaderContainer}>
        <MainCard progress={progress} />
      </div>
      {mainHeaderFinished && <OpeningInvitation />}
    </div>
  );
};
