import { useScrollAreaProgress } from '../../hooks/useScrollProgress';
import s from './MainHeader.module.scss';
import { MainCard } from './components/MainCard/MainCard';

export const MainHeader = () => {
  const { progress, scrollAreaRef } = useScrollAreaProgress();
  console.log('var progress', progress);
  return (
    <div className={s.scrollArea} ref={scrollAreaRef}>
      <div className={s.mainHeaderContainer}>
        <MainCard progress={progress} />
      </div>
    </div>
  );
};
