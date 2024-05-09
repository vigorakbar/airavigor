import { useScrollAreaProgress } from '../../hooks/useScrollProgress';
import { debounce } from '../../utils/debounce';
import s from './MainHeader.module.scss';
import { MainCard } from './components/MainCard/MainCard';
import { useEffect } from 'react';

export const MainHeader = ({
  setMainHeaderFinished,
}: {
  setMainHeaderFinished: (finished: boolean) => void;
}) => {
  const { progress, scrollAreaRef } = useScrollAreaProgress();
  const debouncedFinished = debounce(setMainHeaderFinished, 200);

  useEffect(() => {
    const triggerFinished = () => {
      setTimeout(() => {
        debouncedFinished(true);
      }, 200);
    };
    if (progress >= 0.9) {
      triggerFinished();
    } else {
      debouncedFinished(false);
    }
  }, [progress, debouncedFinished]);

  return (
    <div className={s.scrollArea} ref={scrollAreaRef}>
      <div className={s.mainHeaderContainer}>
        <MainCard progress={progress} />
      </div>
    </div>
  );
};
