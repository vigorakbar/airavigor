import item1 from '../../../assets/portraitsofus/item1.jpg';
import item2 from '../../../assets/portraitsofus/item2.jpg';
import item3 from '../../../assets/portraitsofus/item3.jpg';
import item4 from '../../../assets/portraitsofus/item4.jpg';
import item5 from '../../../assets/portraitsofus/item5.jpg';
import item6 from '../../../assets/portraitsofus/item6.jpg';
import item7 from '../../../assets/portraitsofus/item7.jpg';
import item8 from '../../../assets/portraitsofus/item8.jpg';
import item9 from '../../../assets/portraitsofus/item9.jpg';
import item10 from '../../../assets/portraitsofus/item10.jpg';
import item11 from '../../../assets/portraitsofus/item11.jpg';
import item12 from '../../../assets/portraitsofus/item12.jpg';
import { DEFAULT_AOS } from '../../../constants';
import { SectionContainer } from '../../SectionContainer/SectionContainer';
import { Title } from '../../Title/Title';
import s from './PortraitOfUs.module.scss';
import classNames from 'classnames';

export const PortraitOfUs = () => {
  return (
    <SectionContainer>
      <Title className={s.title} data-aos="fade-down" {...DEFAULT_AOS}>
        Portraits of Us
      </Title>
      <div className={s.gallery}>
        <div className={classNames(s.galleryRow, s.row1)}>
          <div className={s.galleryColumn} style={{ flex: 1 }}>
            <div
              className={classNames(s.galleryItem, s.large)}
              style={{
                backgroundImage: `url(${item1})`,
                backgroundSize: '133%',
                backgroundPositionY: '28%',
                backgroundPositionX: '3%',
              }}
              data-aos="fade"
              {...DEFAULT_AOS}
            />
          </div>
          <div className={s.galleryColumn} style={{ flex: 1.13 }}>
            <div
              className={classNames(s.galleryItem, s.small)}
              style={{
                backgroundImage: `url(${item2})`,
                backgroundPositionY: '66%',
              }}
              data-aos="fade"
              {...DEFAULT_AOS}
            />
            <div
              className={classNames(s.galleryItem, s.small)}
              style={{
                backgroundImage: `url(${item3})`,
                backgroundPositionX: '41%',
                backgroundPositionY: '43%',
                backgroundSize: '125%',
              }}
              data-aos="fade"
              {...DEFAULT_AOS}
            />
          </div>
        </div>
        <div className={classNames(s.galleryRow, s.row2)}>
          <div
            className={classNames(s.galleryItem, s.large)}
            style={{
              backgroundImage: `url(${item4})`,
              backgroundSize: '128%',
              backgroundPosition: 'center',
            }}
            data-aos="fade"
            {...DEFAULT_AOS}
          />
        </div>
        <div className={classNames(s.galleryRow, s.row3)}>
          <div
            className={classNames(s.galleryItem, s.large)}
            style={{ backgroundImage: `url(${item5})` }}
            data-aos="fade"
            {...DEFAULT_AOS}
          />
          <div
            className={classNames(s.galleryItem, s.large)}
            style={{ backgroundImage: `url(${item6})` }}
            data-aos="fade"
            {...DEFAULT_AOS}
          />
        </div>
        <div className={classNames(s.galleryRow, s.row4)}>
          <div className={s.galleryColumn} style={{ flex: 1 }}>
            <div
              className={classNames(s.galleryItem, s.large)}
              style={{ backgroundImage: `url(${item7})` }}
              data-aos="fade"
              {...DEFAULT_AOS}
            />
          </div>
          <div className={s.galleryColumn} style={{ flex: 1 }}>
            <div
              className={classNames(s.galleryItem, s.large)}
              style={{
                backgroundImage: `url(${item8})`,
                backgroundSize: '147%',
              }}
              data-aos="fade"
              {...DEFAULT_AOS}
            />
          </div>
        </div>
        <div className={classNames(s.galleryRow, s.row5)}>
          <div
            className={classNames(s.galleryItem, s.large)}
            style={{
              backgroundImage: `url(${item9})`,
              backgroundPositionY: '80%',
            }}
            data-aos="fade"
            {...DEFAULT_AOS}
          />
        </div>
        <div className={classNames(s.gallery, s.gallery2)}>
          <div className={s.galleryRow}>
            <div
              className={classNames(s.galleryItem, s.large)}
              style={{
                backgroundImage: `url(${item10})`,
                backgroundPositionY: '67%',
              }}
              data-aos="fade"
              {...DEFAULT_AOS}
            />
          </div>
          <div className={s.galleryRow}>
            <div
              className={classNames(s.galleryItem, s.large)}
              style={{
                backgroundImage: `url(${item11})`,
                backgroundPositionY: '83%',
              }}
              data-aos="fade"
              {...DEFAULT_AOS}
            />
          </div>
          <div className={s.galleryRow}>
            <div
              className={classNames(s.galleryItem, s.large)}
              style={{
                backgroundImage: `url(${item12})`,
                backgroundPositionY: '93%',
                backgroundSize: '103%',
              }}
              data-aos="fade"
              {...DEFAULT_AOS}
            />
          </div>
        </div>
      </div>
    </SectionContainer>
  );
};
