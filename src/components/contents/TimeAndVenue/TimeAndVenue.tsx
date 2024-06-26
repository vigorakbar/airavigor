import venueframe from '../../../assets/images/venueframe.png';
import { ASTON_GMAPS_LINK } from '../../../constants';
import { Button } from '../../Button/Button';
import { NameText } from '../../NameText/NameText';
import { SectionContainer } from '../../SectionContainer/SectionContainer';
import { Separator } from '../../Separator/Separator';
import { Title } from '../../Title/Title';
import s from './TimeAndVenue.module.scss';

export const TimeAndVenue = () => {
  return (
    <SectionContainer className={s.container}>
      <Title>Wedding Day</Title>
      <div className={s.venueContainer}>
        <div className={s.venueframeWrapper}>
          <img src={venueframe} className={s.venueframe} />
        </div>
        <div className={s.venueDetailWrapper}>
          <div className={s.dateContainer}>
            <div>Sabtu</div>
            <div>14 September 2024</div>
          </div>
          <Separator className={s.separatorWrapper}>
            <hr className={s.separator} />
          </Separator>
          <div className={s.timeSection}>
            <NameText className={s.sectionHeader}>Akad</NameText>
            <div>08.00 - 11.00</div>
            <div>&#40;Keluarga&#41;</div>
          </div>
          <div className={s.timeSection}>
            <NameText className={s.sectionHeader}>Resepsi</NameText>
            <div>12.00 - 15.00</div>
          </div>
          <div>
            <div className={s.hotelVenue}>Grand Sapphire Ballroom</div>
            <div className={s.hotelVenue}>Aston Hotel Cirebon</div>
            <div className={s.address}>
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
      </div>
    </SectionContainer>
  );
};
