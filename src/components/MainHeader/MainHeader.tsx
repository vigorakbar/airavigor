import { useScrollAreaProgress } from '../../hooks/useScrollProgress';
import s from './MainHeader.module.scss';
import { MainCard } from './components/MainCard/MainCard';
import { useEffect } from 'react';

export const MainHeader = ({
  setMainHeaderFinished,
}: {
  setMainHeaderFinished: (finished: boolean) => void;
}) => {
  const { progress, scrollAreaRef } = useScrollAreaProgress();

  useEffect(() => {
    const triggerFinished = () => {
      setTimeout(() => {
        setMainHeaderFinished(true);
      }, 200);
    };
    if (progress >= 0.9) {
      triggerFinished();
    } else {
      setMainHeaderFinished(false);
    }
  }, [progress, setMainHeaderFinished]);

  return (
    <div className={s.scrollArea} ref={scrollAreaRef}>
      <div className={s.mainHeaderContainer}>
        <MainCard progress={progress} />
      </div>
    </div>
  );
};
