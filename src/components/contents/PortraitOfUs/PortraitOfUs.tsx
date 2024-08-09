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
      <div className={classNames(s.photoGrid, s.grid1)}>
        <div className={s.frame}></div>
        <div className={s.frame}></div>
        <div className={s.frame}></div>
        <div className={s.frame}></div>
        <div className={s.frame}></div>
        <div className={s.frame}></div>
      </div>
      <div className={classNames(s.photoGrid, s.grid2)}>
        <div className={s.frame}></div>
        <div className={s.frame}></div>
        <div className={s.frame}></div>
      </div>
    </SectionContainer>
  );
};
