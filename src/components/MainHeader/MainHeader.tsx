import doubledown from '../../assets/images/double-down.png';
import { useScrollAreaProgress } from '../../hooks/useScrollProgress';
import s from './MainHeader.module.scss';
import { MainCard } from './components/MainCard/MainCard';
import { OpeningInvitation } from './components/OpeningInvitation/OpeningInvitation';
import Aos from 'aos';
import classNames from 'classnames';
import debounce from 'lodash.debounce';
import { useEffect, useState } from 'react';

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
  const [changeBg, setChangeBg] = useState(false);

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

  useEffect(() => {
    setTimeout(() => {
      setShowHint(true);
    }, 0);
    setTimeout(() => {
      setChangeBg(true);
    }, 10);
  }, []);

  return (
    <div className={s.scrollArea} ref={scrollAreaRef}>
      <div
        className={classNames(
          s.mainHeaderContainer,
          changeBg && s.changeBackground,
        )}
      >
        <div className={s.innerContainer}>
          <MainCard progress={progress} />
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
