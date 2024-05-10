import { useScrollAreaProgress } from '../../../hooks/useScrollProgress';
import { CSSProperties, useEffect, useMemo, useState } from 'react';

export const useTableItemsStyle = () => {
  const { scrollAreaRef, progress } = useScrollAreaProgress();

  const initTableStyle = useMemo(
    () =>
      ({
        height: '250vh',
        width: '350vw',
        left: '-50vw',
        scale: 1,
      }) as CSSProperties,
    [],
  );

  const initTimeVenueStyle = {
    left: '50vw',
  } as CSSProperties;

  const initRsvpStyle = {
    left: '200vw',
    top: '50vh',
  } as CSSProperties;

  const [tableStyle, setTableStyle] = useState(initTableStyle);
  const progressValue = Math.round(progress * 100);
  useEffect(() => {
    if (progressValue >= 0 && progressValue <= 20) {
      setTableStyle({ ...initTableStyle });
    } else if (progressValue > 20 && progressValue <= 30) {
      const zoomOutProgress = (progressValue - 20) / 10;

      setTableStyle(style => ({
        ...style,
        top: `${zoomOutProgress * -3}vh`,
        scale: 1 - zoomOutProgress * 0.2,
        left: `${-50 - zoomOutProgress * 3}vw`,
      }));
    } else if (progressValue > 30 && progressValue <= 70) {
      const moveToRsvpProgress = (progressValue - 30) / 40;
      setTableStyle(style => ({
        ...style,
        left: `${-53 - moveToRsvpProgress * 132}vw`,
        top: `${-3 - moveToRsvpProgress * 97}vh`,
      }));
    } else if (progressValue > 70 && progressValue <= 80) {
      const zoomInProgress = (progressValue - 70) / 10;
      setTableStyle(style => ({
        ...style,
        left: `${-185 - zoomInProgress * 15}vw`,
        top: `${-100 - zoomInProgress * 50}vh`,
        scale: 0.8 + zoomInProgress * 0.2,
      }));
    } else {
      setTableStyle(style => ({
        ...style,
        left: '-200vw',
        top: '-150vh',
        scale: 1,
      }));
    }
  }, [initTableStyle, progressValue]);

  return {
    tableStyle,
    timeVenueStyle: initTimeVenueStyle,
    rsvpStyle: initRsvpStyle,
    scrollAreaRef,
  };
};
