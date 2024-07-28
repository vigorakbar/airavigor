import arrange1 from '../../../assets/images/countdown-arrangement1.png';
import arrange2 from '../../../assets/images/countdown-arrangement2.png';
import {
  ADD_CALENDAR_LINK,
  DAY_IN_MS,
  HOUR_IN_MS,
  MINUTE_IN_MS,
  SECOND_IN_MS,
  WEDDING_DATE_TIMESTAMP,
} from '../../../constants';
import { Button } from '../../Button/Button';
import { SectionContainer } from '../../SectionContainer/SectionContainer';
import { Title } from '../../Title/Title';
import s from './Countdown.module.scss';
import React, { useEffect, useState } from 'react';

const currentTimestamp = new Date().getTime();

export const CountDown: React.FC = () => {
  const [timeStamp, setTimeStamp] = useState(currentTimestamp);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setTimeStamp(state => state + 1000);
    }, 1000);

    return () => {
      clearInterval(intervalId);
    };
  }, []);

  const diff = WEDDING_DATE_TIMESTAMP - timeStamp;

  const days = Math.floor(diff / DAY_IN_MS);
  const hours = Math.floor((diff % DAY_IN_MS) / HOUR_IN_MS);
  const minutes = Math.floor((diff % HOUR_IN_MS) / MINUTE_IN_MS);
  const seconds = Math.floor((diff % MINUTE_IN_MS) / SECOND_IN_MS);

  return (
    <SectionContainer className={s.sectionContainer}>
      <div className={s.contentContainer}>
        <Title className={s.title}>Countdown</Title>
        <div className={s.gridContainer}>
          <div className={s.countDownGrid}>
            <div className={s.item}>
              <div className={s.number}>{days}</div>
              <div className={s.unit}>days</div>
            </div>
            <div className={s.item}>
              <div className={s.number}>{hours}</div>
              <div className={s.unit}>hours</div>
            </div>
            <div className={s.item}>
              <div className={s.number}>{minutes}</div>
              <div className={s.unit}>minutes</div>
            </div>
            <div className={s.item}>
              <div className={s.number}>{seconds}</div>
              <div className={s.unit}>seconds</div>
            </div>
          </div>
        </div>
        <div className={s.btnContainer}>
          <Button
            onClick={() => {
              window.open(ADD_CALENDAR_LINK, '_blank');
            }}
          >
            Save the Date
          </Button>
        </div>
      </div>
      <div className={s.ornContainer}>
        <img src={arrange1} className={s.bottomLeft1} />
        <img src={arrange2} className={s.bottomLeft2} />
        <img src={arrange1} className={s.bottomRight1} />
        <img src={arrange2} className={s.bottomRight2} />

        <img src={arrange1} className={s.left1} />
        <img src={arrange2} className={s.left2} />
        <img src={arrange2} className={s.left3} />

        <img src={arrange2} className={s.right1} />
        <img src={arrange2} className={s.right2} />
        <img src={arrange1} className={s.right3} />

        <div className={s.topLeaves} />
      </div>
    </SectionContainer>
  );
};
