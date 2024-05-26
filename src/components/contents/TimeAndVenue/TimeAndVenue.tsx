import { ASTON_GMAPS_LINK } from '../../../constants';
import { Button } from '../../Button/Button';
import { Title } from '../../Title/Title';
import s from './TimeAndVenue.module.scss';

export const TimeAndVenue = () => {
  return (
    <div className={s.container}>
      <Title>Wedding Day</Title>
      <div>
        <div>Sabtu</div>
        <div>14</div>
        <div>September 2024</div>
      </div>
      <div>
        <div>Akad</div>
        <div>08.00 - 11.00</div>
        <div>&#40;Keluarga&#41;</div>
      </div>
      <div>
        <div>Resepsi</div>
        <div>12.00 - 15.00</div>
      </div>
      <div>
        <div>Grand Sapphire Ballroom</div>
        <div>Aston Hotel Cirebon</div>
        <div>
          Jl. Brigjend Dharsono By Pass No.12C, Kel. Kertawinangun, Kec.
          Kedawung, Kota Cirebon, Jawa Barat 45132
        </div>
      </div>
      <div className={s.btnContainer}>
        <Button
          onClick={() => {
            window.open(ASTON_GMAPS_LINK, '_blank');
          }}
        >
          View Maps
        </Button>
      </div>
    </div>
  );
};
