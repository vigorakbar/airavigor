import doubledown from '../../assets/images/double-down.png';
import { PROGRESS_FINISHED_THRESHOLD } from '../../constants';
import { useScrollAreaProgress } from '../../hooks/useScrollProgress';
import s from './MainHeader.module.scss';
import { MainCard } from './components/MainCard/MainCard';
import { OpeningInvitation } from './components/OpeningInvitation/OpeningInvitation';
import Aos from 'aos';
import classNames from 'classnames';
import debounce from 'lodash.debounce';
import { useEffect, useState } from 'react';

const bigWidth = window.screen.width > 640;

export const MainHeader = ({
  setMainHeaderFinished,
  mainHeaderFinished,
  setContentTopGap,
}: {
  setMainHeaderFinished: (finished: boolean) => void;
  mainHeaderFinished: boolean;
  setContentTopGap: (gap: number) => void;
}) => {
  const { progress, scrollAreaRef } = useScrollAreaProgress();
  const debouncedFinished = debounce(setMainHeaderFinished, 200);
  const [showHint, setShowHint] = useState(false);

  useEffect(() => {
    if (progress >= PROGRESS_FINISHED_THRESHOLD) {
      debouncedFinished(true);
    } else {
      debouncedFinished(false);
    }
  }, [progress, debouncedFinished, mainHeaderFinished]);

  useEffect(() => {
    Aos.refresh();
  }, [mainHeaderFinished]);

  useEffect(() => {
    setTimeout(() => {
      setShowHint(true);
    }, 0);
  }, []);

  return (
    <div className={s.scrollArea} ref={scrollAreaRef}>
      <div
        className={classNames(
          s.mainHeaderContainer,
          mainHeaderFinished && bigWidth && s.changeBackground,
        )}
      >
        <div className={s.innerContainer}>
          <MainCard
            progress={progress}
            mainHeaderFinished={mainHeaderFinished}
          />
        </div>
        {progress < 0.5 && (
          <div
            className={classNames(
              s.scrollDownHint,
              showHint && progress < 0.2 && s.showHint,
            )}
          >
            <div>Scroll ke bawah</div>
            <div>
              <img src={doubledown} />
            </div>
          </div>
        )}
      </div>
      {mainHeaderFinished && (
        <OpeningInvitation setContentTopGap={setContentTopGap} />
      )}
    </div>
  );
};
