import venuebg from '../../../assets/images/venue-background.jpg';
import venueframe from '../../../assets/images/venueframe.png';
import { ASTON_GMAPS_LINK, DEFAULT_AOS } from '../../../constants';
import { Button } from '../../Button/Button';
import { NameText } from '../../NameText/NameText';
import { SectionContainer } from '../../SectionContainer/SectionContainer';
import { Separator } from '../../Separator/Separator';
import { Title } from '../../Title/Title';
import s from './TimeAndVenue.module.scss';

export const TimeAndVenue = () => {
  return (
    <SectionContainer className={s.container}>
      <Title className={s.weddingDay} data-aos="fade-down" {...DEFAULT_AOS}>
        The Wedding Day
      </Title>
      <div className={s.dateContainer} data-aos="fade-down" {...DEFAULT_AOS}>
        Sabtu, 14 September 2024
      </div>
      <div className={s.venueContainer}>
        <div
          className={s.venueframeWrapper}
          data-aos="zoom-in"
          {...DEFAULT_AOS}
        >
          <img src={venueframe} className={s.venueframe} />
          <img src={venuebg} className={s.venuebg} />
        </div>
        <div
          className={s.venueDetailWrapper}
          {...DEFAULT_AOS}
          data-aos="zoom-in"
          data-aos-delay="500"
        >
          <div className={s.timeSection}>
            <NameText className={s.sectionHeader}>Akad</NameText>
            <div>08.00 - 11.00 WIB</div>
          </div>
          <Separator className={s.separatorWrapper}>
            <hr className={s.separator} />
          </Separator>
          <div className={s.timeSection}>
            <NameText className={s.sectionHeader}>Resepsi</NameText>
            <div>12.30 - 15.00 WIB</div>
          </div>
          <div className={s.place}>
            <div className={s.roomVenue}>Sapphire Grand Ballroom</div>
            <div className={s.hotelVenue}>Aston Hotel Cirebon</div>
            <div className={s.address}>
              Jl. Brigjend Dharsono By Pass No.12C, Kedawung,
              <br />
              Kota Cirebon, Jawa Barat
            </div>
          </div>
          <div className={s.btnContainer}>
            <Button
              className={s.mapBtn}
              size="sm"
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
