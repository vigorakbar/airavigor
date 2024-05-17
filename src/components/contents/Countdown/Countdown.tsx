import {
  DAY_IN_MS,
  HOUR_IN_MS,
  MINUTE_IN_MS,
  SECOND_IN_MS,
  WEDDING_DATE_TIMESTAMP,
} from '../../../constants';
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
    <div style={{ background: 'white' }}>
      <div>Countdown:</div>
      <div>{days} days</div>
      <div>{hours} hours</div>
      <div>{minutes} minutes</div>
      <div>{seconds} seconds</div>
    </div>
  );
};
